# Share - An Ethereum automated donations product

This product automates peer-to-charity donations, facilitated by the ethereum protocol.

In addition, 4% of every donation is placed in a lottery and 1% of every donation is returned to the product owner. 

Production version available here: https://share-ui.herokuapp.com/

## Product Technology

This product follows the traditional MVC (Model View Controller) paradigm where:
   - The Model = the Ethereum blockchain protocol - is handled in the `/ethereum` directory
   - The View = the React user interface - is handled in the `/ui` directory
   - The Controller = the Node restful api  - handled in the `/api` directory

Furthermore, the following stack was chosen to rapidly deliver a production ready decentralized product:

1) Heroku for automatic deployment / hosting of the UI / API layers.
2) CircleCI for continuous integration and deployment.
2) Github for source control and Github Projects for scrum.
2) React for the UI with `create-react-app`.
3) Node with Express for the restful API.
5) Truffle to test, compile, develop, and deploy solidity smart contracts.

Expanded product concept and highlights can be found here: [documentation/concept.md](https://github.com/escobard/share/blob/master/documentation/concept.md)

## Documentation

Documentation has been fragmented into several different markdown files, to facilitate collaboration.

### DAPP Usage

Production version available here: https://share-ui.herokuapp.com/

Follow the instructions within the messages to utilize, expanded instructions here: [documentation/usage.md](https://github.com/escobard/share/blob/master/documentation/usage.md)

### UI

UI documentation can be found here: [documentation/ui.md](https://github.com/escobard/share/blob/master/documentation/ui.md)

UI local usage doc can be found here: [ui/README.md](https://github.com/escobard/share/blob/master/ui/README.md)

### API 

API documentation can be found here: [documentation/api.md](https://github.com/escobard/share/blob/master/documentation/api.md)

API local usage doc can be found here: [api/README.md](https://github.com/escobard/share/blob/master/api/README.md)

### Ethereum

Ethereum documentation can be found here: [documentation/ethereum.md](https://github.com/escobard/share/blob/master/documentation/ethereum.md)

Truffle local usage doc can be found here: [ethereum/README.md](https://github.com/escobard/share/blob/master/ethereum/README.md)

### Devops

Devops documentation can be found here: [documentation/devops.md](https://github.com/escobard/share/blob/master/documentation/devops.md)

### Contribution

Contribution documentation can be found here: [documentation/contribution.md](https://github.com/escobard/share/blob/master/documentation/contribution.md)

## Ethereum Accounts

Owner account: [https://rinkeby.etherscan.io/address/0xcb82438b0443593191ec05d07bb9dbf6eb73594c]

Charity account: [https://rinkeby.etherscan.io/address/0x9b41DB553536D504d16bC6B8d00BCA9255522242]

Lottery account: [https://rinkeby.etherscan.io/address/0x46a3e9029f58bec0c7ba45d1d296bc60fc0b0afc]

Share contract address:[https://rinkeby.etherscan.io/address/0x2a6aa952b2323061abcb0e88186b4963dbd380cb]

OwnerRole contract address:[https://rinkeby.etherscan.io/address/0x0cf186b6298e648a60ee64736de3e178e445bcf5]

CharityRole contract address:[https://rinkeby.etherscan.io/address/0xbcf3ed961a5d8ec0798bbd593a1adfeeca5e3c11]

LotteryRole contract address:[https://rinkeby.etherscan.io/address/0xed0a954a82fced1b06665465302ac193af9b242c]

DonorRole contract address:[https://rinkeby.etherscan.io/address/0x644938c9815e53c5a4c538bcff9a72149f0bc35c]

DonorRole contract address:[https://rinkeby.etherscan.io/address/0xa14e0cff209f04287bfaa208377ecf046186a9f1]

## Libraries, Frameworks & Tools

[React](https://reactjs.org/)

[Redux](https://redux.js.org/)

[Node](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[MongoDB](https://www.mongodb.com/)

[Heroku](https://www.heroku.com/)

[Ethereum](https://www.ethereum.org/)

[Solidity Smart Contracts](https://github.com/ethereum/solidity)

[Truffle](https://truffleframework.com/)

