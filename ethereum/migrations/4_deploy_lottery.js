const LotteryRole = artifacts.require("./LotteryRole.sol"),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  // deploys initial Ownable contracts
  deployer.deploy(LotteryRole, Ownable.address, {gas: 3000000})

};