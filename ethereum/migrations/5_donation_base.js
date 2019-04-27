const DonationBase = artifacts.require("./DonationBase.sol"),
  OwnerRole = artifacts.require("./OwnerRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnerRole contracts
  deployer.deploy(DonationBase, OwnerRole.address, {gas: 6000000});

};