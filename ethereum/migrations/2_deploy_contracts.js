const Share = artifacts.require("./Share.sol"),
CharityRole = artifacts.require("./CharityRole.sol"),
  LotteryRole = artifacts.require("./LotteryRole.sol"),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  deployer.deploy(Share);
};