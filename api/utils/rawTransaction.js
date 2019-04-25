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
 * @param method: method to access i.e. sendRawTransaction, sendToken, etc.
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

  //get the private key
  let privateKey = new Buffer.from(fromPriv, "hex");

  //values to hex
  const nonceHex = web3.utils.toHex(nonce);
  const valueHex = web3.utils.toHex(value);
  const limitHex = web3.utils.toHex(gasLimit);
  const priceHex = web3.utils.toHex(gasPrice);

  //tx object
  let rawTx;

  //You can easily add more cases for anything you want
  switch (method) {
    case "sendRawTransaction":
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

async function sendRawTransaction(
  contractMethod,
  senderPub,
  senderPriv,
  receiver,
  amount,
  res
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

  // converted to string
  const value = web3.utils.toWei(amount.toString(), "ether");

  // the 'pending' flag here adds the most recent transaction

  // TODO - this fails on new accounts, need to create a handler for fail cases
  const nonce = await web3.eth.getTransactionCount(senderPub);

  //rinkeby gas limit and gas price can be checked on rinkeby.io
  const gasLimit = "6004303";

  //rinkeby current gas price is 1 gwei, setting to 10 will ensure priority mining
  const gasPrice = "80000000000";

  //optional logs for sanity checks
  //build transaction object -- see tx_builder.js for input parameters
  let txData = {
    method: "sendRawTransaction",
    fromPub: senderPub,
    fromPriv: senderPriv,
    toAddress: receiver,
    nonce: nonce,
    functionSignature: contractMethod.encodeABI(),
    value: value,
    gasLimit: gasLimit,
    gasPrice: gasPrice
  };

  // console.log("Building Transaction", txData);

  // sending of raw transaction error handler
  try {
    //pass transaction object to txBuilder to construct and sign using private key
    let rawTx = txBuilder(txData);

    //optional logs for sanity checks
    console.log("Sending Signed Transaction...");

    //send tx that was signed offline by txbuilder
    let transaction = await web3.eth.sendSignedTransaction(
      "0x" + rawTx.toString("hex")
    );

    console.log("Raw transaction successful:", transaction.transactionHash);
    return transaction;
  } catch (error) {
    console.error("Raw transaction failed", error.message);

    return res.status(400).json({
      status: "Raw transaction failed",
      error: error.message
    });
  }
}
module.exports = sendRawTransaction;
