const LotteryRole = artifacts.require("./LotteryRole.sol"),
  OwnerRole = artifacts.require("./OwnerRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnerRole contracts
  deployer.deploy(LotteryRole, OwnerRole.address, {gas: 3000000})

};