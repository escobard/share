## Share - v1.0

This project's ethereum logic is based largely off the logic developed here: https://github.com/escobard/blockchains-nd-term1/tree/master/part4/project5

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

Contract address:

Node Version:

Truffle Version:

Web3 version: 

## Reviewer Test Accounts - Click text for rinkeby.etherscan link

Owner account:

Charity account:

Lottery account:

Donor test account 1:

Donor test account 2:

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

You can enter a donation ID number to fetch the donation data from the smart contract. If the address provided matches the donation ID, the API will return donation data relevant to the user, based on if the user is the charity, lottery, or donor of the specific donation.

You can check the number of donations the contract currently has by visiting the link to the contract address above.