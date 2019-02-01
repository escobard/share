pragma solidity ^0.4.23;

// add all imports for user privileges here

contract Share {

    address Owner;
    address Lottery;
    address Charity;



    /// @notice Contains the mapping for the lottery entrees
    /// @dev
    /// @param donor address, will be expanded for v2.0

    mapping(address => Entrees) public lotteryEntrees;

    /// @notice Contains the mapping for donation data
    /// @dev key of structure is the transactionHash, in v2.0 a donationId will be introduced
    /// @param Donation structure, contains donation metadata

    mapping(address => Donation) public Donations;



}

