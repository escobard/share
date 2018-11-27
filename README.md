# Share - An Ethereum peer-to-peer rewards platform with charitable contributions 

This project's ethereum logic is based largely off the logic developed here: https://github.com/escobard/blockchains-nd-term1/tree/master/part4/project5

## Project Criteria

The main purpose of this application is to develop a production ready web application, that interacts with the rinkeby test network to create a donation platform using ethereum.

To achieve this, the following technologies will be utilized:

1) Heroku for automatic deployment and hosting of the UI, and (potentially) API layers.
2) Github for source control and Waffle.io for scrum.
2) React for the UI with `create-react-app` for quick bundling and deployment.
3) Node with Express for the API with Mongoose as the ORM to connect to MongoDB.
4) MongoDB to store the source copy of the blockchain.
5) Ethereum network interaction with Truffle to test, compile, develop, and deploy smart contracts.

Each of these will have a `github branch` which is how the `advancement of each part of the stack` will be tracked.

The other purpose is to showcase my capabilities with the following:
 - automatic deployment pipelines
 - continuous integration between host and repository
 - proper scrum usage
 - real-world usage of blockchain technology
 - use various JavaScript libraries, frameworks, and tools to interact with the Ethereum network.

These criteria will be expanded at a later date.

### API 

The main criteria of the API layer is to control the business logic of the product and manage interactions between the Ethereum, UI, and Blockchain.

This is managed by a combination of Node.js, Express.js, Mongoose and various other npm libraries.

### ShareChain

The main criteria of the ShareChain layer is to store encrypted, non-personal transaction data in a centralized location.

Expanding on this concept:
   - No personal data for either the owner or the charity, the only information allowed about the involved parties is the `transaction, and public address hashes`.
        - donor and charity addresses are used for `data grouping` on a `mongoDB` level. 
   - Application and or user critical `state data` such as `charityReceived` for when a charity has received the transaction's funds, or `isFeatured` for feed displays on the UI layer.
        - while not immediately obvious, this will be used to track the `state of an asset` in the supply chain.
        - this is far more important with assets that have `multiple states` and `multiple actors`.
        - to keep things simple, we will have `two states` to each donation, failed and completed.
            - failed donations are rejected by our smart contract logic.
            - donations that are not rejected by the smart contract logic are saved to the ShareChain, thus completing the lifecycle of the donation.
   - Each completed donation is `uniquely identified` by the `height` of the `block on the blockchain`.

Here is the main data structure of each block, in the blockchain:

```
[
            {
                hash: "050a5ed6c537bbf8f63cff1c297617aad9f7f8b12d6b4c2f41a38371cc36ba80",
                height: 0,
                body: "Genesis block - First block in the chain",
                time: "1541637545",
                previousblockhash: ""
            },
            {
                hash: "3d344d97bf037d045a8dcd46ed659e54d1f7160625ca0a8690e44ad6f4254eff",
                height: 1,
                body: {
                    transaction: "19xSGYkKgStMzqPthuJ4VW7C3XS2SUYTkE",
                    donor: "19xSGYkKgStMzqPthuJ4VW7C3XS2SUYTkE",
                    charity: "19xSGYkKgStMzqPthuJ4VW7C3XS2SUYTkE",
                    shareToken:{
                                   donorTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
                                   ownerTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
                                   lotteryTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
                                   charityTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
                                   donationAmount:"1000.00",
                                   gasCost:"0.04"
                               }
                    isFeatured: false
                },
                time: "1541718988",
                previousblockhash: "050a5ed6c537bbf8f63cff1c297617aad9f7f8b12d6b4c2f41a38371cc36ba80"
            }
        ]
```

The `body properties` of the block are further encrypted with a SHA256 algorithm securing anonymity. 

#### Share Tokens

Each donation will generate a `Share Token`, which contains the `ethereum transaction hashes` for the `owner, charity, and donor` transactions, donation amount and donor message.

This token is `further encrypted with an additional algorythym` - logic for this be determined, probably SHA256 layered with some salt. 

Here is a JSON of the token':

```$xslt
{
    donorTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
    ownerTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
    lotteryTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
    charityTransaction:"0xFC18Cbc391dE84dbd87dB83B20935D3e89F5dd91",
    donationAmount:"1000.00",
    gasCost:"0.04"
}
```

### Ethereum

The main criteria with the Ethereum layer of this web application is to create logic to facilitate charitable contributions.

The secondary purpose of the Ethereum logic is to collect 4% of charitable contributions in a lottery that will be gifted at the end of the month to select users.

Lastly, 1% of charitable donations are given back to the business.

## Usage

This will be expanded with usage instructions for the UI and for deployment with heroku later.

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

As of November 19th, 2018, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/)