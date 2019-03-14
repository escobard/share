/**
 * Builds a temporary in memory util to create an intermediate web3 provider
 *
 * @dev to be gradually improved over time with new route helpers
 * @param contract: address of the smart contract
 * @param
 */

class etherUtils {
  constructor(props) {
    this.accounts ={
      owner_pu: process.env.OWNER_PUBLIC,
      owner_pr: process.env.OWNER_PRIVATE,
      charity_pu: process.env.CHARITY_PUBLIC,
      lottery_pu: process.env.LOTTERY_PUBLIC
    }
  }

  web3Provider(){}

  setContract(){}

}

module.exports=etherUtils;