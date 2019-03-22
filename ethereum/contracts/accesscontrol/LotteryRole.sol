pragma solidity ^0.4.24;

import "../core/Ownable.sol";

// TODO - deploy this, and grab address
// Define a contract 'LotteryRole' to manage this role - checks if address is parent contracts lottery
contract LotteryRole is Ownable {

    address private Owner;
    address private Lottery;
    bool private initialized = false;

    // adds ownable library to the contract

    constructor() internal {
        Owner = msg.sender;
    }

    function setLottery(address _lottery) onlyOwner public payable {

        // ensures caller is owner

        Lottery = _lottery;
        initialized = true;
    }

    function getLottery() onlyOwner public view returns (address){
        return Lottery;
    }

    // could be refactored into a util library
    modifier onlyLottery{
        require(isLottery());
        _;
    }

    modifier notLottery{
        require(!isLottery());
        _;
    }

    function isLottery() public view returns (bool){
        return msg.sender == Lottery;
    }
}