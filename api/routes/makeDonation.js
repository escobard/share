const router = require("express").Router();
    Web3 = require("web3"),
    ShareABI = require("../constants/share_abi");

// should be split up into middlewares for share 2.0

// set the provider you want from Web3.providers
// need to setup the else case to connect to infura

// utilized for local testing w/ ganache vs production w/ infura
let runtime;
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
if (process.env.NODE_ENV === 'dev') {

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    runtime = 'ganache';

} else {

    // this needs to be a new infura provider, replacing the current one which is for the starNotary contract
    web3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://rinkeby.infura.io/v3/47c181283cb345c19697f9403531914c"
        )
    );
    console.log('INFURA')
    runtime = 'infura'
}

router.post("/", async (req, res) => {

    // ensures web3 instance is available, may want to consider moving all intial web3 logic outside of the route
    if (web3) {

        // ensures request.body.address exists
        if (req.body.address) {

            // defines the smart contract ABI
            let share = await new web3.eth.Contract(ShareABI, "0xcb91ee93708df782544a1dfc208e55c374dfe021");

            // defines default address, based on runtime
            let accounts = await web3.eth.getAccounts()

            // ganache address needs to be updated each time ganache-cli is initialized
            let ownerAccount = runtime == 'ganache' ? accounts[0] : '0xCb82438B0443593191ec05D07Bb9dBf6Eb73594C',
                charityAccount = runtime == 'ganache' ? accounts[1] : '0x9b41DB553536D504d16bC6B8d00BCA9255522242',
                lotteryAccount = runtime == 'ganache' ? accounts[2] : '0x46a3e9029F58BEc0c7Ba45d1D296bC60Fc0b0aFC';

            // checks if contract is initialized
            let contractInitialized = await share.methods.initialized.call();

            // checks if contract has been initialized, if not initializes
            if (contractInitialized === false){

                console.log('Initializing Contract...');

                await share.methods.initiateContract(lotteryAccount, charityAccount).send({from: ownerAccount});
            }
                console.log('Contract initialized! Creating Donation...')

                let amount = web3.utils.toWei(req.body.amount, "ether");

                await share.methods.makeDonation().send({from: req.body.address, value: amount, gas: "500000"});

                console.log("Donation created! Fetching ID...");

                let donationID = await share.methods.fetchDonationID().call();

                // reduces donationID by 1 number, to fetch most recent donation
                let currentDonation = donationID - 1;

                console.log("Donation ID:", currentDonation);
                let donation = await share.methods.Donations(currentDonation).call();

                console.log('DONATION:', donation);

                // only the current donationID should be returned to the user
                res.status(200).json(currentDonation);

        }
        else{
            console.log(req.body)
            res.status(400).json("Bad request, body of request missing address property")
        }

    }
    else{
        res.status(400).json("Web3 instances failed to load!");
    }

});

module.exports = router;
