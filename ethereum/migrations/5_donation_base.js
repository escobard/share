const DonationBase = artifacts.require("./DonationBase.sol"),
  OwnerRole = artifacts.require("./OwnerRole.sol");

module.exports = function(deployer) {
  // deploys initial OwnerRole contracts
  deployer.deploy(DonationBase, {gas: 3000000});

};