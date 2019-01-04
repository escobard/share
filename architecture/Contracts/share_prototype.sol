// Contract: Share

    // Variable: owner

    // Variable: lottery - current total lottery amount

    // State: ownerPaid, lotteryPaid, charityPaid, completed

    // Mapping: lotteryEntrees - these addresses will be used by the API

    // Mapping: donations - contains a list of donations, stored via Donation.transactionHash

    // Struct: Donation { transactionHash, amount, lotteryAmount, donationAmount, state, owner, lottery, charity, donor }

    // Modifier: 'isOwner' confirms that the caller is the owner

    // Modifier: 'isDonor' confirms that the caller is the donor

    // Modifier: 'isCharity'  confirms that the caller is the charity

    // Function: 'handleFunds' handles all the dispatch functionality

    // Function: 'fetchDonation' returns donation data to the user, checks callers address for data protection

    // Function: 'fetchLotteryEntrees' returns lottery entrees array to the API.

    // Function: 'dispatchLottery' dispatches lottery to selected winners chosen by the API.
