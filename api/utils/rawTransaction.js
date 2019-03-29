require("dotenv").config();

let Web3 = require("web3"),
  Tx = require("ethereumjs-tx");

let web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/47c181283cb345c19697f9403531914c"
  )
);

/**
 * Build a raw transaction and sign offline before sending
 *
 * @param method: method to access i.e. sendEther, sendToken, etc.
 * @param fromPub: address to send transaction from
 * @param toAddress: address to send transaction to
 * @param nonce: Must be incremented by 1 for each transaction
 * @param functionSignature E.g. getSegmentByID(uint) in ABI code (optional)
 * @param value in wei (optional)
 * @param gasLimit as a stringed number in wei
 * @param gasPrice as a stringed number in wei
 * @param fromPriv: address to sign transaction with
 */

function txBuilder({
  method,
  fromPub,
  toAddress,
  nonce,
  functionSignature,
  value,
  gasLimit,
  gasPrice,
  fromPriv
}) {
  //parameters in common
  //get the private key from .env OR from arg
  console.log('FROMPRIV', fromPriv)
  let privateKey = new Buffer.from(
    fromPriv ? fromPriv : process.env.PRIVATE_KEY,
    "hex"
  );
  //values to hex
  const nonceHex = web3.utils.toHex(nonce);
  const valueHex = web3.utils.toHex(value);
  const limitHex = web3.utils.toHex(gasLimit);
  const priceHex = web3.utils.toHex(gasPrice);
  //tx object
  let rawTx;

  //You can easily add more cases for anything you want
  switch (method) {
    case "sendEther":
      rawTx = {
        nonce: nonceHex,
        gasPrice: priceHex,
        gasLimit: limitHex,
        to: toAddress,
        from: fromPub,
        value: valueHex,
        data: functionSignature
      };
      break;
  }
  //new ethereumjs-tx
  let tx = new Tx(rawTx);
  
  console.log("raw TXT", tx);
  
  //sign transaction
  tx.sign(privateKey);
  
  //serialize transaction
  let serializedTx = tx.serialize();

  return serializedTx;
}

/**
 * Builds ether signed transaction
 *
 * @param method: smart contract method
 * @param senderPub: sender public address
 * @param senderPriv: sender private address
 * @param receiver: transaction receiver
 * @param amount: amount string in ether, converted to wei
 */

async function sendEther(
  contractMethod,
  senderPub,
  senderPriv,
  receiver,
  amount
) {
  /**
   * send Ether through a signed transaction function.
   *
   * @param value: amount to send. For demo purposes is static but it will be dynamic based on backend call.
   * @param gasLimit: get the gas limit of proposed transaction (wei).
   * @param gasPrice: get the current gas price (wei).
   * @param nonce: get the nonce for sending account.
   * @param txData: data object to pass to txBuilder.
   */

  console.log("Account balance:", await web3.eth.getBalance(senderPub));
  //make the value dynamic if you like

  const value = web3.utils.toWei(amount, "ether");

  // the 'pending' flag here adds the most recent transaction

  // TODO - this fails on new accounts, need to create a handler for fail cases
  // THIS IS THE CONTRACT NONCE NOT THE SENDER NONCE - GOTTA CONFIRM TOMORROW
  const nonce = await web3.eth.getTransactionCount(senderPub);

  //rinkeby gas limit and gas price can be checked on rinkeby.io
  const gasLimit = "6004303";

  //rinkeby current gas price is 1 gwei, setting to 10 will ensure priority mining
  const gasPrice = "80000000000";
  console.log("gas price is", gasPrice);

  console.log("nonce is", nonce);
  //get the nonce for the sending account

  //optional logs for sanity checks
  //build transaction object -- see tx_builder.js for input parameters
  let txData = {
    method: "sendEther",
    fromPub: senderPub,
    fromPriv: senderPriv,
    toAddress: receiver,
    nonce: nonce,
    functionSignature: contractMethod.encodeABI(),
    value: value,
    gasLimit: gasLimit,
    gasPrice: gasPrice,

  };

  console.log("Building Transaction", txData);
  try {
    //pass transaction object to txBuilder to construct and sign using private key
    let rawTx = txBuilder(txData);

    //optional logs for sanity checks
    console.log("Sending Signed Transaction");

    //send tx that was signed offline by txbuilder

    let transaction = await web3.eth
      .sendSignedTransaction("0x" + rawTx.toString("hex"))
      .on("transactionHash", console.log)
      .on("receipt", console.log);

    console.log(transaction);
    return transaction;
  } catch (error) {
    console.log(error);
  }
}
module.exports = sendEther;
