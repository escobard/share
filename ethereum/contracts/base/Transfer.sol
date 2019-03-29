pragma solidity ^0.4.23;

import "../core/Ownable.sol";

contract Transfer is Ownable {

    address private Owner;

    constructor() internal {
        Owner = msg.sender;
    }

    function pay(address _address, uint amount) onlyOwner public payable{
        _address.transfer(amount);
    }

}