const abi = [
  {
    "contractName": "Share",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "isLottery",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "payout",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isCharity",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
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
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
          {
            "name": "",
            "type": "bool"
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
        "constant": true,
        "inputs": [],
        "name": "getLottery",
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
        "constant": true,
        "inputs": [],
        "name": "getCharity",
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
        "constant": false,
        "inputs": [
          {
            "name": "_lottery",
            "type": "address"
          }
        ],
        "name": "setLottery",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_charity",
            "type": "address"
          }
        ],
        "name": "setCharity",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
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
    ],
    "bytecode": "0x608060405260008060146101000a81548160ff0219169083151502179055506000600260146101000a81548160ff0219169083151502179055506000600460146101000a81548160ff0219169083151502179055506000600760146101000a81548160ff021916908315150217905550600160085534801561008057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061120d806101936000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806325698d89146100e0578063392e53cd1461010f57806340ea0a941461013e57806363bd1d4a146101485780636d7932d1146101525780637b641baf14610181578063893d20e8146101d75780638f32d59b1461022e57806395af60d51461025d5780639afb3dc114610288578063b650d1f9146103b1578063cbc2cce714610434578063d6f5ef0e1461048b578063f298083b146104e2578063fb6f71a314610518575b600080fd5b3480156100ec57600080fd5b506100f561054e565b604051808215151515815260200191505060405180910390f35b34801561011b57600080fd5b506101246105a6565b604051808215151515815260200191505060405180910390f35b6101466105d0565b005b610150610a22565b005b34801561015e57600080fd5b50610167610ab7565b604051808215151515815260200191505060405180910390f35b6101d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b0f565b005b3480156101e357600080fd5b506101ec610c46565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023a57600080fd5b50610243610c82565b604051808215151515815260200191505060405180910390f35b34801561026957600080fd5b50610272610cd9565b6040518082815260200191505060405180910390f35b34801561029457600080fd5b506102b360048036038101908080359060200190929190505050610d3f565b604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001995050505050505050505060405180910390f35b3480156103bd57600080fd5b506103f2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044057600080fd5b50610449610fde565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561049757600080fd5b506104a061101b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610516600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611058565b005b61054c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110ca565b005b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60006105b0610c82565b15156105bb57600080fd5b600760149054906101000a900460ff16905090565b6000806000806105de610c82565b1515156105ea57600080fd5b6105f2610ab7565b1515156105fe57600080fd5b61060661054e565b15151561061257600080fd5b60011515600760149054906101000a900460ff16151514151561063457600080fd5b3493506064605f850281151561064657fe5b04925060646004850281151561065857fe5b04915060646001850281151561066a57fe5b049050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156106d5573d6000803e3d6000fd5b50600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561073e573d6000803e3d6000fd5b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156107a7573d6000803e3d6000fd5b5061012060405190810160405280600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001828152602001600854815250600a6000600854815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a0820151816005015560c0820151816006015560e08201518160070155610100820151816008015590505060016008540160088190555050505050565b610a2a610c82565b1515610a3557600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610ab4573d6000803e3d6000fd5b50565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610b17610c82565b1515610b2257600080fd5b60001515600760149054906101000a900460ff161515141515610b4457600080fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b8e82611058565b610b96610fde565b600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610bdf816110ca565b610be761101b565b600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600760146101000a81548160ff0219169083151502179055505050565b6000610c50610c82565b1515610c5b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d3757600080fd5b600854905090565b6000806000806000806000806000610d5561113c565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610db157600080fd5b600a60008c815260200190815260200160002061012060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e00151886101000151995099509950995099509950995099509950509193959799909294969850565b60096020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610fe8610c82565b1515610ff357600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611025610c82565b151561103057600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611060610c82565b151561106b57600080fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460146101000a81548160ff02191690831515021790555050565b6110d2610c82565b15156110dd57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff02191690831515021790555050565b61012060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815250905600a165627a7a723058203de3ae63dd0eb3f9c5ba25a3aeacee0ffc3d5237c3bef68e270158c95f38b87f0029",
    "deployedBytecode": "0x6080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806325698d89146100e0578063392e53cd1461010f57806340ea0a941461013e57806363bd1d4a146101485780636d7932d1146101525780637b641baf14610181578063893d20e8146101d75780638f32d59b1461022e57806395af60d51461025d5780639afb3dc114610288578063b650d1f9146103b1578063cbc2cce714610434578063d6f5ef0e1461048b578063f298083b146104e2578063fb6f71a314610518575b600080fd5b3480156100ec57600080fd5b506100f561054e565b604051808215151515815260200191505060405180910390f35b34801561011b57600080fd5b506101246105a6565b604051808215151515815260200191505060405180910390f35b6101466105d0565b005b610150610a22565b005b34801561015e57600080fd5b50610167610ab7565b604051808215151515815260200191505060405180910390f35b6101d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b0f565b005b3480156101e357600080fd5b506101ec610c46565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023a57600080fd5b50610243610c82565b604051808215151515815260200191505060405180910390f35b34801561026957600080fd5b50610272610cd9565b6040518082815260200191505060405180910390f35b34801561029457600080fd5b506102b360048036038101908080359060200190929190505050610d3f565b604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001995050505050505050505060405180910390f35b3480156103bd57600080fd5b506103f2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044057600080fd5b50610449610fde565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561049757600080fd5b506104a061101b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610516600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611058565b005b61054c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110ca565b005b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60006105b0610c82565b15156105bb57600080fd5b600760149054906101000a900460ff16905090565b6000806000806105de610c82565b1515156105ea57600080fd5b6105f2610ab7565b1515156105fe57600080fd5b61060661054e565b15151561061257600080fd5b60011515600760149054906101000a900460ff16151514151561063457600080fd5b3493506064605f850281151561064657fe5b04925060646004850281151561065857fe5b04915060646001850281151561066a57fe5b049050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156106d5573d6000803e3d6000fd5b50600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561073e573d6000803e3d6000fd5b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156107a7573d6000803e3d6000fd5b5061012060405190810160405280600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001828152602001600854815250600a6000600854815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a0820151816005015560c0820151816006015560e08201518160070155610100820151816008015590505060016008540160088190555050505050565b610a2a610c82565b1515610a3557600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610ab4573d6000803e3d6000fd5b50565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610b17610c82565b1515610b2257600080fd5b60001515600760149054906101000a900460ff161515141515610b4457600080fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b8e82611058565b610b96610fde565b600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610bdf816110ca565b610be761101b565b600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600760146101000a81548160ff0219169083151502179055505050565b6000610c50610c82565b1515610c5b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d3757600080fd5b600854905090565b6000806000806000806000806000610d5561113c565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610db157600080fd5b600a60008c815260200190815260200160002061012060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e00151886101000151995099509950995099509950995099509950509193959799909294969850565b60096020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610fe8610c82565b1515610ff357600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000611025610c82565b151561103057600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611060610c82565b151561106b57600080fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460146101000a81548160ff02191690831515021790555050565b6110d2610c82565b15156110dd57600080fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff02191690831515021790555050565b61012060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815250905600a165627a7a723058203de3ae63dd0eb3f9c5ba25a3aeacee0ffc3d5237c3bef68e270158c95f38b87f0029",
    "sourceMap": "211:5691:1:-;;;275:5:5;248:32;;;;;;;;;;;;;;;;;;;;712:5:2;685:32;;;;;;;;;;;;;;;;;;;;332:5:3;305:32;;;;;;;;;;;;;;;;;;;;386:5:1;359:32;;;;;;;;;;;;;;;;;;;;465:1;439:27;;624:58;8:9:-1;5:2;;;30:1;27;20:12;5:2;624:58:1;331:10:5;323:5;;:18;;;;;;;;;;;;;;;;;;807:10:2;799:5;;:18;;;;;;;;;;;;;;;;;;435:10:3;427:5;;:18;;;;;;;;;;;;;;;;;;664:10:1;656:5;;:18;;;;;;;;;;;;;;;;;;211:5691;;;;;;",
    "deployedSourceMap": "211:5691:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;946:94:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;946:94:3;;;;;;;;;;;;;;;;;;;;;;;;;;;5800:97:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5800:97:1;;;;;;;;;;;;;;;;;;;;;;;;;;;3751:1136;;;;;;1048:98:3;;;;;;1268:90:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1268:90:2;;;;;;;;;;;;;;;;;;;;;;;;;;;2896:698:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;357:91:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;357:91:5;;;;;;;;;;;;;;;;;;;;;;;;;;;673;;8:9:-1;5:2;;;30:1;27;20:12;5:2;673:91:5;;;;;;;;;;;;;;;;;;;;;;;;;;;4895:231:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4895:231:1;;;;;;;;;;;;;;;;;;;;;;;5134:658;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5134:658:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2176:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2176:49:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;638:94:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;638:94:3;;;;;;;;;;;;;;;;;;;;;;;;;;;990:92:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;990:92:2;;;;;;;;;;;;;;;;;;;;;;;;;;;461:169:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;829:155:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;946:94:3;988:4;1025:7;;;;;;;;;;;1011:21;;:10;:21;;;1004:28;;946:94;:::o;5800:97:1:-;5855:4;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;5878:11:1;;;;;;;;;;;5871:18;;5800:97;:::o;3751:1136::-;4143:11;4177:18;4226;4274:16;568:9:5;:7;:9::i;:::-;567:10;559:19;;;;;;;;1236:11:2;:9;:11::i;:::-;1235:12;1227:21;;;;;;;;906:11:3;:9;:11::i;:::-;905:12;897:21;;;;;;;;3943:4:1;3928:19;;:11;;;;;;;;;;;:19;;;3920:28;;;;;;;;4157:9;4143:23;;4212:3;4207:2;4198:6;:11;:17;;;;;;;;4177:38;;4260:3;4256:1;4247:6;:10;:16;;;;;;;;4226:37;;4306:3;4302:1;4293:6;:10;:16;;;;;;;;4274:35;;4431:7;;;;;;;;;;;:16;;:31;4448:13;4431:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4431:31:1;4473:7;;;;;;;;;;;:16;;:31;4490:13;4473:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4473:31:1;4603:5;;;;;;;;;;;:14;;:27;4618:11;4603:27;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4603:27:1;4699:108;;;;;;;;;4708:5;;;;;;;;;;;4699:108;;;;;;4715:7;;;;;;;;;;;4699:108;;;;;;4724:7;;;;;;;;;;;4699:108;;;;;;4733:10;4699:108;;;;;;4745:6;4699:108;;;;4753:13;4699:108;;;;4768:13;4699:108;;;;4783:11;4699:108;;;;4796:10;;4699:108;;;4675:9;:21;4685:10;;4675:21;;;;;;;;;;;:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4878:1;4865:10;;:14;4852:10;:27;;;;3751:1136;;;;:::o;1048:98:3:-;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;1101:5:3;;;;;;;;;;;:14;;:37;1124:4;1116:21;;;1101:37;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1101:37:3;1048:98::o;1268:90:2:-;1310:4;1345:7;;;;;;;;;;;1331:21;;:10;:21;;;1324:28;;1268:90;:::o;2896:698:1:-;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;3018:5:1;3003:20;;:11;;;;;;;;;;;:20;;;2995:29;;;;;;;;3229:8;3219:7;;:18;;;;;;;;;;;;;;;;;;3308:20;3319:8;3308:10;:20::i;:::-;3384:12;:10;:12::i;:::-;3374:7;;:22;;;;;;;;;;;;;;;;;;3467:20;3478:8;3467:10;:20::i;:::-;3543:12;:10;:12::i;:::-;3533:7;;:22;;;;;;;;;;;;;;;;;;3582:4;3568:11;;:18;;;;;;;;;;;;;;;;;;2896:698;;:::o;357:91:5:-;408:7;493:9;:7;:9::i;:::-;485:18;;;;;;;;435:5;;;;;;;;;;;428:12;;357:91;:::o;673:::-;713:4;751:5;;;;;;;;;;;737:19;;:10;:19;;;730:26;;673:91;:::o;4895:231:1:-;4943:4;5082:5;;;;;;;;;;;5068:19;;:10;:19;;;5060:28;;;;;;;;5108:10;;5101:17;;4895:231;:::o;5134:658::-;5188:13;5212:15;5238;5264:13;5288:11;5310:18;5339;5368:16;5395:7;5556:24;;:::i;:::-;5537:5;;;;;;;;;;;5523:19;;:10;:19;;;5515:28;;;;;;;;5583:9;:14;5593:3;5583:14;;;;;;;;;;;5556:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5617:8;:14;;;5633:8;:16;;;5651:8;:16;;;5669:8;:14;;;5685:8;:15;;;5702:8;:22;;;5726:8;:22;;;5750:8;:20;;;5772:8;:11;;;5608:176;;;;;;;;;;;;;;;;;;5134:658;;;;;;;;;;;;:::o;2176:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;638:94:3:-;691:7;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;717:7:3;;;;;;;;;;;710:14;;638:94;:::o;990:92:2:-;1043:7;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;1067:7:2;;;;;;;;;;;1060:14;;990:92;:::o;461:169:3:-;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;585:8:3;575:7;;:18;;;;;;;;;;;;;;;;;;618:4;604:11;;:18;;;;;;;;;;;;;;;;;;461:169;:::o;829:155:2:-;493:9:5;:7;:9::i;:::-;485:18;;;;;;;;945:8:2;935:7;;:18;;;;;;;;;;;;;;;;;;974:4;960:11;;:18;;;;;;;;;;;;;;;;;;829:155;:::o;211:5691:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.4.23;\r\n// add all imports for user privileges here\r\n\r\n// actor contracts\r\nimport \"./accesscontrol/CharityRole.sol\";\r\nimport \"./core/Ownable.sol\";\r\nimport \"./accesscontrol/LotteryRole.sol\";\r\n\r\ncontract Share is Ownable, CharityRole, LotteryRole{\r\n\r\n    address private Owner;\r\n    address private Lottery;\r\n    address private Charity;\r\n    bool private initialized = false;\r\n\r\n    // assigns an ID to each donation\r\n    uint private donationID = 1;\r\n\r\n    /// @notice sets the owner to the Owner variable upon contract init\r\n    /// @dev can be expanded to account for many more constructor features\r\n    constructor() public {\r\n        Owner = msg.sender;\r\n    }\r\n\r\n    /// @notice Contains the stucture of the star metadata\r\n    /// @dev key of structure is the provided transaction hash, will be donationId in v2.0\r\n    /// @param owner address, contains the address of the contract owner\r\n    /// @param lottery address, contains the address of the lottery - ether account for v1.0, contract for v2.0\r\n    /// @param charity address, contains the address of the charity - an ether account for v1.0 and v2.0\r\n    /// @param donor address, contains the address of the contract owner - ether account always\r\n    /// @param amount uint, contains the original amount donated - all amounts are after gas\r\n    /// @param charityAmount, contains the remaining 95% of original amount sent to charity\r\n    /// @param lotteryAmount uint, contains the 4% of original amount sent to lottery\r\n    /// @param ownerAmount, contains the 1% of original amount sent to owner\r\n    /// @param id, contains the value of the last submitted donation - is returned to ui\r\n    // TODO - refactor all data handling, updating, and transfer to a data management contract in the future\r\n    struct Donation {\r\n        address owner;\r\n        address lottery;\r\n        address charity;\r\n        address donor;\r\n        uint amount;\r\n        uint charityAmount;\r\n        uint lotteryAmount;\r\n        uint ownerAmount;\r\n        uint id;\r\n    }\r\n\r\n    /// @notice Contains the mapping for the lottery entrees\r\n    /// @dev\r\n    /// @param donor address, will be expanded for v2.0\r\n\r\n    mapping(address => address) public lotteryEntrees;\r\n\r\n    /// @notice Contains the mapping for donation data\r\n    /// @dev key of structure is the transactionHash, in v2.0 a donationId will be introduced\r\n    /// @param Donation structure, contains donation metadata\r\n\r\n    mapping(uint => Donation) private Donations;\r\n\r\n    /// @notice Initiates the contract once deployed, only available to owner\r\n    /// @dev Need to test the syntax here, unsure the require function works\r\n    /// @param _lottery address, contains the ethereum public key for lottery account\r\n    /// @param _charity address, contains the ethereum public key for charity account\r\n\r\n    // TODO - this logic must also include the new contract\r\n    function initiateContract(address _lottery, address _charity) onlyOwner public payable{\r\n\r\n        require(initialized == false);\r\n\r\n        // TODO - this logic must add the smart contract address for CharityRole\r\n        // TODO - ei - Charity = CharityRole(_charity) - argument must contain address of contract\r\n        Lottery = _lottery;\r\n\r\n        // sets the charity for the charityRole contract\r\n        setLottery(_lottery);\r\n\r\n        // gets charity address\r\n        Lottery = getLottery();\r\n\r\n        // sets the charity for the charityRole contract\r\n        setCharity(_charity);\r\n\r\n        // gets charity address\r\n        Charity = getCharity();\r\n\r\n        initialized = true;\r\n    }\r\n\r\n    /// @notice parent function for all contract functionality\r\n    /// @dev Should consider splitting this out further if necessary by reviewers\r\n\r\n    function makeDonation() notOwner notCharity notLottery public payable{\r\n        // owner, charity, and lottery accounts cannot utilize the handleFunds function\r\n        require(initialized == true);\r\n\r\n        // creates the amount variable, used to set the amount later on in this function\r\n        // these math. functions can be move to the API to avoid gas cost for calculations\r\n        uint amount = msg.value;\r\n        uint charityAmount = amount * 95 / 100;\r\n        uint lotteryAmount = amount * 4 / 100;\r\n        uint ownerAmount = amount * 1 / 100;\r\n\r\n        // TODO - these can be refactored to ownable, since it utilizes the transfer of ownership principle\r\n        Charity.transfer(charityAmount);\r\n        Lottery.transfer(lotteryAmount);\r\n\r\n        // dispatches remaining funds to owner, this ensures that all gas is covered\r\n        Owner.transfer(ownerAmount);\r\n\r\n        // stores all the data\r\n        Donations[donationID] = Donation(Owner, Lottery, Charity, msg.sender, amount, charityAmount, lotteryAmount, ownerAmount, donationID);\r\n\r\n        // updates donationID;\r\n        donationID = donationID + 1;\r\n    }\r\n\r\n    function fetchDonationID() public view returns (uint){\r\n\r\n        // requires the owner to call this function, only owner address can access donationID atm\r\n        require(msg.sender == Owner);\r\n\r\n        return donationID;\r\n    }\r\n\r\n    function fetchDonation(uint _id) public view returns (address owner,\r\n        address lottery,\r\n        address charity,\r\n        address donor,\r\n        uint amount,\r\n        uint charityAmount,\r\n        uint lotteryAmount,\r\n        uint ownerAmount,\r\n        uint id){\r\n\r\n        // requires the owner to call this function, only owner address can access donationID atm\r\n        require(msg.sender == Owner);\r\n\r\n        Donation memory donation = Donations[_id];\r\n        return ( donation.owner, donation.lottery, donation.charity, donation.donor, donation.amount, donation.charityAmount, donation.lotteryAmount, donation.ownerAmount, donation.id);\r\n    }\r\n\r\n    function isInitialized() onlyOwner public view returns(bool){\r\n        return initialized;\r\n    }\r\n\r\n}\r\n\r\n",
    "sourcePath": "D:\\Documents\\School\\Share\\ethereum\\contracts\\Share.sol",
    "ast": {
      "absolutePath": "/D/Documents/School/Share/ethereum/contracts/Share.sol",
      "exportedSymbols": {
        "Share": [
          326
        ]
      },
      "id": 327,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".23"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/accesscontrol/CharityRole.sol",
          "file": "./accesscontrol/CharityRole.sol",
          "id": 59,
          "nodeType": "ImportDirective",
          "scope": 327,
          "sourceUnit": 420,
          "src": "93:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/core/Ownable.sol",
          "file": "./core/Ownable.sol",
          "id": 60,
          "nodeType": "ImportDirective",
          "scope": 327,
          "sourceUnit": 618,
          "src": "136:28:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/accesscontrol/LotteryRole.sol",
          "file": "./accesscontrol/LotteryRole.sol",
          "id": 61,
          "nodeType": "ImportDirective",
          "scope": 327,
          "sourceUnit": 513,
          "src": "166:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 62,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 617,
                "src": "229:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$617",
                  "typeString": "contract Ownable"
                }
              },
              "id": 63,
              "nodeType": "InheritanceSpecifier",
              "src": "229:7:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 64,
                "name": "CharityRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 419,
                "src": "238:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_CharityRole_$419",
                  "typeString": "contract CharityRole"
                }
              },
              "id": 65,
              "nodeType": "InheritanceSpecifier",
              "src": "238:11:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 66,
                "name": "LotteryRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 512,
                "src": "251:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_LotteryRole_$512",
                  "typeString": "contract LotteryRole"
                }
              },
              "id": 67,
              "nodeType": "InheritanceSpecifier",
              "src": "251:11:1"
            }
          ],
          "contractDependencies": [
            419,
            512,
            617
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 326,
          "linearizedBaseContracts": [
            326,
            512,
            419,
            617
          ],
          "name": "Share",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 69,
              "name": "Owner",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "271:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 68,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "271:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 71,
              "name": "Lottery",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "299:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 70,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "299:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 73,
              "name": "Charity",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "329:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 72,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "329:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 76,
              "name": "initialized",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "359:32:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 74,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "359:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "66616c7365",
                "id": 75,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "386:5:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "value": "false"
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 79,
              "name": "donationID",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "439:27:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 77,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "439:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "31",
                "id": 78,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "465:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 87,
                "nodeType": "Block",
                "src": "645:37:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "656:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 632,
                          "src": "664:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 84,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "664:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "656:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 86,
                    "nodeType": "ExpressionStatement",
                    "src": "656:18:1"
                  }
                ]
              },
              "documentation": "@dev can be expanded to account for many more constructor features",
              "id": 88,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 80,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "635:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 81,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "645:0:1"
              },
              "scope": 326,
              "src": "624:58:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "canonicalName": "Share.Donation",
              "id": 107,
              "members": [
                {
                  "constant": false,
                  "id": 90,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1811:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1811:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92,
                  "name": "lottery",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1835:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1835:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "name": "charity",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1861:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 96,
                  "name": "donor",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1887:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 98,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1911:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 97,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1911:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 100,
                  "name": "charityAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1933:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1933:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 102,
                  "name": "lotteryAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1962:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1962:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 104,
                  "name": "ownerAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1991:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1991:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "2018:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2018:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Donation",
              "nodeType": "StructDefinition",
              "scope": 326,
              "src": "1784:249:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 111,
              "name": "lotteryEntrees",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "2176:49:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "typeName": {
                "id": 110,
                "keyType": {
                  "id": 108,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2184:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "2176:27:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                  "typeString": "mapping(address => address)"
                },
                "valueType": {
                  "id": 109,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2195:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 115,
              "name": "Donations",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "2450:43:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                "typeString": "mapping(uint256 => struct Share.Donation)"
              },
              "typeName": {
                "id": 114,
                "keyType": {
                  "id": 112,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "2458:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "2450:25:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                  "typeString": "mapping(uint256 => struct Share.Donation)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 113,
                  "name": "Donation",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 107,
                  "src": "2466:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Donation_$107_storage_ptr",
                    "typeString": "struct Share.Donation"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 156,
                "nodeType": "Block",
                "src": "2982:612:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 125,
                            "name": "initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "3003:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3018:5:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "3003:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 124,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "2995:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2995:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 129,
                    "nodeType": "ExpressionStatement",
                    "src": "2995:29:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 130,
                        "name": "Lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "3219:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 131,
                        "name": "_lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "3229:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3219:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 133,
                    "nodeType": "ExpressionStatement",
                    "src": "3219:18:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 135,
                          "name": "_lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117,
                          "src": "3319:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 134,
                        "name": "setLottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 456,
                        "src": "3308:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 136,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3308:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 137,
                    "nodeType": "ExpressionStatement",
                    "src": "3308:20:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "Lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "3374:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 139,
                          "name": "getLottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 466,
                          "src": "3384:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3384:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3374:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 142,
                    "nodeType": "ExpressionStatement",
                    "src": "3374:22:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "_charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119,
                          "src": "3478:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 143,
                        "name": "setCharity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 363,
                        "src": "3467:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3467:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 146,
                    "nodeType": "ExpressionStatement",
                    "src": "3467:20:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "Charity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 73,
                        "src": "3533:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 148,
                          "name": "getCharity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 373,
                          "src": "3543:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 149,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3543:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3533:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 151,
                    "nodeType": "ExpressionStatement",
                    "src": "3533:22:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "3568:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3582:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "3568:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 155,
                    "nodeType": "ExpressionStatement",
                    "src": "3568:18:1"
                  }
                ]
              },
              "documentation": "@param _charity address, contains the ethereum public key for charity account",
              "id": 157,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 122,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 121,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 580,
                    "src": "2958:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2958:9:1"
                }
              ],
              "name": "initiateContract",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 120,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 117,
                    "name": "_lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 157,
                    "src": "2922:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 116,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2922:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 119,
                    "name": "_charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 157,
                    "src": "2940:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 118,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2940:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2921:36:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 123,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2982:0:1"
              },
              "scope": 326,
              "src": "2896:698:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 242,
                "nodeType": "Block",
                "src": "3820:1067:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "3928:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3943:4:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3928:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 166,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "3920:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3920:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 171,
                    "nodeType": "ExpressionStatement",
                    "src": "3920:28:1"
                  },
                  {
                    "assignments": [
                      173
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 173,
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4143:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 172,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4143:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 176,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 632,
                        "src": "4157:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4157:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4143:23:1"
                  },
                  {
                    "assignments": [
                      178
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 178,
                        "name": "charityAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4177:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 177,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4177:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 184,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "4198:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3935",
                          "id": 180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4207:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_95_by_1",
                            "typeString": "int_const 95"
                          },
                          "value": "95"
                        },
                        "src": "4198:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4212:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4198:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4177:38:1"
                  },
                  {
                    "assignments": [
                      186
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 186,
                        "name": "lotteryAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4226:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 185,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4226:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 192,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 187,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "4247:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "34",
                          "id": 188,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4256:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4_by_1",
                            "typeString": "int_const 4"
                          },
                          "value": "4"
                        },
                        "src": "4247:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4260:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4247:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4226:37:1"
                  },
                  {
                    "assignments": [
                      194
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 194,
                        "name": "ownerAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4274:16:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 193,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4274:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 200,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 195,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "4293:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 196,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4302:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "4293:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4306:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4293:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4274:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 204,
                          "name": "charityAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "4448:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 201,
                          "name": "Charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "4431:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4431:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4431:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 206,
                    "nodeType": "ExpressionStatement",
                    "src": "4431:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 210,
                          "name": "lotteryAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "4490:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 207,
                          "name": "Lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "4473:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4473:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4473:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 212,
                    "nodeType": "ExpressionStatement",
                    "src": "4473:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 216,
                          "name": "ownerAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 194,
                          "src": "4618:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 213,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "4603:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4603:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4603:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 218,
                    "nodeType": "ExpressionStatement",
                    "src": "4603:27:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 219,
                          "name": "Donations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "4675:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                            "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                          }
                        },
                        "id": 221,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "4685:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4675:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$107_storage",
                          "typeString": "struct Share.Donation storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 223,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "4708:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 224,
                            "name": "Lottery",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "4715:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 225,
                            "name": "Charity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "4724:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 226,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "4733:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4733:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 228,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "4745:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 229,
                            "name": "charityAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 178,
                            "src": "4753:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "lotteryAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "4768:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 231,
                            "name": "ownerAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "4783:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 232,
                            "name": "donationID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "4796:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 222,
                          "name": "Donation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 107,
                          "src": "4699:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Donation_$107_storage_ptr_$",
                            "typeString": "type(struct Share.Donation storage pointer)"
                          }
                        },
                        "id": 233,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4699:108:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$107_memory",
                          "typeString": "struct Share.Donation memory"
                        }
                      },
                      "src": "4675:132:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$107_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "id": 235,
                    "nodeType": "ExpressionStatement",
                    "src": "4675:132:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 236,
                        "name": "donationID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "4852:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 237,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "4865:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4878:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "4865:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4852:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 241,
                    "nodeType": "ExpressionStatement",
                    "src": "4852:27:1"
                  }
                ]
              },
              "documentation": "@dev Should consider splitting this out further if necessary by reviewers",
              "id": 243,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 160,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 159,
                    "name": "notOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 590,
                    "src": "3775:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3775:8:1"
                },
                {
                  "arguments": null,
                  "id": 162,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 161,
                    "name": "notCharity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 392,
                    "src": "3784:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3784:10:1"
                },
                {
                  "arguments": null,
                  "id": 164,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 163,
                    "name": "notLottery",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 485,
                    "src": "3795:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3795:10:1"
                }
              ],
              "name": "makeDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 158,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3772:2:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 165,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3820:0:1"
              },
              "scope": 326,
              "src": "3751:1136:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 257,
                "nodeType": "Block",
                "src": "4948:178:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 249,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "5068:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5068:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 251,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "5082:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5068:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 248,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "5060:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5060:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 254,
                    "nodeType": "ExpressionStatement",
                    "src": "5060:28:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 255,
                      "name": "donationID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "5108:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 247,
                    "id": 256,
                    "nodeType": "Return",
                    "src": "5101:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 258,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonationID",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 244,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4919:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 247,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 246,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 258,
                    "src": "4943:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 245,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "4943:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4942:6:1"
              },
              "scope": 326,
              "src": "4895:231:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 314,
                "nodeType": "Block",
                "src": "5403:389:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 282,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "5523:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5523:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 284,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "5537:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5523:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 281,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "5515:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5515:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 287,
                    "nodeType": "ExpressionStatement",
                    "src": "5515:28:1"
                  },
                  {
                    "assignments": [
                      289
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 289,
                        "name": "donation",
                        "nodeType": "VariableDeclaration",
                        "scope": 315,
                        "src": "5556:24:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                          "typeString": "struct Share.Donation"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 288,
                          "name": "Donation",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 107,
                          "src": "5556:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Donation_$107_storage_ptr",
                            "typeString": "struct Share.Donation"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 293,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 290,
                        "name": "Donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "5583:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                          "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                        }
                      },
                      "id": 292,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 291,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "5593:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5583:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$107_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5556:41:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5617:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 90,
                          "src": "5617:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 296,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5633:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 297,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lottery",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 92,
                          "src": "5633:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 298,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5651:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 299,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 94,
                          "src": "5651:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 300,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5669:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 301,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "donor",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 96,
                          "src": "5669:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 302,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5685:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 303,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 98,
                          "src": "5685:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 304,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5702:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 305,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charityAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 100,
                          "src": "5702:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 306,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5726:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 307,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lotteryAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 102,
                          "src": "5726:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 308,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5750:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 309,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "ownerAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 104,
                          "src": "5750:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 310,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5772:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 311,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 106,
                          "src": "5772:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 312,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5615:169:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "functionReturnParameters": 280,
                    "id": 313,
                    "nodeType": "Return",
                    "src": "5608:176:1"
                  }
                ]
              },
              "documentation": null,
              "id": 315,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 261,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 260,
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5157:8:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 259,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5157:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5156:10:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 280,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 263,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5188:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 262,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5188:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 265,
                    "name": "lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5212:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 264,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5212:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 267,
                    "name": "charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5238:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5238:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 269,
                    "name": "donor",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5264:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 268,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5264:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 271,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5288:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 270,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5288:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 273,
                    "name": "charityAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5310:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 272,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5310:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 275,
                    "name": "lotteryAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5339:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 274,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5339:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 277,
                    "name": "ownerAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5368:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 276,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5368:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 279,
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5395:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 278,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5395:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5187:216:1"
              },
              "scope": 326,
              "src": "5134:658:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 324,
                "nodeType": "Block",
                "src": "5860:37:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 322,
                      "name": "initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "5878:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 321,
                    "id": 323,
                    "nodeType": "Return",
                    "src": "5871:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 325,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 318,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 317,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 580,
                    "src": "5825:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "5825:9:1"
                }
              ],
              "name": "isInitialized",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 316,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5822:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 321,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 320,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 325,
                    "src": "5855:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 319,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "5855:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5854:6:1"
              },
              "scope": 326,
              "src": "5800:97:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 327,
          "src": "211:5691:1"
        }
      ],
      "src": "0:5906:1"
    },
    "legacyAST": {
      "absolutePath": "/D/Documents/School/Share/ethereum/contracts/Share.sol",
      "exportedSymbols": {
        "Share": [
          326
        ]
      },
      "id": 327,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".23"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/accesscontrol/CharityRole.sol",
          "file": "./accesscontrol/CharityRole.sol",
          "id": 59,
          "nodeType": "ImportDirective",
          "scope": 327,
          "sourceUnit": 420,
          "src": "93:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/core/Ownable.sol",
          "file": "./core/Ownable.sol",
          "id": 60,
          "nodeType": "ImportDirective",
          "scope": 327,
          "sourceUnit": 618,
          "src": "136:28:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/accesscontrol/LotteryRole.sol",
          "file": "./accesscontrol/LotteryRole.sol",
          "id": 61,
          "nodeType": "ImportDirective",
          "scope": 327,
          "sourceUnit": 513,
          "src": "166:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 62,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 617,
                "src": "229:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$617",
                  "typeString": "contract Ownable"
                }
              },
              "id": 63,
              "nodeType": "InheritanceSpecifier",
              "src": "229:7:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 64,
                "name": "CharityRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 419,
                "src": "238:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_CharityRole_$419",
                  "typeString": "contract CharityRole"
                }
              },
              "id": 65,
              "nodeType": "InheritanceSpecifier",
              "src": "238:11:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 66,
                "name": "LotteryRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 512,
                "src": "251:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_LotteryRole_$512",
                  "typeString": "contract LotteryRole"
                }
              },
              "id": 67,
              "nodeType": "InheritanceSpecifier",
              "src": "251:11:1"
            }
          ],
          "contractDependencies": [
            419,
            512,
            617
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 326,
          "linearizedBaseContracts": [
            326,
            512,
            419,
            617
          ],
          "name": "Share",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 69,
              "name": "Owner",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "271:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 68,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "271:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 71,
              "name": "Lottery",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "299:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 70,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "299:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 73,
              "name": "Charity",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "329:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 72,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "329:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 76,
              "name": "initialized",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "359:32:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 74,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "359:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "66616c7365",
                "id": 75,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "386:5:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "value": "false"
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 79,
              "name": "donationID",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "439:27:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 77,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "439:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "31",
                "id": 78,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "465:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 87,
                "nodeType": "Block",
                "src": "645:37:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "656:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 83,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 632,
                          "src": "664:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 84,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "664:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "656:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 86,
                    "nodeType": "ExpressionStatement",
                    "src": "656:18:1"
                  }
                ]
              },
              "documentation": "@dev can be expanded to account for many more constructor features",
              "id": 88,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 80,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "635:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 81,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "645:0:1"
              },
              "scope": 326,
              "src": "624:58:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "canonicalName": "Share.Donation",
              "id": 107,
              "members": [
                {
                  "constant": false,
                  "id": 90,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1811:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1811:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92,
                  "name": "lottery",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1835:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1835:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "name": "charity",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1861:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 96,
                  "name": "donor",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1887:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 98,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1911:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 97,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1911:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 100,
                  "name": "charityAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1933:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1933:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 102,
                  "name": "lotteryAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1962:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1962:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 104,
                  "name": "ownerAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "1991:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1991:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "2018:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2018:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Donation",
              "nodeType": "StructDefinition",
              "scope": 326,
              "src": "1784:249:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 111,
              "name": "lotteryEntrees",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "2176:49:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "typeName": {
                "id": 110,
                "keyType": {
                  "id": 108,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2184:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "2176:27:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                  "typeString": "mapping(address => address)"
                },
                "valueType": {
                  "id": 109,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2195:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 115,
              "name": "Donations",
              "nodeType": "VariableDeclaration",
              "scope": 326,
              "src": "2450:43:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                "typeString": "mapping(uint256 => struct Share.Donation)"
              },
              "typeName": {
                "id": 114,
                "keyType": {
                  "id": 112,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "2458:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "2450:25:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                  "typeString": "mapping(uint256 => struct Share.Donation)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 113,
                  "name": "Donation",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 107,
                  "src": "2466:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Donation_$107_storage_ptr",
                    "typeString": "struct Share.Donation"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 156,
                "nodeType": "Block",
                "src": "2982:612:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 125,
                            "name": "initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "3003:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3018:5:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "3003:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 124,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "2995:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2995:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 129,
                    "nodeType": "ExpressionStatement",
                    "src": "2995:29:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 130,
                        "name": "Lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "3219:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 131,
                        "name": "_lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 117,
                        "src": "3229:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3219:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 133,
                    "nodeType": "ExpressionStatement",
                    "src": "3219:18:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 135,
                          "name": "_lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117,
                          "src": "3319:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 134,
                        "name": "setLottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 456,
                        "src": "3308:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 136,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3308:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 137,
                    "nodeType": "ExpressionStatement",
                    "src": "3308:20:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "Lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "3374:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 139,
                          "name": "getLottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 466,
                          "src": "3384:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3384:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3374:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 142,
                    "nodeType": "ExpressionStatement",
                    "src": "3374:22:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "_charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119,
                          "src": "3478:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 143,
                        "name": "setCharity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 363,
                        "src": "3467:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 145,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3467:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 146,
                    "nodeType": "ExpressionStatement",
                    "src": "3467:20:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "Charity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 73,
                        "src": "3533:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 148,
                          "name": "getCharity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 373,
                          "src": "3543:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 149,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3543:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3533:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 151,
                    "nodeType": "ExpressionStatement",
                    "src": "3533:22:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "3568:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3582:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "3568:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 155,
                    "nodeType": "ExpressionStatement",
                    "src": "3568:18:1"
                  }
                ]
              },
              "documentation": "@param _charity address, contains the ethereum public key for charity account",
              "id": 157,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 122,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 121,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 580,
                    "src": "2958:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2958:9:1"
                }
              ],
              "name": "initiateContract",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 120,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 117,
                    "name": "_lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 157,
                    "src": "2922:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 116,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2922:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 119,
                    "name": "_charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 157,
                    "src": "2940:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 118,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2940:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2921:36:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 123,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2982:0:1"
              },
              "scope": 326,
              "src": "2896:698:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 242,
                "nodeType": "Block",
                "src": "3820:1067:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "3928:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3943:4:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3928:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 166,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "3920:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3920:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 171,
                    "nodeType": "ExpressionStatement",
                    "src": "3920:28:1"
                  },
                  {
                    "assignments": [
                      173
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 173,
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4143:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 172,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4143:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 176,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 632,
                        "src": "4157:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 175,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4157:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4143:23:1"
                  },
                  {
                    "assignments": [
                      178
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 178,
                        "name": "charityAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4177:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 177,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4177:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 184,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 179,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "4198:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3935",
                          "id": 180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4207:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_95_by_1",
                            "typeString": "int_const 95"
                          },
                          "value": "95"
                        },
                        "src": "4198:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4212:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4198:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4177:38:1"
                  },
                  {
                    "assignments": [
                      186
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 186,
                        "name": "lotteryAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4226:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 185,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4226:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 192,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 187,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "4247:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "34",
                          "id": 188,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4256:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4_by_1",
                            "typeString": "int_const 4"
                          },
                          "value": "4"
                        },
                        "src": "4247:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4260:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4247:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4226:37:1"
                  },
                  {
                    "assignments": [
                      194
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 194,
                        "name": "ownerAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 243,
                        "src": "4274:16:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 193,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4274:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 200,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 195,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 173,
                          "src": "4293:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 196,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4302:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "4293:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4306:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4293:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4274:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 204,
                          "name": "charityAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "4448:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 201,
                          "name": "Charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 73,
                          "src": "4431:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4431:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4431:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 206,
                    "nodeType": "ExpressionStatement",
                    "src": "4431:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 210,
                          "name": "lotteryAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "4490:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 207,
                          "name": "Lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "4473:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4473:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4473:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 212,
                    "nodeType": "ExpressionStatement",
                    "src": "4473:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 216,
                          "name": "ownerAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 194,
                          "src": "4618:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 213,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "4603:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4603:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4603:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 218,
                    "nodeType": "ExpressionStatement",
                    "src": "4603:27:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 219,
                          "name": "Donations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "4675:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                            "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                          }
                        },
                        "id": 221,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "4685:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4675:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$107_storage",
                          "typeString": "struct Share.Donation storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 223,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "4708:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 224,
                            "name": "Lottery",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "4715:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 225,
                            "name": "Charity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "4724:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 226,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "4733:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4733:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 228,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 173,
                            "src": "4745:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 229,
                            "name": "charityAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 178,
                            "src": "4753:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "lotteryAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "4768:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 231,
                            "name": "ownerAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "4783:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 232,
                            "name": "donationID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "4796:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 222,
                          "name": "Donation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 107,
                          "src": "4699:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Donation_$107_storage_ptr_$",
                            "typeString": "type(struct Share.Donation storage pointer)"
                          }
                        },
                        "id": 233,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4699:108:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$107_memory",
                          "typeString": "struct Share.Donation memory"
                        }
                      },
                      "src": "4675:132:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$107_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "id": 235,
                    "nodeType": "ExpressionStatement",
                    "src": "4675:132:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 236,
                        "name": "donationID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "4852:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 237,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "4865:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4878:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "4865:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4852:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 241,
                    "nodeType": "ExpressionStatement",
                    "src": "4852:27:1"
                  }
                ]
              },
              "documentation": "@dev Should consider splitting this out further if necessary by reviewers",
              "id": 243,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 160,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 159,
                    "name": "notOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 590,
                    "src": "3775:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3775:8:1"
                },
                {
                  "arguments": null,
                  "id": 162,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 161,
                    "name": "notCharity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 392,
                    "src": "3784:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3784:10:1"
                },
                {
                  "arguments": null,
                  "id": 164,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 163,
                    "name": "notLottery",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 485,
                    "src": "3795:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3795:10:1"
                }
              ],
              "name": "makeDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 158,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3772:2:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 165,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3820:0:1"
              },
              "scope": 326,
              "src": "3751:1136:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 257,
                "nodeType": "Block",
                "src": "4948:178:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 249,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "5068:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5068:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 251,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "5082:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5068:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 248,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "5060:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5060:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 254,
                    "nodeType": "ExpressionStatement",
                    "src": "5060:28:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 255,
                      "name": "donationID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "5108:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 247,
                    "id": 256,
                    "nodeType": "Return",
                    "src": "5101:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 258,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonationID",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 244,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4919:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 247,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 246,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 258,
                    "src": "4943:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 245,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "4943:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4942:6:1"
              },
              "scope": 326,
              "src": "4895:231:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 314,
                "nodeType": "Block",
                "src": "5403:389:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 282,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 632,
                              "src": "5523:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5523:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 284,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "5537:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5523:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 281,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          635,
                          636
                        ],
                        "referencedDeclaration": 635,
                        "src": "5515:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5515:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 287,
                    "nodeType": "ExpressionStatement",
                    "src": "5515:28:1"
                  },
                  {
                    "assignments": [
                      289
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 289,
                        "name": "donation",
                        "nodeType": "VariableDeclaration",
                        "scope": 315,
                        "src": "5556:24:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                          "typeString": "struct Share.Donation"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 288,
                          "name": "Donation",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 107,
                          "src": "5556:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Donation_$107_storage_ptr",
                            "typeString": "struct Share.Donation"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 293,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 290,
                        "name": "Donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "5583:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$107_storage_$",
                          "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                        }
                      },
                      "id": 292,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 291,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "5593:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5583:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$107_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5556:41:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5617:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 90,
                          "src": "5617:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 296,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5633:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 297,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lottery",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 92,
                          "src": "5633:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 298,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5651:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 299,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 94,
                          "src": "5651:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 300,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5669:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 301,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "donor",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 96,
                          "src": "5669:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 302,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5685:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 303,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 98,
                          "src": "5685:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 304,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5702:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 305,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charityAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 100,
                          "src": "5702:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 306,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5726:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 307,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lotteryAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 102,
                          "src": "5726:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 308,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5750:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 309,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "ownerAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 104,
                          "src": "5750:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 310,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 289,
                            "src": "5772:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$107_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 311,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 106,
                          "src": "5772:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 312,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5615:169:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "functionReturnParameters": 280,
                    "id": 313,
                    "nodeType": "Return",
                    "src": "5608:176:1"
                  }
                ]
              },
              "documentation": null,
              "id": 315,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 261,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 260,
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5157:8:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 259,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5157:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5156:10:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 280,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 263,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5188:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 262,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5188:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 265,
                    "name": "lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5212:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 264,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5212:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 267,
                    "name": "charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5238:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5238:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 269,
                    "name": "donor",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5264:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 268,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5264:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 271,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5288:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 270,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5288:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 273,
                    "name": "charityAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5310:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 272,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5310:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 275,
                    "name": "lotteryAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5339:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 274,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5339:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 277,
                    "name": "ownerAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5368:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 276,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5368:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 279,
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "scope": 315,
                    "src": "5395:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 278,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5395:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5187:216:1"
              },
              "scope": 326,
              "src": "5134:658:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 324,
                "nodeType": "Block",
                "src": "5860:37:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 322,
                      "name": "initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "5878:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 321,
                    "id": 323,
                    "nodeType": "Return",
                    "src": "5871:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 325,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 318,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 317,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 580,
                    "src": "5825:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "5825:9:1"
                }
              ],
              "name": "isInitialized",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 316,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5822:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 321,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 320,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 325,
                    "src": "5855:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 319,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "5855:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5854:6:1"
              },
              "scope": 326,
              "src": "5800:97:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 327,
          "src": "211:5691:1"
        }
      ],
      "src": "0:5906:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
    },
    "networks": {
      "4": {
        "events": {},
        "links": {},
        "address": "0x02bc640a739b4315ab833d14d636a546f6a73fd1",
        "transactionHash": "0x43d83eaebd670b4946fd227a3826105f134afdb2757bc46ee5e2a4734714fd8f"
      }
    },
    "schemaVersion": "2.0.2",
    "updatedAt": "2019-03-22T03:07:42.958Z"
  }
];

module.exports = abi;
