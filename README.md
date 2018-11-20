# Share - An Ethereum peer-to-peer rewards platform with charitable contributions 

### Needs to be updated

This project uses the Ethereum blockchain protocol on the Rinkeby test network, smart contracts with solidity,
along with a simple UI to give the user the ability to create, buy, trade, and store Star tokens using the ERC-721
Ethereum token standards. 

## Project Criteria

The main purpose of this application is to meet the project criteria for the third project of the Blockchains Nanodegree by Udacity:

1)Define and implement smart contract interface
    1) Smart contract implements the ERC-721 or ERC721Token interface
1) Add metadata to the star token
    1) The star token should have these pieces of metadata added:
    1) ```
           Star coordinators
              Dec
              Mag
              Cent
           Star story
       ```

1) Configure uniqueness with the stars
    1) Smart contract prevents stars with the same coordinates from being added
1) Smart contract contains required functions
    1) Smart contract implements all these functions - createStar(), putStarUpForSale(), buyStar(), checkIfStarExist(), mint(), approve(), safeTransferFrom(), SetApprovalForAll(), getApproved(), isApprovedForAll(), ownerOf(), starsForSale(), tokenIdToStarInfo()
    1) Expected response for tokenIdToStarInfo():
    1) `["Star power 103!", "I love my wonderful star", "ra_032.155", "dec_121.874", "mag_245.978"]`
1) Properly test all required functions
    1) Project contains tests for the following functions and all tests are approved without error:
    1) createStar(), putStarUpForSale(), buyStar(), checkIfStarExist(), mint(), approve(), safeTransferFrom(), SetApprovalForAll(), getApproved(), isApprovedForAll(), ownerOf(), starsForSale(), tokenIdToStarInfo()
1) Deploy smart contract on a public test network
    1) Smart contract is deployed on on the Ethereum RINKEBY test network
    2) Execute createStar() function
    3) Place your star for sale using putStarUpForSale() function
1) Client code interacts with smart contract Front-end is configured to:
    1) Claim a new star. Each new star support these pieces of metadata:
    1) ```
        Star coordinators
        Dec
        Mag
        Cent
        Star story
        ```
    1) Lookup a star by ID using tokenIdToStarInfo()

## Usage

Metamask must be installed to use the application to interact with the deployed smart contract. 
You can download, and learn more about metamask here: [https://metamask.io/](https://metamask.io/)

1) Navigate to the parent directory, with a command terminal.
2) Run the following command to start the application on port 8000 `python -m SimpleHTTPServer 8000`
    1) python must be installed for this to work, node.js will be used in the react version.
3) If privacy mode is enabled with your metamask account, accept the prompt.
    1) if privacy mode is not enabled, the application will grab injected web3 instance from metamask
4) Fill out the form to create your star.
    1) The user can track the status of the transaction in the console log.
5) Once succesful, star details are displayed under the star form.
6) The user can retrieve the star from the network, by entering the star's tokenId.

### Testing

1) Navigate to the `/smart_contracts` folder
1) Run `npm install` - `truffle.js must be installed globally`
2) Start a ganache node, currently set to use the desktop application instead of cli.
    - To change this to CLI head to `./truffle.js` and change line 10 from `7545` to `8545`.
3) Once ganache is up and running, run the command `truffle test`
4) 18 tests should pass with various functionality of the 3 token contracts. 

### Deployment

1) Navigate to the `/smart_contracts` folder
2) Open `truffle.js`
3) Change the `mnemonic` variable value on `line 3` to your own rinkeby mnemonic.
4) Change the `URI on line 16 to infura` with your own `pod URI`
5) Run the `truffle migrate --network rinkeby --reset` command.

## Libraries, Frameworks & Tools

[Ethereum](https://www.ethereum.org/)

[Solidity Smart Contracts](https://github.com/ethereum/solidity)

[Truffle](https://truffleframework.com/)

[Ganache](https://truffleframework.com/ganache)

[Remix](https://remix.ethereum.org/)

## Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License

As of November 19th, 2018, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/)