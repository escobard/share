const LotteryRole = artifacts.require("./LotteryRole.sol"),
  CharityRole = artifacts.require('./CharityRole.sol'),
  Share = artifacts.require('./Share.sol'),
  OwnerRole = artifacts.require("./OwnerRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnerRole contracts
  deployer.deploy(Share, OwnerRole.address, CharityRole.address, LotteryRole.address, {gas: 3000000})

};