# Share - An Ethereum automated charitable contributions product

This proof of concept is built with the purpose of delivering a product that automatically handles peer-to-charity contributions facilitated by the ethereum protocol.

In addition to automated transaction handling, this product also:

1) takes 4% of every donation and places it in a lottery which awards 5 random donors at the end of every month.
2) retains 1% of every donation to fund product advancement. 

To deliver the value outlined above, the following technologies are utilized:

## Usage



## Project Technology

The technology below was chosen to rapidly deliver a production ready web application, that interacts with the rinkeby test network.

1) Heroku for automatic deployment / hosting of the UI / API layers.
2) CircleCI for continuous integration and deployment.
2) Github for source control and Github Projects for scrum.
2) React for the UI with `create-react-app`.
3) Node with Express for the restful API.
5) Connection to the ethereum protocol is handled with Truffle to test, compile, develop, and deploy solidity smart contracts.

More thorough documentation on each layer can be found below.

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