var Share = artifacts.require("./Share.sol");

module.exports = function(deployer) {
  //deployer.deploy(ERC721);
  //deployer.deploy(ERC721Token);
  deployer.deploy(Share);
};