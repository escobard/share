const CharityRole = artifacts.require("./CharityRole.sol"),
  OwnableRole = artifacts.require("./OwnableRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnableRole contracts
  deployer.deploy(CharityRole, OwnableRole.address, {gas: 3000000})

};