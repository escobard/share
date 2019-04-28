# Share - An Ethereum automated charitable contributions product

This proof of concept is built with the purpose of delivering a product that automatically handles peer-to-charity contributions facilitated by the ethereum protocol.

In addition to automated transaction handling, this product also:

1) takes 4% of every donation and places it in a lottery which awards 5 random donors at the end of every month.
2) retains 1% of every donation to fund product advancement. 

## DAPP

### DAPP Local setup

Both the `UI` and `API` applications must be running for the product to work as intended.

#### UI Installation

```
cd ui
npm install
npm start
```

#### API Installation

```
cd ui
npm install
npm start
```

#### Truffle setup && usage

```angular2html
cd ethereum
npm install
truffle develop
test
```

### DAPP Usage

The product can be accessed here: http://localhost:3000/, after the `Local Setup` process documented above has been completed.

Follow the instructions within the messages to utilize, expanded instructions below.

#### Make donation form

Enter a valid `public address`, the `public address' private key` and an ether amount `smaller than 1`.

Feel free to use the following test account for a working `public / private` pair:

```angular2html

public address: 0xa102c7EE530B635E56f133a20786091eB800f640

private key: 1E8722F6E86B4E856B4BA2F75F492F4123242713E4E57C3789AFDCF2F631954A

```

#### Fetch Donation 

Enter a valid `public address`, and a `donationID which has been created with the public address`.

Feel free to use the following test account for a working `public / donationID` pair:

```angular2html

public address: 0xa102c7EE530B635E56f133a20786091eB800f640

donationId: 1
``` 

## Reviewer Info

Node Version: v10.14.1 

Truffle Version: v4.1.15

Web3 version: ^1.0.0-beta.46

Donor test account 1: [https://rinkeby.etherscan.io/address/0xa102c7ee530b635e56f133a20786091eb800f640] - PRIVATE KEY: `1E8722F6E86B4E856B4BA2F75F492F4123242713E4E57C3789AFDCF2F631954A`

Donor test account 2: [https://rinkeby.etherscan.io/address/0xe71a0829e03c6e26fc5486c8d10e0bf0c1a92cf9] - PRIVATE KEY: `EBDB03D10DC7131D24D8A7154839937352A11AB43CC9EFC11EE9747DA562BD72`

Owner account: [https://rinkeby.etherscan.io/address/0xcb82438b0443593191ec05d07bb9dbf6eb73594c]

Charity account: [https://rinkeby.etherscan.io/address/0x9b41db553536d504d16bc6b8d00bca9255522242]

Lottery account: [https://rinkeby.etherscan.io/address/0x46a3e9029f58bec0c7ba45d1d296bc60fc0b0afc]

Share contract address:[https://rinkeby.etherscan.io/address/0x8b9ca2c57a03d154f37c1276f313f1124ca45a72]

OwnerRole contract address:[https://rinkeby.etherscan.io/address/0x84806f1790c4e4cd0699e402f0b47f887b6223ba]

Charity contract address:[https://rinkeby.etherscan.io/address/0xc8c307be39ecb269758d1f4a41532298db880ace]

Lottery contract address:[https://rinkeby.etherscan.io/address/0x946f7ab8a3d7e2ae10b850ef667c3732fa61fa62]

## Product Technology

The following technology was chosen to rapidly deliver a production ready decentralized product:

1) Heroku for automatic deployment / hosting of the UI / API layers.
2) CircleCI for continuous integration and deployment.
2) Github for source control and Github Projects for scrum.
2) React for the UI with `create-react-app`.
3) Node with Express for the restful API.
5) Truffle to test, compile, develop, and deploy solidity smart contracts.

More documentation on product concept can be found here: [documentation/concept.md](https://github.com/escobard/share/blob/master/documentation/concept.md)

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