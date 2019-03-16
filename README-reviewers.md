## Share - v1.0

This project's ethereum logic is based largely off the logic developed here: https://github.com/escobard/blockchains-nd-term1/tree/master/part4/project5

## Installation

1) run `npm install` in this directory.
2) run `npm install` in the UI directory.
3) run `npm install` in the API directory.

## Run locally

1) for local staging, run `npm run start` in this directory.
2) for local development, run `npm run dev` in this directory.

## Test contracts with Truffle

1) navigate to the ethereum directory with `cd ethereum`.
2) run `truffle develop` then type `test`.

## Project Criteria

The main purpose of this product is to develop a production ready web application, that interacts with the rinkeby test network to create a donation platform using the ethereum protocol.

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

Lastly, this product will be used as the boilerplate for both the 6B (as share 1.0) and Capstone (as share 2.0) projects.

## Reviewer Considerations

Please note that the `6A` criteria were accepted for my concept before the `criteria for 6B` were fleshed out by the Udacity team.

This means that `smart contract complexity` is much simpler than the rubric requirements as `my application access control is 100% managed by the API layer`.

I am painfully aware of the `security limitations` of the current ethereum layer by asking the user to `provide their account's private key to create a donation`.

All `client facing` transactions will be handled via the `ui` in the capstone project to fix this, and as a result `the ethereum / smart contract layer will be updated using optimal security practices`.

As you can probably tell, this product does a lot more than is required by using `complex ui and api handling raw transactions, as well as CI / unit testing` components, which I built largely in preparation for the capstone project, the criteria of the `6B project` as secondary.

The point is = I am aware that this submission is very late for `6B certifications`, which is why I am handing in an arguable incomplete project.

My hope is = Pass the project as is, with some feedback on areas of improvement (in the smart contract layer) so I can earn my certification and start working on `7A / 7B`. 

My promise to you = Use my new knowledge of raw transactions to build an end to end (ui, api, ethereum, data oracle) secure platform to handle the original concept vision, for my Capstone project.

## Reviewer Information

Contract address:[https://rinkeby.etherscan.io/address/0x57486a5332ac3f2c82625a2a504ee6916f004e46]

Node Version: v10.14.1 

Truffle Version: v4.1.15

Web3 version: ^1.0.0-beta.46

## Reviewer Test Accounts - Click text for rinkeby.etherscan link

Owner account: [https://rinkeby.etherscan.io/address/0xcb82438b0443593191ec05d07bb9dbf6eb73594c]

Charity account: [https://rinkeby.etherscan.io/address/0x9b41db553536d504d16bc6b8d00bca9255522242]

Lottery account: [https://rinkeby.etherscan.io/address/0x46a3e9029f58bec0c7ba45d1d296bc60fc0b0afc]

Donor test account 1: [https://rinkeby.etherscan.io/address/0xa102c7ee530b635e56f133a20786091eb800f640] - PRIVATE KEY: `1E8722F6E86B4E856B4BA2F75F492F4123242713E4E57C3789AFDCF2F631954A`

Donor test account 2: [https://rinkeby.etherscan.io/address/0xe71a0829e03c6e26fc5486c8d10e0bf0c1a92cf9] - PRIVATE KEY: `EBDB03D10DC7131D24D8A7154839937352A11AB43CC9EFC11EE9747DA562BD72`

## Usage instructions:

The application has two forms, both interact with the smart contract as outlined in the UML concept charts.

### Make Donation

This form expects 3 values:
    - ethereum account public address.
    - ethereum account private address.
    - donation amount in ether.

IMPORTANT: There is 0 validation on the UI form for v1.0, but this will be addressed in v2.0. If you want to make a donation, you are welcome to use the donor test accounts listed above.

### Fetch donation

This form expects 2 values:
    - donor / charity / lottery public address.
    - the donation ID.

IMPORTANT: there is 0 validation on this form as well on the UI side, only valid entries will return valuable outputs.

You can enter a donation ID number to fetch the donation data from the smart contract. If the address provided matches the donation ID, the API will return donation data relevant to the user, based on if the user is the charity, lottery, or donor of the specific donation.

You can check the number of donations the contract currently has by visiting the link to the contract address above.

Test address / donation ID:
address: `0xCb82438B0443593191ec05D07Bb9dBf6Eb73594C`
id: `1` - up to 8 so far, can fetch all via the owner address