const Share = artifacts.require("./Share.sol"),
CharityRole = artifacts.require("./CharityRole.sol"),
  LotteryRole = artifacts.require("./LotteryRole.sol"),
  Ownable = artifacts.require("./Ownable.sol");

module.exports = function(deployer) {

  // TODO - clean up logic here, can be vastly improved by following: https://medium.com/coinmonks/using-truffle-framework-in-an-advanced-way-7e32c11c97a9

  // deploys initial Ownable contracts
  deployer.deploy(Ownable, {gas: 1000000})
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

      // deploys Charity role contract, sets instance off Ownable.address
      deployer.deploy(CharityRole, Ownable.address, {gas: 1000000})
        /*
        .then(() =>{

          deployer.deploy(LotteryRole, Ownable.address, {gas: 1000000})
            .then(() =>{
              console.log('CHARITY ROLE ADDRESS', CharityRole.address);
              console.log('LOTTERY ROLE ADDRESS', LotteryRole.address);
              deployer.deploy(Share, Ownable.address, CharityRole.address, LotteryRole.address, {gas: 6000000})
                .then(() =>{
                  console.log('DEPLOYMENT DONE!')
                })
                .catch(err =>{
                  console.log(err)
                  return err;
                })
            })
            .catch(err =>{
              console.log(err)
              return err;
            })
        })
        .catch(error => {
          console.log(error);
          return error;
        })
*/
      // deployer.deploy(Share);
    })


};