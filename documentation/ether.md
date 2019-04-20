

The main criteria with the Ethereum layer of this web application is to create logic to facilitate charitable contributions.

The secondary purpose of the Ethereum logic is to collect 4% of charitable contributions in a lottery that will be gifted at the end of the month to select users.

Lastly, 1% of charitable donations are given back to the business.

#### Truffle - Testing

1) Navigate to the `/ethereum` folder
2) Run `npm install` - `truffle.js must be installed globally`
3) Run `Truffle dev`.
4) Type `test`

#### Truffle -  Deployment

1) Navigate to the `/ethereum` folder
2) Open `truffle.js`
3) Change the `mnemonic` variable value on `line 3` to your own rinkeby mnemonic.
4) Change the `URI on line 16 to infura` with your own `pod URI`
5) Run the `truffle migrate --network rinkeby --reset` command.
