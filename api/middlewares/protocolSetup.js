let etherUtils = require("../utils/etherUtils");

module.exports = async (req, res, next) => {

  // init instance / set accounts
  let eUtils = new etherUtils();

  // set web3
  let web3 = await eUtils.web3;

  // set contracts
  let share = await eUtils.setContract();

};