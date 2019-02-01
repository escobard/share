pragma solidity ^0.4.23;

// add all imports for user privileges here

contract Share {

    address Owner;
    address Lottery;
    address Charity;

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

    struct Donation {
        address transactionHash;
        address owner;
        address lottery;
        address charity;
        address donor;
        uint amount;
        uint ownerAmount;
        uint lotteryAmount;
        uint charityAmount;
    }

    /// @notice Contains the mapping for the lottery entrees
    /// @dev
    /// @param donor address, will be expanded for v2.0

    mapping(address => Entrees) public lotteryEntrees;

    /// @notice Contains the mapping for donation data
    /// @dev key of structure is the transactionHash, in v2.0 a donationId will be introduced
    /// @param Donation structure, contains donation metadata

    mapping(address => Donation) public Donations;



}

