# API

## Introduction

The main purpose of the API layer is to control the business logic of the product and validate interactions between the client and the ethereum protocol.

This is managed by a combination of Node.js, Express.js and various npm libraries.

## Usage - Expanded

### Validation

Validation of each route currently checks for:

1) null values
1) data types
1) valid public address hash
1) valid public / private pair

### Routes

There are currently two routes in the application.

These routes handle the validation of the data passed from the `ui` to the `api` layer, before creating a transaction to connect with the `smart contracts` on the `ethereum layer`.

#### Make Donation

Accepted request body:

```angular2html

{
 "address_pu":"0xe71a0829E03c6e26fc5486c8d10e0bf0C1A92cF9",
 "address_pr":"EBDB03D10DC7131D24D8A7154839937352A11AB43CC9EFC11EE9747DA562BD72", 
 "amount":"0.1"
}

```

If all validations pass, a sample response is: 

```angular2html
{"donationId": 1}
```


#### Fetch Donation

Accepted request body:

```angular2html

{
    "address":"0x38a3A60D25825D5B699c7756285b805d0A1f3b01",
    "id": 17
}

```

If all validations pass, a sample response (for the owner)is: 

```angular2html
{
              owner,
              lottery,
              charity,
              donor,
              amount,
              charityAmount,
              lotteryAmount,
              ownerAmount,
              donationID
}
```
