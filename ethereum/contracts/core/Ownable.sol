pragma solidity ^0.4.24;

/// Provides basic authorization control

// TODO - may include in the submission but most likely not, not necessary and overly complicates smart contract logic

contract Ownable {
    address private owner;
    bool private initialized = false;

    /// Assign the contract to an owner
    constructor() internal {
        owner = msg.sender;
    }

    /// Look up the address of the owner
    function getOwner() public view returns (address) {
        return owner;
    }

    /// Define a function modifier 'onlyOwner'
    modifier onlyOwner{
        require(isOwner());
        _;
    }

    /// Check if the calling address is the owner of the contract
    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
}
