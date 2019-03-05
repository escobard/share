const router = require("express").Router();
Web3 = require("web3"),
    ShareABI = require("../constants/share_abi");

// should be split up into middlewares for share 2.0

// set the provider you want from Web3.providers
// need to setup the else case to connect to infura

// utilized for local testing w/ ganache vs production w/ infura
let runtime;
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
if (typeof web3 !== 'undefined') {

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    runtime = 'ganache';

} else {

    // this needs to be a new infura provider, replacing the current one which is for the starNotary contract
    web3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://rinkeby.infura.io/v3/8f06b06788e046f9ba989b606c0574f1"
        )
    );
    runtime = 'infura'
}

router.post("/", async (req, res) => {

    // ensures web3 instance is available, may want to consider moving all intial web3 logic outside of the route
    if (web3) {

        // ensures request.body.address exists
        if (req.body.address) {

            // defines the smart contract ABI
            let share = await new web3.eth.Contract(ShareABI, "0x6ac663cb9e24aedbe799e619fd81170d01f76914");

            // checks if contract is initialized
            let contractInitialized = await share.methods.initialized.call();

            let donationID = await share.methods.fetchDonationID().call();

            // checks if contract has been initialized, if not initializes
            if (contractInitialized === false){

                console.log('Initializing Contract...');

                await share.methods.initiateContract(lotteryAccount, charityAccount).send({from: ownerAccount});

                res.status(200).json("Contract initialized, but no donations have been created - send a request to /makeDonation to test this route");

            }

            // checks if contract has not store any donations, donationID will be 1 by default
            if (donationID === 1){

                res.status(200).json("Contract initialized, but no donations have been created - send a request to /makeDonation to test this route");

            }

            console.log('Initialization complete! Fetching donation...');

            let donation = await share.methods.Donations(req.body.id).call();

            console.log('DONATION:', donation);

            // handles the access control of the smart contract data
            let authenticateUser = (address) =>{

                // needs to be set to lowercase, to ensure exact matching
                address = address.toLowerCase();

                let { owner, lottery, charity, donor, amount, charityAmount, lotteryAmount, ownerAmount, donationID } = donation;
                console.log("DONATION DONOR:", donor);
                console.log("DONATION ADDRESS:", address);
                switch (true) {

                    // returns all data if requester is donation owner
                    // must be set to lowercase, solidity stores all address hashes in uppercase
                    case(address === owner.toLowerCase()):{

                        return { owner, lottery, charity, donor, amount, charityAmount, lotteryAmount, ownerAmount, donationID };

                    }

                    // returns lottery data if requester is lottery owner
                    case(address === lottery.toLowerCase()):{

                        return { lottery, donor, lotteryAmount, donationID };

                    }

                    // returns charity data if requester is charity owner
                    case(address === charity.toLowerCase()):{

                        return { charity, donor, charityAmount, donationID };

                    }

                    // returns donor data if requester is donor
                    case(address === donor.toLowerCase()):{

                        return { lottery, charity, donor, amount, charityAmount, lotteryAmount, donationID };

                    }

                    // returns an error if the address is not recognized
                    default:{

                        return "Access denied, address not found within the fetched donation. Are you sure you passed the correct donationID?"

                    }

                }
            }

            // filters the donation, returning trimmed data to user depending on access control
            let fetchedDonation = authenticateUser(req.body.address);

            res.status(200).json(fetchedDonation);

        }
        else{
            res.status(400).json("Bad request, body of request missing address property")
        }

    }
    else{
        res.status(400).json("Web3 instances failed to load!");
    }

});

module.exports = router;
