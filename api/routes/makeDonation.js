try {
  const router = require("express").Router(),
    protocolSetup = require("../middlewares/protocolSetup"),
    sendEther = require("../utils/rawTransaction");

  router.post("/", protocolSetup, async (req, res) => {
    let {
      web3,
      share,
      call,
      body: { address_pu, address_pr, amount },
      accounts: { owner_pu, owner_pr, charity_pu, lottery_pu },
      contract: { contract_pu }
    } = req;
    // ensures web3 instance is available, may want to consider moving all intial web3 logic outside of the route
    if (web3) {
      // ensures request.body.address exists

      if (address_pu) {
        /* TODO - GANACHE REFACTOR
        // ganache address needs to be updated each time ganache-cli is initialized
        let ownerAccount =
            runtime == "ganache"
              ? accounts[0]
              : "0xCb82438B0443593191ec05D07Bb9dBf6Eb73594C",
          charityAccount =
            runtime == "ganache"
              ? accounts[1]
              : "0x9b41DB553536D504d16bC6B8d00BCA9255522242",
          lotteryAccount =
            runtime == "ganache"
              ? accounts[2]
              : "0x46a3e9029F58BEc0c7Ba45d1D296bC60Fc0b0aFC";
        */

        // checks if contract is initialized, can be called by anyone with raw transactions due to this being public
        console.log('CONTRACT ADDY', process.env.CONTRACT_ADDRESS);
        // TODO - refactor into its own middleware, using a new util for the contract itself, extend this with its own class
        let contractInitialized = await share.methods.isInitialized.call({from: owner_pu});

        console.log("INITIALIZED?", contractInitialized);


        // donor address public
        let donorPub = address_pu;

        // TODO - the passing of private addresses outside of a wallet needs to be eliminated entirely with share v2.0
        // donor address private
        let donorPriv = address_pr;

        if (contractInitialized === false) {
          console.log("Initializing Contract...", req.body);

          // TODO must be heavily refactored
          await sendEther(
            share.methods.initiateContract(lottery_pu, charity_pu),
            owner_pu,
            owner_pr,
            contract_pu,
            "0.001"
          );

          /* TODO - GANACHE METHOD - refactor for local dev
         await share.methods
           .initiateContract(lotteryAccount, charityAccount)
           .send({ from: ownerAccount }); */
          res.status(200).json('Initializing contract, send another donation!');
        }

        console.log("Contract initialized! Creating Donation...", req.body);

        await sendEther(
          share.methods.makeDonation(),
          donorPub,
          donorPriv,
          contract_pu,
          amount
        );

        console.log("Donation created! Fetching ID...");

        // TODO - refactor into utils/shareUtils.js

        // using ABI workaround instead of raw call transaction
        let donationID = await share.methods.fetchDonationID.call({
          from: owner_pu
        });

        console.log("DONATION ID", donationID);
        let currentDonation = donationID - 1;

        console.log("Donation ID:", currentDonation);
        /*

        // console.log("DONATION:", donation)
        /* TODO - GANACHE METHOD - refactor for local dev

        let donationID = await share.methods.fetchDonationID().call();

                /*
                // reduces donationID by 1 number, to fetch most recent donation

                                await share.methods
                  .makeDonation()
                  .send({ from: req.body.address, value: amount, gas: "500000" });


                let currentDonation = donationID - 1;

                console.log("Donation ID:", currentDonation);
                let donation = await share.methods.Donations(currentDonation).call();
                
                let amount = web3.utils.toWei(req.body.amount, "ether");
                */
        // only the current donationID should be returned to the user

        res.status(200).json(currentDonation);
      } else {
        console.log(req.body);
        res
          .status(400)
          .json("Bad request, body of request missing address property");
      }
    } else {
      res.status(400).json("Web3 instances failed to load!");
    }
  });
  module.exports = router;
} catch (err) {
  console.log("ERROR", err);
}
