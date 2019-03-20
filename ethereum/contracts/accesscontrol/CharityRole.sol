pragma solidity ^0.4.24;

// Import the library 'Roles'
import "./Roles.sol";

// TODO - use this as the boilerplate for owner, charity, lottery, donor role files
// TODO - check requirements and explanation for each directory: https://classroom.udacity.com/nanodegrees/nd1309-beta/parts/03713f8a-c233-479e-9105-9809fb260489/modules/b32541ea-7b86-4689-b42a-7ba8c2689905/lessons/da5331bc-e6ae-4372-b18a-71fa7cc77b67/concepts/25b82382-c290-4289-8ac5-d948aad0a349


// Define a contract 'CharityRole' to manage this role - checks if address is parent contracts charity
contract CharityRole {

  function isCharity(address _sender, address _charity) private view returns (bool){
    bool isCharity = false;

    if(_sender == _charity){
      isCharity = true;
    }

    return isCharity;
  }

  // isNotCharity

}