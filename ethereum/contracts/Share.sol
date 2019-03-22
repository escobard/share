pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;
// add all imports for user privileges here

import "./accesscontrol/CharityRole.sol";
import "./core/Ownable.sol";

contract Share is Ownable, CharityRole{

    address private Owner;
    address private Lottery;
    address private Charity;
    bool private initialized = false;

    // assigns an ID to each donation
    uint private donationID = 1;

    /// @notice sets the owner to the Owner variable upon contract init
    /// @dev can be expanded to account for many more constructor features
    constructor() public {
        Owner = msg.sender;
    }

    /// @notice Contains the stucture of the star metadata
    /// @dev key of structure is the provided transaction hash, will be donationId in v2.0
    /// @param owner address, contains the address of the contract owner
    /// @param lottery address, contains the address of the lottery - ether account for v1.0, contract for v2.0
    /// @param charity address, contains the address of the charity - an ether account for v1.0 and v2.0
    /// @param donor address, contains the address of the contract owner - ether account always
    /// @param amount uint, contains the original amount donated - all amounts are after gas
    /// @param charityAmount, contains the remaining 95% of original amount sent to charity
    /// @param lotteryAmount uint, contains the 4% of original amount sent to lottery
    /// @param ownerAmount, contains the 1% of original amount sent to owner
    /// @param id, contains the value of the last submitted donation - is returned to ui
    // TODO - refactor into SupplyChain
    struct Donation {
        address owner;
        address lottery;
        address charity;
        address donor;
        uint amount;
        uint charityAmount;
        uint lotteryAmount;
        uint ownerAmount;
        uint id;
    }

    /// @notice Contains the mapping for the lottery entrees
    /// @dev
    /// @param donor address, will be expanded for v2.0

    mapping(address => address) public lotteryEntrees;

    /// @notice Contains the mapping for donation data
    /// @dev key of structure is the transactionHash, in v2.0 a donationId will be introduced
    /// @param Donation structure, contains donation metadata

    mapping(uint => Donation) private Donations;

    /// @notice Initiates the contract once deployed, only available to owner
    /// @dev Need to test the syntax here, unsure the require function works
    /// @param _lottery address, contains the ethereum public key for lottery account
    /// @param _charity address, contains the ethereum public key for charity account

    // TODO - this logic must also include the new contract
    function initiateContract(address _lottery, address _charity) onlyOwner public payable{

        require(initialized == false);

        // TODO - this logic must add the smart contract address for CharityRole
        // TODO - ei - Charity = CharityRole(_charity) - argument must contain address of contract
        Lottery = _lottery;

        // sets the charity for the charityRole contract
        setCharity(_charity);

        // gets charity address
        Charity = getCharity();

        initialized = true;
    }

    /// @notice parent function for all contract functionality
    /// @dev Should consider splitting this out further if necessary by reviewers

    function makeDonation() notOwner notCharity public payable{
        // owner, charity, and lottery accounts cannot utilize the handleFunds function
        require(msg.sender != Lottery == false || msg.sender != Charity || initialized == true);

        // creates the amount variable, used to set the amount later on in this function
        // these math. functions can be move to the API to avoid gas cost for calculations
        uint amount = msg.value;
        uint charityAmount = amount * 95 / 100;
        uint lotteryAmount = amount * 4 / 100;
        uint ownerAmount = amount * 1 / 100;

        // TODO - these can be refactored to ownable, since it utilizes the transfer of ownership principle
        Charity.transfer(charityAmount);
        Lottery.transfer(lotteryAmount);

        // dispatches remaining funds to owner, this ensures that all gas is covered
        Owner.transfer(ownerAmount);

        // stores all the data
        Donations[donationID] = Donation(Owner, Lottery, Charity, msg.sender, amount, charityAmount, lotteryAmount, ownerAmount, donationID);

        // updates donationID;
        donationID = donationID + 1;
    }

    function fetchDonationID() public view returns (uint){

        // requires the owner to call this function, only owner address can access donationID atm
        require(msg.sender == Owner);

        return donationID;
    }

    function fetchDonation(uint _id) public view returns (address owner,
        address lottery,
        address charity,
        address donor,
        uint amount,
        uint charityAmount,
        uint lotteryAmount,
        uint ownerAmount,
        uint id){

        // requires the owner to call this function, only owner address can access donationID atm
        require(msg.sender == Owner);

        Donation memory donation = Donations[_id];
        return ( donation.owner, donation.lottery, donation.charity, donation.donor, donation.amount, donation.charityAmount, donation.lotteryAmount, donation.ownerAmount, donation.id);
    }

    function isInitialized() onlyOwner public view returns(bool){
        return initialized;
    }

}

