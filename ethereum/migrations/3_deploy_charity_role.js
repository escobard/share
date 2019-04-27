const CharityRole = artifacts.require("./CharityRole.sol"),
  OwnerRole = artifacts.require("./OwnerRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnerRole contracts
  deployer.deploy(CharityRole, OwnerRole.address, {gas: 3000000})

};