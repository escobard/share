const Share = artifacts.require("./Share.sol"),
CharityRole = artifacts.require("./CharityRole.sol"),
  LotteryRole = artifacts.require("./LotteryRole.sol"),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {

  // TODO - clean up logic here, can be vastly improved by following: https://medium.com/coinmonks/using-truffle-framework-in-an-advanced-way-7e32c11c97a9
  deployer.deploy(Ownable, {gas: 2000000})
    .then(() =>{
      /*

      then(() =>{
        CharityRole.deployed()
          .then(instance =>{
            instance.setOwnable(Ownable.address)
            then(() =>{
              deployer.deploy(Share);
            })
          })
      })*/
      console.log('OWNABLE ADDRESS', Ownable.address);
      deployer.deploy(CharityRole, Ownable.address, {gas: 2000000})
        .then(() =>{
          console.log('OWNABLE ADDRESS', Ownable.address);
          deployer.deploy(LotteryRole, Ownable.address, {gas: 2000000})
            .then(() =>{
              deployer.deploy(Share, Ownable.address, CharityRole.address, LotteryRole.address, {gas: 2000000});
            })
            .catch(err =>{
              return err;
            })
        })
        .catch(error => {
          console.log(error);
          return error;
        })

      // deployer.deploy(Share);
    })


};