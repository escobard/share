/**
 * Builds a temporary in memory util to create an intermediate web3 provider
 *
 * @dev to be gradually improved over time with new route helpers
 * @param contract: address of the smart contract
 * @param
 */

const Web3 =require("web3"),
ShareABI = require("../constants/share_abi");

class etherUtils {

  constructor() {

    this.accounts ={
      owner_pu: process.env.OWNER_PUBLIC,
      owner_pr: process.env.OWNER_PRIVATE,
      charity_pu: process.env.CHARITY_PUBLIC,
      lottery_pu: process.env.LOTTERY_PUBLIC
    }

    this.contract ={
      contract_pu: process.env.CONTRACT_ADDRESS,
      contract_abi: ShareABI
    }

    this.web3 = this.web3Provider();

  }

  async web3Provider(){

    let web3 = await new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/47c181283cb345c19697f9403531914c"
      )
    );

    this.runtime = "infura";
    return web3;

    /* TODO - GANACHE - connects to ganache if dev, commented out for v1.0
    if (process.env.NODE_ENV === "dev") {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      runtime = "ganache";
    } else {
      // this needs to be a new infura provider, replacing the current one which is for the starNotary contract
      web3 = new Web3(
        new Web3.providers.HttpProvider(
          "https://rinkeby.infura.io/v3/47c181283cb345c19697f9403531914c"
        )
      );
      console.log("INFURA");
      runtime = "infura";
    }*/

  }

  async setContract(){

    let { contract: {contract_abi, contract_pu}} = this;

    let web3 = await this.web3;

    return await web3.eth.Contract(contract_abi, contract_pu);
  }
  // TODO refactor rawTransaction util into this file
}

module.exports=etherUtils;