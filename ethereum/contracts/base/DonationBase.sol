pragma solidity ^0.4.23;

import "../accesscontrol/OwnerRole.sol";

contract DonationBase {

    OwnerRole private ownerRole;

    // adds ownerRole library to the contract
    constructor(address _ownable) public {
        ownerRole = OwnerRole(_ownable);
    }

    /// @notice Contains the mapping for the lottery entrees
    /// @dev
    /// @param donor address, will be expanded for v2

    mapping(uint => address) private LotteryEntrees;

    /// @notice Contains the mapping for donation data
    /// @dev key of structure is the transactionHash, in v2 a donationId will be introduced
    /// @param Donation structure, contains donation metadata

    mapping(uint => Donation) private Donations;

    /// @notice Initiates the contract once deployed, only available to owner
    /// @dev Need to test the syntax here, unsure the require function works
    /// @param _lottery address, contains the ethereum public key for lottery account
    /// @param _charity address, contains the ethereum public key for charity account

    /// @notice Contains the stucture of the star metadata
    /// @dev key of structure is the provided transaction hash, will be donationId in v2
    /// @param owner address, contains the address of the contract owner
    /// @param lottery address, contains the address of the lottery - ether account for v1, contract for v2
    /// @param charity address, contains the address of the charity - an ether account for v1 and v2
    /// @param donor address, contains the address of the contract owner - ether account always
    /// @param amount uint, contains the original amount donated - all amounts are after gas
    /// @param charityAmount, contains the remaining 95% of original amount sent to charity
    /// @param lotteryAmount uint, contains the 4% of original amount sent to lottery
    /// @param ownerAmount, contains the 1% of original amount sent to owner
    /// @param id, contains the value of the last submitted donation - is returned to ui
    // TODO - refactor all data handling, updating, and transfer to a BASE data management contract in the future
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

    function setDonation(
        address _owner,
        address _lottery,
        address _charity,
        address _donor,
        uint _amount,
        uint _charityAmount,
        uint _lotteryAmount,
        uint _ownerAmount,
        uint _donationID
    ) public payable {

        require(ownerRole.isOwner(_owner));

        Donations[_donationID] = Donation(_owner, _lottery, _charity, _donor, _amount, _charityAmount, _lotteryAmount, _ownerAmount, _donationID);
    }

    function setLottery(
        address _owner,
        address _donor,
        uint _donationId)
    public payable {

        require(ownerRole.isOwner(_owner));

        LotteryEntrees[_donationId] = _donor;

    }

    function getDonationOwner(
        address _owner,
        uint _donationID
    ) public view returns(address){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].owner;
    }

    function getDonationLottery(
        address _owner,
        uint _donationID
    ) public view returns(address){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].lottery;
    }

    function getDonationCharity(
        address _owner,
        uint _donationID
    ) public view returns(address){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].charity;
    }

    function getDonationDonor(
        address _owner,
        uint _donationID
    ) public view returns(address){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].donor;
    }

    function getDonationAmount(
        address _owner,
        uint _donationID
    ) public view returns(uint){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].amount;
    }

    function getDonationCharityAmount(
        address _owner,
        uint _donationID
    ) public view returns(uint){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].charityAmount;
    }

    function getDonationLotteryAmount(
        address _owner,
        uint _donationID
    ) public view returns(uint){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].lotteryAmount;
    }

    function getDonationOwnerAmount(
        address _owner,
        uint _donationID
    ) public view returns(uint){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].ownerAmount;
    }

    function getDonationId(
        address _owner,
        uint _donationID
    ) public view returns(uint){
        require(ownerRole.isOwner(_owner));
        return Donations[_donationID].id;
    }
}