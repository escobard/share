try {
  const router = require("express").Router(),
    makeDonationBaseValidation = require("../middlewares/makeDonationBaseValidation"),
    protocolSetup = require("../middlewares/protocolSetup"),
    makeDonationEtherValidation = require("../middlewares/makeDonationEtherValidation"),
    sendRawTransaction = require("../utils/rawTransaction");

  router.post("/", makeDonationBaseValidation, protocolSetup, makeDonationEtherValidation, async (req, res) => {
    let {
      web3,
      share,
      body: { address_pu, address_pr, amount },
      accounts: { owner_pu, owner_pr, charity_pu, lottery_pu },
      contract: { contract_pu }
    } = req;

    // ensures web3 instance is available, may want to consider moving all intial web3 logic outside of the route
    if (web3) {

      // this is where the transaction has been validation, send a response to the UI to trigger timer
      /*
      global.makeDonation = {
        status: 'Donation Validated! Sending to Ethereum...',
        result: 'validated'
      };

      res.status(200).json(global.makeDonation);
      */

      // TODO - refactor into its own middleware, using a new util for the contract itself, extend this with its own class
      let contractInitialized = await share.methods.isInitialized.call({from: owner_pu});

      console.log("is contract initialized?", contractInitialized);

      // donor address public
      let donorPub = address_pu;

      // TODO - the passing of private addresses outside of a wallet needs to be eliminated entirely with share v2
      // donor address private
      let donorPriv = address_pr;

      // TODO - make this into a middleware in the future
      if (contractInitialized === false) {
        console.log("Initializing Contract...", req.body);

        // TODO must be heavily refactored
        await sendRawTransaction(
          share.methods.initiateContract(lottery_pu, charity_pu),
          owner_pu,
          owner_pr,
          contract_pu,
          "0.001",
          res
        );
        res.status(200).json('Initializing contract, send another donation!');
      }

      console.log("Contract initialized! Creating Donation...");

      await sendRawTransaction(
        share.methods.makeDonation(),
        donorPub,
        donorPriv,
        contract_pu,
        amount,
        res
      );

      console.log("Donation created! Fetching ID...");

      // TODO - refactor all contract methods into utils/shareUtils.js

      // using ABI workaround instead of raw call transaction
      let donationID = await share.methods.fetchDonationID.call({
        from: owner_pu
      });

      // TODO - fix smart contract logic so that fetchDonation returns currentDonationID, not next donationID
      let currentDonation = donationID - 1;

      console.log("Donation ID:", currentDonation);

      res.status(200).json(currentDonation);
    } else {
      res.status(400).json("Web3 instances failed to load!");
    }
  });
  module.exports = router;
} catch (err) {
  console.log("ERROR", err);
}
