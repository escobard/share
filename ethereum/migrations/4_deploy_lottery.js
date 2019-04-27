const LotteryRole = artifacts.require("./LotteryRole.sol"),
  OwnableRole = artifacts.require("./OwnableRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnableRole contracts
  deployer.deploy(LotteryRole, OwnableRole.address, {gas: 3000000})

};