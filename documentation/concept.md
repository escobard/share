# Concept

## Share - An Ethereum automated charitable contributions product

This proof of concept is built with the purpose of delivering a product that automatically handles peer-to-charity contributions facilitated by the ethereum protocol.

In addition to automated transaction handling, this product also:

1) takes 4% of every donation and places it in a lottery which awards 5 random donors at the end of every month.
2) retains 1% of every donation to fund product advancement. 

## Product Technology

The following technology was chosen to rapidly deliver a production ready decentralized product:

1) Heroku for automatic deployment / hosting of the UI / API layers.
2) CircleCI for continuous integration and deployment.
2) Github for source control and Github Projects for scrum.
2) React for the UI with `create-react-app`.
3) Node with Express for the restful API.
5) Truffle to test, compile, develop, and deploy solidity smart contracts.

## Product highlights

1) UI:
    - `sass` styled UI, including utilization of mixins, variables, global vs component level styles.
    - Form level data type, length, and business validation
    - Re-usable component best practices
    - React only state usage without the need for redux.
    - semantic-ui-react for re-usable components.
    - responsive UI.
    - User friendly, hashed navigatable sections, awesome design (coming with share 2.0).
    - jest snapshot testing (not all components are tested)
    - production ready bundling with create-react-app.
2) API: 
    - manages all user-to-contract logic.
    - raw transaction handling with ethereum.
    - public, private, public / private pair, null, data type, value, business validation.
    - re-usable middlewares
    - testing with supertest (not all routes are tested)
3) Ethereum:
    - multi-contract interaction.
    - automated multi-transaction process.
    - transfer of ownership from one user to another.
4) Truffle:
    - automatic deployment to Rinkeby and Ganache of all contracts.
    - smart contract business logic testing.
5) DevOps:
    - continuous integration with CircleCI.
    - Once all determined tests on master have passed, continuous deployment to Heroku.
6) Scrum:
    - Github to track issues, and task progress.
    - Github Projects as the scrum board.