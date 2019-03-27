const Share = artifacts.require("./Share.sol"),
CharityRole = artifacts.require("./CharityRole.sol"),
  LotteryRole = artifacts.require("./LotteryRole.sol"),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {

  // TODO - clean up logic here, can be vastly improved by following: https://medium.com/coinmonks/using-truffle-framework-in-an-advanced-way-7e32c11c97a9
  deployer.deploy(Share, {gas: 2000000})
    .then(() =>{
      /*
      deployer.deploy(CharityRole)
      then(() =>{
        CharityRole.deployed()
          .then(instance =>{
            instance.setOwnable(Ownable.address)
            then(() =>{
              deployer.deploy(Share);
            })
          })
      })*/
      deployer.deploy(Share);
    })


};