# Share - An Ethereum peer-to-peer rewards platform with charitable contributions 

This project's ethereum logic is based largely off the logic developed here: https://github.com/escobard/blockchains-nd-term1/tree/master/part4/project5

## Project Criteria

The main purpose of this application is to develop a production ready web application, that interacts with the rinkeby test network to create a donation platform using the ethereum protocol.

To achieve this, the following technologies are utilized:

1) Heroku & GCP for automatic deployment / hosting of the UI / API layers.
2) Github for source control and Waffle.io for scrum.
2) React for the UI with `create-react-app` for quick bundling and deployment.
3) Node with Express for the API with Mongoose as the ORM to connect to a (potential) MongoDB oracle.
5) Ethereum network interaction with Truffle to test, compile, develop, and deploy smart contracts.

Each of these will have a `github branch` which is how the `advancement of each part of the stack` will be tracked.

The other purpose is to showcase my capabilities with the following:
 - automatic deployment pipelines
 - continuous integration between host and repository
 - proper scrum usage
 - real-world usage of blockchain technology
 - use various JavaScript libraries, frameworks, and tools to interact with the Ethereum protocol.

Lastly, this product will be used as the boilerplate for both the 6B (as share 1.0 ) and Capstone (as share 2.0) projects.

### UI

The main criteria of the UI layer is to control the user experience directing the user to use the Share service.

To accomplish this, a slick and modern UI layout will be adapted, similar to https://alice.si/

### API 

API concept can be found here: [documents/v2/api-concept.md](documents/v2/api-concept.md)

API usage doc can be found here: [api/README.md](api/README.md)

### Ethereum

The main criteria with the Ethereum layer of this web application is to create logic to facilitate charitable contributions.

The secondary purpose of the Ethereum logic is to collect 4% of charitable contributions in a lottery that will be gifted at the end of the month to select users.

Lastly, 1% of charitable donations are given back to the business.

## Usage

This will be expanded with usage instructions for the UI and for deployment with heroku later.

### UI

Refer to the README.md file within the `./ui` directory.

### API


### Truffle

Metamask must be installed to use the application to interact with the deployed smart contract. 
You can download, and learn more about metamask here: [https://metamask.io/](https://metamask.io/)

1) Navigate to the parent directory, with a command terminal.
2) Run the following command to start the application on port 8000 `python -m SimpleHTTPServer 8000`
    1) python must be installed for this to work, node.js will be used in the react version.
3) If privacy mode is enabled with your metamask account, accept the prompt.
    1) if privacy mode is not enabled, the application will grab injected web3 instance from metamask
4) Fill out the form to create your star.
    1) The user can track the status of the transaction in the console log.
5) Once successful, star details are displayed under the star form.
6) The user can retrieve the star from the network, by entering the star's tokenId.

#### Truffle - Testing

1) Navigate to the `/smart_contracts` folder
1) Run `npm install` - `truffle.js must be installed globally`
2) Start a ganache node, currently set to use the desktop application instead of cli.
    - To change this to CLI head to `./truffle.js` and change line 10 from `7545` to `8545`.
3) Once ganache is up and running, run the command `truffle test`
4) 18 tests should pass with various functionality of the 3 token contracts. 

#### Truffle -  Deployment

1) Navigate to the `/smart_contracts` folder
2) Open `truffle.js`
3) Change the `mnemonic` variable value on `line 3` to your own rinkeby mnemonic.
4) Change the `URI on line 16 to infura` with your own `pod URI`
5) Run the `truffle migrate --network rinkeby --reset` command.


### Devops

Devops concept can be found here: [documents/v2/devops-concept.md](documents/v2/devops-concept.md)

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