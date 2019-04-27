pragma solidity ^0.4.24;

import "../accesscontrol/OwnerRole.sol";

// TODO - deploy this, and grab address
// Define a contract 'DonorRole' to manage this role - checks if address is parent contracts donor
contract DonorRole {

    address private Donor;
    OwnerRole private ownerRole;

    // adds ownerRole library to the contract
    constructor(address _ownable) public {
        ownerRole = OwnerRole(_ownable);
    }

    function setDonor(address _donor, address _owner) public payable {

        // can't use modifiers with imported contracts, if importing instance to my knowledge
        require(ownerRole.isOwner(_owner));
        Donor = _donor;
    }

    function getDonor(address _owner) public view returns (address){
        require(ownerRole.isOwner(_owner));
        return Donor;

    }

    // could be refactored into a util library
    modifier onlyDonor{
        require(isDonor());
        _;
    }

    modifier notDonor{
        require(!isDonor());
        _;
    }

    function isDonor() public view returns (bool){

        return msg.sender == Donor;
    }

    function payout() public payable{
        require(ownerRole.isOwner(msg.sender));
        address Owner = ownerRole.getOwner();
        Owner.transfer(address(this).balance);
    }
}