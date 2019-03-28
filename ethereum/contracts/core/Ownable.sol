pragma solidity ^0.4.24;

/// Provides basic authorization control

// TODO - may include in the submission but most likely not, not necessary and overly complicates smart contract logic

contract Ownable {
    address private Owner;

    bool private initialized = false;

    constructor() public {
        Owner = msg.sender;
    }

    function getOwner() onlyOwner public view returns (address) {
        return Owner;
    }

    // changed to function, issues importing modifiers
    modifier onlyOwner{
        require(isOwner());
        _;
    }

    modifier notOwner{
        require(!isOwner());
        _;
    }

    /// Check if the calling address is the Owner of the contract
    function isOwner() public view returns (bool) {
        return msg.sender == Owner;
    }

    function payout() onlyOwner public payable{
        Owner.transfer(address(this).balance);
    }
}
