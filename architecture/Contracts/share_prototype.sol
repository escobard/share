// Contract: Share

    // Variable: owner

    // Variable: lottery - smart contract public address

    // Variable: charity - user public address

    // Variable: donor - donor public address

    // State: ownerPaid, lotteryPaid, charityPaid, completed

    // Struct: Donation { donationSku, amount, lotteryAmount, donationAmount, state, owner, lottery, charity, donor  }

    // Modifier: 'isOwner' confirms that the caller is the owner

    // Modifier: 'isDonor' confirms that the caller is the donor

    // Constructor Function: Set 'owner' to the address that instantiated the contract

    // Function: 'dispatchOwner' dispatches 1% of the amount to the owner address, updates state

    // Function: 'dispatchCharity' dispatches 95% of the amount to the charity address, updates state

    // Function: 'dispatchLottery' dispatches 4% of the amount to lottery, updates state

    // Function: 'handleFunds' handles all the dispatch functionality

