pragma solidity ^0.4.24;

import "../core/Ownable.sol";

// TODO - deploy this, and grab address
// Define a contract 'LotteryRole' to manage this role - checks if address is parent contracts lottery
contract LotteryRole{

    address private Lottery;
    Ownable private ownableContract;

    // adds ownableContract library to the contract

    constructor(address _ownable) public {
        ownableContract = Ownable(_ownable);
    }

    function setLottery(address _lottery, address _sender) public payable {

        // must be used like this, msg.sender grabs the CONTRACT address, not the OWNER address
        require(ownableContract.isOwner(_sender));
        // ensures caller is owner
        Lottery = _lottery;
    }

    function getLottery(address _sender) public view returns (address){

        require(ownableContract.isOwner(_sender));
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
        address Owner = ownableContract.getOwner();

        Owner.transfer(address(this).balance);
    }
}