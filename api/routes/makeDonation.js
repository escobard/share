try {
  const router = require("express").Router(),
    protocolSetup = require("../middlewares/protocolSetup"),
    ShareABI = require("../constants/share_abi"),
    sendEther = require("../utils/rawTransaction");

  router.post("/", protocolSetup, async (req, res) => {
    let { web3, share, body: { address_pu } } = req;
    // ensures web3 instance is available, may want to consider moving all intial web3 logic outside of the route
    console.log('ACTIVATED', web3)
    if (web3) {
      // ensures request.body.address exists

      if (address_pu) {
        // smart contract address
        let contract_account = "0x57486a5332ac3f2c82625a2a504ee6916f004e46";

        // TODO - refactor into setContract()
        // defines the smart contract ABI

        // defines default address, based on runtime
        // let accounts = await web3.eth.getAccounts()

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

        let contractInitialized = await share.methods.initialized.call();

        console.log("INITIALIZED?", contractInitialized);
        /*
       // checks if contract has been initialized, if not initializes

       // owner address
       let owner_public = "0xCb82438B0443593191ec05D07Bb9dBf6Eb73594C";

       // donor address public
       let donorPub = req.body.address_pu ? req.body.address_pu : "0xe71a0829E03c6e26fc5486c8d10e0bf0C1A92cF9";

       // TODO - the passing of private addresses outside of a wallet needs to be eliminated entirely with share v2.0
       // donor address private
       let donorPriv = req.body.address_pr ? req.body.address_pr :
         "EBDB03D10DC7131D24D8A7154839937352A11AB43CC9EFC11EE9747DA562BD72";

       if (contractInitialized === false) {
         console.log("Initializing Contract...", req.body);

         // TODO must be heavily refactored
         await sendEther(
           share.methods.initiateContract(lotteryAccount, charityAccount),
           owner_public,
           false,
           contract_account,
           "0.000001"
         );

         /* TODO - GANACHE METHOD - refactor for local dev
         await share.methods
           .initiateContract(lotteryAccount, charityAccount)
           .send({ from: ownerAccount });
        }

        console.log("Contract initialized! Creating Donation...", req.body);

        await sendEther(
          share.methods.makeDonation(),
          donorPub,
          donorPriv,
          contract_account,
          req.body.amount
        );

        console.log("Donation created! Fetching ID...");

        // using sendTransaction workaround
        let donationID = await web3.eth.call({
          to: contract_account,
          from: owner_public,
          data: share.methods.fetchDonationID.encodeABI()
        });

        console.log('DONATION ID', donationID);
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
