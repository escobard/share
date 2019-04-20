# Share - An Ethereum automated charitable contributions product

This proof of concept is built with the purpose of delivering a product that automatically handles peer-to-charity contributions facilitated by the ethereum protocol.

In addition to automated transaction handling, this product also:
    - takes 4% of every donation and places it in a lottery which awards 5 random donors at the end of every month.
    - retains 1% of every donation to fund product advancement. 

To deliver the value outlined above, the following technologies are utilized:

## Project Technology

The technology below was chosen to rapidly deliver a production ready web application, that interacts with the rinkeby test network.

1) Heroku & GCP for automatic deployment / hosting of the UI / API layers.
2) CircleCI for continuous integration and deployment.
2) Github for source control and Github Projects for scrum.
2) React for the UI with `create-react-app`.
3) Node with Express for the restful API.
5) Connection to the ethereum protocol is handled with Truffle to test, compile, develop, and deploy solidity smart contracts.

More thorough documentation on each layer can be found below.

### UI

UI documentation can be found here: [documents/ui.md](documents/ui.md)

UI local usage doc can be found here: [ui/README.md](ui/README.md)

### API 

API documentation can be found here: [documents/api.md](documents/api.md)

API local usage doc can be found here: [api/README.md](api/README.md)

### Ethereum

Ethereum documentation can be found here: [documents/ethereum.md](documents/ethereum.md)

Truffle local usage doc can be found here: [ethereum/README.md](ethereum/README.md)

### Devops

Devops documentation can be found here: [documents/v2/devops-concept.md](documents/v2/devops-concept.md)

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

### Contribution

Contribution is allowed at the discretion of the product owner.

All commits should reference the `parent branch (ei doc, ui, etc) and issue (ei doc-readme)`.

Commits should reference to the issue by `number by using # tags`

Commits should follow the [Udacity commiy style guide](https://udacity.github.io/git-styleguide/) for optimal organization.

### Forking

All files in this repository are protected under the MIT license, but feel free to fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

### Merging

All pull requests to the `development branch` must be derived from the `doc, devops, ui, ether` branches.

Sub branches must be merged into the `parent branch (doc, devops, ui, etc`, and a separate pull request to development must be made after testing on the parent branch.

All merge requests must be directed to the `development branch`, to be merged into the `master branch` at the discretion of the product owner.

## License

As of November 19th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/)