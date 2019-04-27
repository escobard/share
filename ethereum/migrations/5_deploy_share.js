const LotteryRole = artifacts.require("./LotteryRole.sol"),
  CharityRole = artifacts.require('./CharityRole.sol'),
  Share = artifacts.require('./Share.sol'),
  OwnableRole = artifacts.require("./OwnableRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnableRole contracts
  deployer.deploy(Share, OwnableRole.address, CharityRole.address, LotteryRole.address, {gas: 3000000})

};