// Contract: Share

    // Variable: owner

    // Variable: lottery - smart contract public address

    // Variable: charity - user public address

    // Variable: donor - donor public address

    // Variable: amount - initial amount

    // Variable: lotteryAmount - total amount going to lottery

    // Variable: donationAmount - total amount going to donation

    // Mapping: donationSku

    // State: ownerPaid, lotteryPaid, charityPaid, completed

    // Struct: Donation { donationSku, amount, lotteryAmount, donationAmount, state, owner, lottery, charity, donor  }

    // Modifier: 'isOwner' confirms that the caller is the owner

    // Modifier: 'isDonor' confirms that the caller is the donor

    // Modifier: 'isDonated' confirms that the donation has been donated (state)

    // Modifier: 'hasEntered' confirms that the donation has been entered to the lottery (state)

    // Modifier: 'isFulfilled' confirms that the donation lifecycle has ended

    // Constructor Function: Set 'owner' to the address that instantiated the contract

    // Function: 'dispatchOwner' dispatches 1% of the amount to the owner address, updates state

    // Function: 'dispatchCharity' dispatches 95% of the amount to the charity address, updates state

    // Function: 'dispatchLottery' dispatches 4% of the amount to lottery, updates state

    // Function: 'handleFunds' handles all the dispatch functionality

