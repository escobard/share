pragma solidity ^0.4.24;

import "../core/Ownable.sol";

// TODO - deploy this, and grab address
// Define a contract 'LotteryRole' to manage this role - checks if address is parent contracts lottery
contract LotteryRole{

    address private Owner;
    address private Lottery;
    bool private initialized = false;
    Ownable private ownableContract;

    // adds ownableContract library to the contract

    constructor(address _ownable) public {
        Owner = msg.sender;
        ownableContract = Ownable(_ownable);
    }

    function setLottery(address _lottery) public payable {

        // ensures caller is owner
        require(ownableContract.isOwner(msg.sender));
        Lottery = _lottery;
        initialized = true;
    }

    function getLottery() public view returns (address){
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

    function payout() public payable{
        require(ownableContract.isOwner(msg.sender));
        Owner.transfer(address(this).balance);
    }
}