# Share - UI

For more UI documentation, visit [documents/ui.md](documents/ui.md)

## Usage

The donor must fill out the make donation form with a valid `public and private address`, and an ethereum amount.

The product then delivers a `donationId` upon the transactions' success.

This `donationId` can be used to fetch the `donationReceipt` by using the fetch donation form by providing the `donor's public address and the donationId`.

### Local development

`npm start`

### Local testing

`npm test`

### Production

`npm build`