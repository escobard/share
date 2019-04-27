pragma solidity ^0.4.24;

// TODO - use this as the boilerplate for owner, charity, lottery, donor role files
// TODO - check requirements and explanation for each directory: https://classroom.udacity.com/nanodegrees/nd1309-beta/parts/03713f8a-c233-479e-9105-9809fb260489/modules/b32541ea-7b86-4689-b42a-7ba8c2689905/lessons/da5331bc-e6ae-4372-b18a-71fa7cc77b67/concepts/25b82382-c290-4289-8ac5-d948aad0a349

import "../accesscontrol/OwnableRole.sol";

// TODO - deploy this, and grab address
// Define a contract 'CharityRole' to manage this role - checks if address is parent contracts charity
contract CharityRole {

  address private Charity;
  OwnableRole private ownableContract;

  // adds ownableContract library to the contract
  constructor(address _ownable) public {
    ownableContract = OwnableRole(_ownable);
  }

  // can be restricted to pure, not sure what that means yet
  function setOwnableRole(address _ownable) public {
    ownableContract = OwnableRole(_ownable);
  }

  function setCharity(address _charity, address _sender) public payable {

    // can't use modifiers with imported contracts, if importing instance to my knowledge
    require(ownableContract.isOwner(_sender));
    Charity = _charity;
  }

  function getCharity(address _sender) public view returns (address){
    require(ownableContract.isOwner(_sender));
    return Charity;

  }

  // could be refactored into a util library
  modifier onlyCharity{
    require(isCharity());
    _;
  }

  modifier notCharity{
    require(!isCharity());
    _;
  }

  function isCharity() public view returns (bool){

    return msg.sender == Charity;
  }

  function payout() public payable{
    require(ownableContract.isOwner(msg.sender));
    address Owner = ownableContract.getOwner();
    Owner.transfer(address(this).balance);
  }
}