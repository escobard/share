const CharityRole = artifacts.require("./CharityRole.sol"),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {
  // deploys initial Ownable contracts
  deployer.deploy(CharityRole, Ownable.address, {gas: 7000000})

};