const mnemonic = require("./config.js");

let HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks:{
    development:{
      host: '127.0.0.1',
      // expects desktop ganache client, change to 8545 for cli
      port: 8545,
      network_id: "*"
    },
      solc: {
        version: "0.4.25"
      },
    rinkeby:{
      provider: () =>{
        // this comes from the infura dashboar, unique per infura project
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/47c181283cb345c19697f9403531914c')
      },
      network_id: 4,
      gas: 4612388,
      gasLimit: 2100000000000,
      from: "0x9b41DB553536D504d16bC6B8d00BCA9255522242"
    }
  }
};
