let etherUtils = require("../utils/etherUtils");

module.exports = async (req, res, next) => {

  // init utils class
  let eUtils = new etherUtils();

  // set web3
  req.web3 = await eUtils.web3;

  // set contracts
  req.share = await eUtils.setContract();

  // sets accounts
  req.accounts = eUtils.accounts;

  req.contract = eUtils.contract;

  next();
};