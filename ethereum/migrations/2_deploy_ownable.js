const Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {

  // TODO - clean up logic here, can be vastly improved by following: https://medium.com/coinmonks/using-truffle-framework-in-an-advanced-way-7e32c11c97a9

  // deploys initial Ownable contracts
  deployer.deploy(Ownable, {gas: 3000000})


};