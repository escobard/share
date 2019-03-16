pragma solidity ^0.4.24;

// Import the library 'Roles'
import "./Roles.sol";

// TODO - use this as the boilerplate for owner, charity, lottery, donor role files

// Define a contract 'RetailerRole' to manage this role - add, remove, check
contract RetailerRole {

  // Define 2 events, one for Adding, and other for Removing
  
  // Define a struct 'retailers' by inheriting from 'Roles' library, struct Role

  // In the constructor make the address that deploys this contract the 1st retailer
  constructor() public {
    
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyRetailer() {
    
    _;
  }

  // Define a function 'isRetailer' to check this role
  function isRetailer(address account) public view returns (bool) {
    
  }

  // Define a function 'addRetailer' that adds this role
  function addRetailer(address account) public onlyRetailer {
    
  }

}