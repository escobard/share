pragma solidity ^0.4.23;

import "../accesscontrol/OwnableRole.sol";

contract Transfer is OwnableRole {

    address private Owner;

    constructor() internal {
        Owner = msg.sender;
    }

    function pay(address _address, uint amount) onlyOwner public payable{
        _address.transfer(amount);
    }

}