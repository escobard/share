pragma solidity ^0.4.23;

// add all imports for user privileges here

contract Share {

    address Owner;
    address Lottery;
    address Charity;

    // assigns an ID to each donation
    uint donationID = 0;

    /// @notice Contains the stucture of the star metadata
    /// @dev key of structure is the provided transaction hash, will be donationId in v2.0
    /// @param transactionHash address, contains donor to share transaction hash
    /// @param owner address, contains the address of the contract owner
    /// @param lottery address, contains the address of the lottery - ether account for v1.0, contract for v2.0
    /// @param charity address, contains the address of the charity - an ether account for v1.0 and v2.0
    /// @param donor address, contains the address of the contract owner - ether account always
    /// @param amount uint, contains the original amount donated - all amounts are after gas
    /// @param ownerAmount, contains the 1% of original amount sent to owner
    /// @param lotterAmount uint, contains the 4% of original amount sent to lottery
    /// @param charityAmount, contains the remaining 95% of original amount sent to charity
    /// @param donationID, contains the value of the last submitted donation - is returned to ui

    struct Donation {
        address owner;
        address lottery;
        address charity;
        address donor;
        uint amount;
        uint charityAmount;
        uint lotteryAmount;
        uint ownerAmount;
        uint donationID;
    }

    /// @notice Contains the mapping for the lottery entrees
    /// @dev
    /// @param donor address, will be expanded for v2.0

    mapping(address => address) public lotteryEntrees;

    /// @notice Contains the mapping for donation data
    /// @dev key of structure is the transactionHash, in v2.0 a donationId will be introduced
    /// @param Donation structure, contains donation metadata

    mapping(uint => Donation) public Donations;

    function makeDonation() public {

        // owner, charity, and lottery accounts cannot utilize the handleFunds function
        require(msg.sender != (Owner || Lottery || Charity));

        // creates the amount variable, used to set the amount later on in this function
        uint amount = msg.value;
        uint charityAmount = amount * 0.95;
        uint lotteryAmount = amount * 0.05;
        uint ownerAmount = amount * 0.01;

        dispatchFunds(Charity, charityAmount);
        dispatchFunds(Lottery, lotteryAmount);
        dispatchFunds(Owner, ownerAmount);

        // updates donationID;
        donationID = donationID + 1;

        // stores all the data
        Donations[donationID] = Donation(Owner, Lottery, Charity, msg.sender, amount, charityAmount, lotteryAmount, ownerAmount, donationID)

    }

    function fetchDonation(address _transaction) public view returns (struct){

        // creates a temporary variable for the fetched donation
        Donation memory fetchedDonation = Donations[_transaction];

        if(msg.sender == (fetchedDonation.owner || fetchedDonation.lottery || fetchedDonation.charity || fetchedDonation.donor)){
            return fetchedDonation;
        }

    }

    function dipatchFunds(address _receiver, uint _amount) private payable{

        // transfers the specified value, to the specified party
        _receiver.transfer(_amount);
    }

};

