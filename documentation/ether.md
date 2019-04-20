# Ethereum

## Introduction

The purpose of Ethereum layer is to `facilitate the transfer of ethereum` between the donor, lottery, and charity ethereum accounts. 

In addition, the `smart contracts` automate the following processes:
    - retains 1% of every donation to fund product advancement. 
    - takes 4% of every donation and places it in a lottery which awards 5 random donors at the end of every month (award automation not yet developed, part of Share 2.0).
    
## Usage - Expanded
    
#### Truffle - Testing

1) Navigate to the `/ethereum` folder
2) Run `npm install` - `truffle.js must be installed globally`
3) Run `Truffle dev`.
4) Type `test`

#### Truffle -  Deployment

1) Navigate to the `/ethereum` folder
2) Open `truffle.js`
3) Change the `mnemonic` variable value on `line 3` to your own rinkeby mnemonic.
4) Change the `URI on line 16 to infura` with your own `pod URI`
5) Run the `truffle migrate --network rinkeby --reset` command.
