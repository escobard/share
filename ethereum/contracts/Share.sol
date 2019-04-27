pragma solidity ^0.4.23;
// add all imports for user privileges here

// actor contracts
import "./accesscontrol/CharityRole.sol";
import "./accesscontrol/OwnerRole.sol";
import "./accesscontrol/LotteryRole.sol";

// base contract
import "./base/DonationBase.sol";

contract Share {

    address private Owner;
    address private Lottery;
    address private Charity;
    bool private initialized = false;
    OwnerRole private ownerRole;
    CharityRole private charityRole;
    LotteryRole private lotteryRole;
    DonationBase private donationBase;

    // assigns an ID to each donation
    uint private donationID = 1;

    /// @notice sets the owner to the Owner variable upon contract init
    /// @dev can be expanded to account for many more constructor features
    /// @param _ownerRole address, contains the address of the OwnerRole contract
    /// @param _charityRole address, contains the address of the CharityRole contract
    /// @param _lotteryRole address, contains the address of the LotteryRole contract
    /// @param _donationBase address, contains the address of the DonationBase contract
    constructor(address _ownerRole, address _charityRole, address _lotteryRole, address _donationBase) public {
        Owner = msg.sender;

        // sets the address for the instance of each helper contract
        ownerRole = OwnerRole(_ownerRole);
        charityRole = CharityRole(_charityRole);
        lotteryRole = LotteryRole(_lotteryRole);
        donationBase = DonationBase(_donationBase);
    }

    // TODO - this logic must also include the new contract
    function initiateContract(address _lottery, address _charity) public payable{

        require(initialized == false && ownerRole.isOwner(msg.sender));

        // TODO - this logic must add the smart contract address for CharityRole
        // TODO - ei - Charity = CharityRole(_charity) - argument must contain address of contract

        // sets the lottery for the lotteryRole contract
        lotteryRole.setLottery(_lottery, msg.sender);

        // gets lottery address
        Lottery = lotteryRole.getLottery(msg.sender);

        // sets the charity for the charityRole contract
        charityRole.setCharity(_charity, msg.sender);

        // gets charity address
        Charity = charityRole.getCharity(msg.sender);

        initialized = true;
    }

    /// @notice parent function for all contract functionality
    /// @dev Should consider splitting this out further if necessary by reviewers

    function makeDonation() public payable{
        // owner, charity, and lottery accounts cannot utilize the handleFunds function
        require(initialized == true && !ownerRole.isOwner(msg.sender) && !charityRole.isCharity() && !lotteryRole.isLottery());

        // creates the amount variable, used to set the amount later on in this function
        // these math. functions can be move to the API to avoid gas cost for calculations
        uint amount = msg.value;
        uint charityAmount = amount * 95 / 100;
        uint lotteryAmount = amount * 4 / 100;
        uint ownerAmount = amount * 1 / 100;

        // TODO - these can be refactored to ownerRole, since it utilizes the transfer of ownership principle
        Charity.transfer(charityAmount);
        Lottery.transfer(lotteryAmount);

        // dispatches remaining funds to owner, this ensures that all gas is covered
        Owner.transfer(ownerAmount);

        // stores all the data

        donationBase.setDonation(Owner, Lottery, Charity, msg.sender, amount, charityAmount, lotteryAmount, ownerAmount, donationID);

        // add lotteryEntrees struct
        donationBase.setLottery(Owner, msg.sender, donationID);

        // updates donationID;
        donationID = donationID + 1;
    }

    function fetchDonationID() public view returns (uint){

        // requires the owner to call this function, only owner address can access donationID atm
        require(ownerRole.isOwner(msg.sender));

        return donationID;
    }

    function fetchDonation(uint _donationID) public view returns (
        address owner,
        address lottery,
        address charity,
        address donor,
        uint amount,
        uint charityAmount,
        uint lotteryAmount,
        uint ownerAmount,
        uint id
    ){

        // requires the owner to call this function, only owner address can access donationID atm
        require(ownerRole.isOwner(msg.sender));

        owner = donationBase.getDonationOwner(msg.sender, _donationID);
        lottery = donationBase.getDonationLottery(msg.sender, _donationID);
        charity = donationBase.getDonationCharity(msg.sender, _donationID);
        donor = donationBase.getDonationDonor(msg.sender, _donationID);
        amount = donationBase.getDonationAmount(msg.sender, _donationID);
        charityAmount = donationBase.getDonationCharityAmount(msg.sender, _donationID);
        lotteryAmount = donationBase.getDonationLotteryAmount(msg.sender, _donationID);
        ownerAmount = donationBase.getDonationOwnerAmount(msg.sender, _donationID);
        id = donationBase.getDonationId(msg.sender, _donationID);

        return ( owner, lottery, charity, donor, amount, charityAmount, lotteryAmount, ownerAmount, id);
    }

    function isInitialized() public view returns(bool){
        require(ownerRole.isOwner(msg.sender));
        return initialized;
    }

}

