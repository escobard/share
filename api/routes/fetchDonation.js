const router = require("express").Router(),
  fetchDonationBaseValidation = require("../middlewares/fetchDonationBaseValidation"),
  protocolSetup = require("../middlewares/protocolSetup"),
  fetchDonationEtherValidation = require("../middlewares/fetchDonationEtherValidation"),
  sendRawTransaction = require("../utils/rawTransaction");

router.post("/", fetchDonationBaseValidation, protocolSetup, fetchDonationEtherValidation, async (req, res) => {
  let {
    web3,
    share,
    body: { address_pu, id },
    accounts: { owner_pu, charity_pu, lottery_pu },
    contract: { contract_pu, contract_abi }
  } = req;
  // ensures web3 instance is available, may want to consider moving all intial web3 logic outside of the route
  if (web3) {
    // ensures request.body.address exists
    if (address_pu) {
      // checks if contract is initialized
      let contractInitialized = await share.methods.isInitialized.call({from: owner_pu});

      if (contractInitialized === false) {
        console.log("Initializing Contract...", req.accounts);

        // TODO must be heavily refactored
        await sendRawTransaction(
          share.methods.initiateContract(lottery_pu, charity_pu),
          owner_pu,
          false,
          contract_pu,
          "0.000001"
        );
      }

      console.log("Contract initialized! Fetching donationID", req.accounts);

      // this requires the OWNER to be the CALL FROM address otherwise throws an error as expected by access priviledge from smart contract
      let donationID = await share.methods.fetchDonationID.call({from: owner_pu});

      // checks if contract has not store any donations, donationID will be 1 by default
      if (donationID === 1) {
        res
          .status(200)
          .json(
            "Contract initialized, but no donations have been created - send a request to /makeDonation to test this route"
          );
      }

      console.log("Initialization complete! Fetching donation...", id);

      let donation = await share.methods.fetchDonation(id).call({from: owner_pu});

      // TODO - refactor into utils/shareUtils.js
      // handles the access control of the smart contract data
      let authenticateUser = address => {
        // needs to be set to lowercase, to ensure exact matching
        address = address.toLowerCase();

        let {
          owner,
          lottery,
          charity,
          donor,
          amount,
          charityAmount,
          lotteryAmount,
          ownerAmount,
          donationID
        } = donation;

        amount = web3.utils.fromWei(amount.toString(), "ether");
        charityAmount = web3.utils.fromWei(charityAmount.toString(), "ether");
        lotteryAmount = web3.utils.fromWei(lotteryAmount.toString(), "ether");
        ownerAmount = web3.utils.fromWei(ownerAmount.toString(), "ether");

        switch (true) {
          // returns all data if requester is donation owner
          // must be set to lowercase, solidity stores all address hashes in uppercase
          case address === owner.toLowerCase(): {
            return {
              owner,
              lottery,
              charity,
              donor,
              amount,
              charityAmount,
              lotteryAmount,
              ownerAmount,
              donationID
            };
          }

          // returns lottery data if requester is lottery owner
          case address === lottery.toLowerCase(): {
            return { lottery, donor, lotteryAmount, id };
          }

          // returns charity data if requester is charity owner
          case address === charity.toLowerCase(): {
            return { charity, donor, charityAmount, id };
          }

          // returns donor data if requester is donor
          case address === donor.toLowerCase(): {
            return {
              lottery,
              charity,
              donor,
              amount,
              charityAmount,
              lotteryAmount,
              id
            };
          }

          // returns an error if the address is not recognized
          default: {
            return "Access denied, address not found within the fetched donation. Are you sure you passed the correct donationID?";
          }
        }
      };

      // filters the donation, returning trimmed data to user depending on access control
      let fetchedDonation = authenticateUser(address_pu);


      const response = {
        status: 'Donation Fetched!',
        result: 'fetched',
        donation: fetchedDonation
      };

      console.log('Fetched Donation: ', response);

      res.status(200).json(response);
    } else {
      res
        .status(400)
        .json("Bad request, body of request missing address property");
    }
  } else {
    res.status(400).json("Web3 instances failed to load!");
  }
});

module.exports = router;
