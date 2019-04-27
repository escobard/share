const DonorRole = artifacts.require("./DonorRole.sol"),
  OwnerRole = artifacts.require("./OwnerRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnerRole contracts
  deployer.deploy(DonorRole, OwnerRole.address, {gas: 3000000});

};