const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "lotteryEntrees",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_ownable",
        "type": "address"
      },
      {
        "name": "_charityRole",
        "type": "address"
      },
      {
        "name": "_lotteryRole",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lottery",
        "type": "address"
      },
      {
        "name": "_charity",
        "type": "address"
      }
    ],
    "name": "initiateContract",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "makeDonation",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fetchDonationID",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "fetchDonation",
    "outputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "lottery",
        "type": "address"
      },
      {
        "name": "charity",
        "type": "address"
      },
      {
        "name": "donor",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "charityAmount",
        "type": "uint256"
      },
      {
        "name": "lotteryAmount",
        "type": "uint256"
      },
      {
        "name": "ownerAmount",
        "type": "uint256"
      },
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isInitialized",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

module.exports = abi;
