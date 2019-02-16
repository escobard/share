pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

// add all imports for user privileges here

contract Share {

    address Owner;
    address Lottery;
    address Charity;

    // assigns an ID to each donation
    uint donationID = 1;

    /// @notice sets the owner to the Owner variable upon contract init
    /// @dev can be expanded to account for many more constructor features
    constructor() public {
        Owner = msg.sender;
    }

    /// @notice Contains the stucture of the star metadata
    /// @dev key of structure is the provided transaction hash, will be donationId in v2.0
    /// @param transactionHash address, contains donor to share transaction hash
    /// @param owner address, contains the address of the contract owner
    /// @param lottery address, contains the address of the lottery - ether account for v1.0, contract for v2.0
    /// @param charity address, contains the address of the charity - an ether account for v1.0 and v2.0
    /// @param donor address, contains the address of the contract owner - ether account always
    /// @param amount uint, contains the original amount donated - all amounts are after gas
    /// @param ownerAmount, contains the 1% of original amount sent to owner
    /// @param lotteryAmount uint, contains the 4% of original amount sent to lottery
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

    /// @notice Initiates the contract once deployed, only available to owner
    /// @dev Need to test the syntax here, unsure the require function works
    /// @param address _lottery, contains the ethereum public key for lottery account
    /// @param address _charity, contains the ethereum public key for charity account

    function initiateContract(address _lottery, address _charity) public view returns (string){

        // must test to ensure this works, unsure of syntax
        require(msg.sender == Owner);

        Lottery = _lottery;
        Charity = _charity;

        return "Contract initialized!";
    }

    /// @notice parent function for all contract functionality
    /// @dev Should consider splitting this out further if necessary by reviewers

    function makeDonation() public payable{

        // owner, charity, and lottery accounts cannot utilize the handleFunds function
        require(msg.sender != Owner || msg.sender != Lottery || msg.sender != Charity);

        // creates the amount variable, used to set the amount later on in this function
        uint amount = msg.value;
        uint charityAmount = amount * 95 / 100;
        uint lotteryAmount = amount * 5 / 100;
        uint ownerAmount = amount * 5 / 100;

        Charity.transfer(charityAmount);
        Lottery.transfer(lotteryAmount);

        // dispatches remaining funds to owner, this ensures that all gas is covered
        Owner.transfer(msg.value);

        // stores all the data
        Donations[donationID] = Donation(Owner, Lottery, Charity, msg.sender, amount, charityAmount, lotteryAmount, ownerAmount, donationID);
        
        fetchDonationId(donationID);
    }

    /// @notice returns the saved donation as a Structure (should be an array)
    /// @dev this should be heavily tested via the API, should consider adding authentication for data
    /// @param uint _donationID, utilized to fetch structure from storage

    function fetchDonation(uint _donationID) public view returns (Donation){

        // creates a temporary variable for the fetched donation
        Donation memory fetchedDonation = Donations[_donationID];

        if(msg.sender == fetchedDonation.owner || msg.sender == fetchedDonation.lottery || msg.sender == fetchedDonation.charity || msg.sender == fetchedDonation.donor){
            return fetchedDonation;
        }
    }

    /// @notice child function of makeDonation(), handles the returning of donationID
    /// @dev can be vastly improved during 2.0
    /// @return donationID, string to fetch donation

    function fetchDonationId(string _donationID) private view returns (string){
        // updates donationID;
        donationID = donationID + 1;
        
        // returns the previous donationID to fetch the proper donation
        return _donationID;
    }

}

