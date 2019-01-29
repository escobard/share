var ERC721 = artifacts.require("./ERC721.sol");
var ERC721Token = artifacts.require("./ERC721Token.sol");
var StarNotary = artifacts.require("./StarNotary.sol");

module.exports = function(deployer) {
  //deployer.deploy(ERC721);
  //deployer.deploy(ERC721Token);
  deployer.deploy(StarNotary);
};