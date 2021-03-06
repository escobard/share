const mnemonic = require("./config.js");

let HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks:{
    development:{
      host: '127.0.0.1',
      // expects desktop ganache client, change to 8545 for cli
      port: 8545,
      network_id: "*",
      gas: 80000000,   // <--- Twice as much
      gasPrice: 10000000000,
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
      gasLimit: 2100000000000
    }
  }
};
