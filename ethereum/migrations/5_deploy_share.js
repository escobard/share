const LotteryRole = artifacts.require("./LotteryRole.sol"),
  CharityRole = artifacts.require('./CharityRole.sol'),
  Share = artifacts.require('./Share.sol'),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  // deploys initial Ownable contracts
  deployer.deploy(Share, Ownable.address, CharityRole.address, LotteryRole.address, {gas: 7000000})

};