const abi = [
  {
    "contractName": "Share",
    "abi": [
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
    ],
    "bytecode": "0x60806040526000600260146101000a81548160ff021916908315150217905550600160065534801561003057600080fd5b50604051606080611661833981018060405281019080805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506114e58061017c6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063392e53cd1461007d57806340ea0a94146100ac5780637b641baf146100b657806395af60d51461010c5780639afb3dc114610137578063b650d1f914610260575b600080fd5b34801561008957600080fd5b506100926102e3565b604051808215151515815260200191505060405180910390f35b6100b46103fd565b005b61010a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa6565b005b34801561011857600080fd5b50610121611069565b6040518082815260200191505060405180910390f35b34801561014357600080fd5b50610162600480360381019080803590602001909291905050506110ce565b604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001995050505050505050505060405180910390f35b34801561026c57600080fd5b506102a1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156103a257600080fd5b505af11580156103b6573d6000803e3d6000fd5b505050506040513d60208110156103cc57600080fd5b810190808051906020019092919050505015156103e857600080fd5b600260149054906101000a900460ff16905090565b60008060008060011515600260149054906101000a900460ff16151514801561051b5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156104de57600080fd5b505af11580156104f2573d6000803e3d6000fd5b505050506040513d602081101561050857600080fd5b8101908080519060200190929190505050155b80156105e55750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636d7932d16040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156105a857600080fd5b505af11580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b8101908080519060200190929190505050155b80156106af5750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166325698d896040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561067257600080fd5b505af1158015610686573d6000803e3d6000fd5b505050506040513d602081101561069c57600080fd5b8101908080519060200190929190505050155b15156106ba57600080fd5b3493506064605f85028115156106cc57fe5b0492506064600485028115156106de57fe5b0491506064600185028115156106f057fe5b049050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015801561075b573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156107c4573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561082c573d6000803e3d6000fd5b50610120604051908101604052806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200182815260200160065481525060086000600654815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a0820151816005015560c0820151816006015560e08201518160070155610100820151816008015590505060016006540160068190555050505050565b60001515600260149054906101000a900460ff161515148015610bbd5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610b8157600080fd5b505af1158015610b95573d6000803e3d6000fd5b505050506040513d6020811015610bab57600080fd5b81019080805190602001909291905050505b1515610bc857600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166310ca8c8183336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b158015610cb957600080fd5b505af1158015610ccd573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631e88c9c0336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610d8e57600080fd5b505af1158015610da2573d6000803e3d6000fd5b505050506040513d6020811015610db857600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633fc7027782336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b158015610efa57600080fd5b505af1158015610f0e573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631bf230cd336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610fcf57600080fd5b505af1158015610fe3573d6000803e3d6000fd5b505050506040513d6020811015610ff957600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083151502179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110c657600080fd5b600654905090565b60008060008060008060008060006110e4611414565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156111a157600080fd5b505af11580156111b5573d6000803e3d6000fd5b505050506040513d60208110156111cb57600080fd5b810190808051906020019092919050505015156111e757600080fd5b600860008c815260200190815260200160002061012060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e00151886101000151995099509950995099509950995099509950509193959799909294969850565b60076020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61012060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815250905600a165627a7a72305820c7b51f216f9b5fad205e3e3693ca0f510cc98bbe56ef0ced5556056bd44205670029",
    "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063392e53cd1461007d57806340ea0a94146100ac5780637b641baf146100b657806395af60d51461010c5780639afb3dc114610137578063b650d1f914610260575b600080fd5b34801561008957600080fd5b506100926102e3565b604051808215151515815260200191505060405180910390f35b6100b46103fd565b005b61010a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa6565b005b34801561011857600080fd5b50610121611069565b6040518082815260200191505060405180910390f35b34801561014357600080fd5b50610162600480360381019080803590602001909291905050506110ce565b604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001995050505050505050505060405180910390f35b34801561026c57600080fd5b506102a1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156103a257600080fd5b505af11580156103b6573d6000803e3d6000fd5b505050506040513d60208110156103cc57600080fd5b810190808051906020019092919050505015156103e857600080fd5b600260149054906101000a900460ff16905090565b60008060008060011515600260149054906101000a900460ff16151514801561051b5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156104de57600080fd5b505af11580156104f2573d6000803e3d6000fd5b505050506040513d602081101561050857600080fd5b8101908080519060200190929190505050155b80156105e55750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636d7932d16040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156105a857600080fd5b505af11580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b8101908080519060200190929190505050155b80156106af5750600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166325698d896040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561067257600080fd5b505af1158015610686573d6000803e3d6000fd5b505050506040513d602081101561069c57600080fd5b8101908080519060200190929190505050155b15156106ba57600080fd5b3493506064605f85028115156106cc57fe5b0492506064600485028115156106de57fe5b0491506064600185028115156106f057fe5b049050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015801561075b573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156107c4573d6000803e3d6000fd5b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561082c573d6000803e3d6000fd5b50610120604051908101604052806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200182815260200160065481525060086000600654815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a0820151816005015560c0820151816006015560e08201518160070155610100820151816008015590505060016006540160068190555050505050565b60001515600260149054906101000a900460ff161515148015610bbd5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610b8157600080fd5b505af1158015610b95573d6000803e3d6000fd5b505050506040513d6020811015610bab57600080fd5b81019080805190602001909291905050505b1515610bc857600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166310ca8c8183336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b158015610cb957600080fd5b505af1158015610ccd573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631e88c9c0336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610d8e57600080fd5b505af1158015610da2573d6000803e3d6000fd5b505050506040513d6020811015610db857600080fd5b8101908080519060200190929190505050600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633fc7027782336040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b158015610efa57600080fd5b505af1158015610f0e573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631bf230cd336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610fcf57600080fd5b505af1158015610fe3573d6000803e3d6000fd5b505050506040513d6020811015610ff957600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083151502179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110c657600080fd5b600654905090565b60008060008060008060008060006110e4611414565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f54bf6e336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156111a157600080fd5b505af11580156111b5573d6000803e3d6000fd5b505050506040513d60208110156111cb57600080fd5b810190808051906020019092919050505015156111e757600080fd5b600860008c815260200190815260200160002061012060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e00151886101000151995099509950995099509950995099509950509193959799909294969850565b60076020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61012060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815250905600a165627a7a72305820c7b51f216f9b5fad205e3e3693ca0f510cc98bbe56ef0ced5556056bd44205670029",
    "sourceMap": "211:6320:1:-;;;350:5;323:32;;;;;;;;;;;;;;;;;;;;551:1;525:27;;710:344;8:9:-1;5:2;;;30:1;27;20:12;5:2;710:344:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;810:10;802:5;;:18;;;;;;;;;;;;;;;;;;929:8;903:15;;:35;;;;;;;;;;;;;;;;;;979:12;949:15;;:43;;;;;;;;;;;;;;;;;;1033:12;1003:15;;:43;;;;;;;;;;;;;;;;;;710:344;;;211:6320;;;;;;",
    "deployedSourceMap": "211:6320:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6384:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6384:142:1;;;;;;;;;;;;;;;;;;;;;;;;;;;4236:1217;;;;;;3273:806;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5461:231;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5461:231:1;;;;;;;;;;;;;;;;;;;;;;;5700:676;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5700:676:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2553:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2553:49:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6384:142;6429:4;6453:15;;;;;;;;;;;:23;;;6477:10;6453:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6453:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6453:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6453:35:1;;;;;;;;;;;;;;;;6445:44;;;;;;;;6507:11;;;;;;;;;;;6500:18;;6384:142;:::o;4236:1217::-;4701:11;4735:18;4784;4832:16;4397:4;4382:19;;:11;;;;;;;;;;;:19;;;:59;;;;;4406:15;;;;;;;;;;;:23;;;4430:10;4406:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4406:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4406:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4406:35:1;;;;;;;;;;;;;;;;4405:36;4382:59;:91;;;;;4446:15;;;;;;;;;;;:25;;;:27;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4446:27:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4446:27:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4446:27:1;;;;;;;;;;;;;;;;4445:28;4382:91;:123;;;;;4478:15;;;;;;;;;;;:25;;;:27;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4478:27:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4478:27:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4478:27:1;;;;;;;;;;;;;;;;4477:28;4382:123;4374:132;;;;;;;;4715:9;4701:23;;4770:3;4765:2;4756:6;:11;:17;;;;;;;;4735:38;;4818:3;4814:1;4805:6;:10;:16;;;;;;;;4784:37;;4864:3;4860:1;4851:6;:10;:16;;;;;;;;4832:35;;4997:7;;;;;;;;;;;:16;;:31;5014:13;4997:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4997:31:1;5039:7;;;;;;;;;;;:16;;:31;5056:13;5039:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5039:31:1;5169:5;;;;;;;;;;;:14;;:27;5184:11;5169:27;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5169:27:1;5265:108;;;;;;;;;5274:5;;;;;;;;;;;5265:108;;;;;;5281:7;;;;;;;;;;;5265:108;;;;;;5290:7;;;;;;;;;;;5265:108;;;;;;5299:10;5265:108;;;;;;5311:6;5265:108;;;;5319:13;5265:108;;;;5334:13;5265:108;;;;5349:11;5265:108;;;;5362:10;;5265:108;;;5241:9;:21;5251:10;;5241:21;;;;;;;;;;;:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5444:1;5431:10;;:14;5418:10;:27;;;;4236:1217;;;;:::o;3273:806::-;3385:5;3370:20;;:11;;;;;;;;;;;:20;;;:59;;;;;3394:15;;;;;;;;;;;:23;;;3418:10;3394:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3394:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3394:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3394:35:1;;;;;;;;;;;;;;;;3370:59;3362:68;;;;;;;;3685:15;;;;;;;;;;;:26;;;3712:8;3722:10;3685:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3685:48:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3685:48:1;;;;3789:15;;;;;;;;;;;:26;;;3816:10;3789:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3789:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3789:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3789:38:1;;;;;;;;;;;;;;;;3779:7;;:48;;;;;;;;;;;;;;;;;;3898:15;;;;;;;;;;;:26;;;3925:8;3935:10;3898:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3898:48:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3898:48:1;;;;4002:15;;;;;;;;;;;:26;;;4029:10;4002:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4002:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4002:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4002:38:1;;;;;;;;;;;;;;;;3992:7;;:48;;;;;;;;;;;;;;;;;;4067:4;4053:11;;:18;;;;;;;;;;;;;;;;;;3273:806;;:::o;5461:231::-;5509:4;5648:5;;;;;;;;;;;5634:19;;:10;:19;;;5626:28;;;;;;;;5674:10;;5667:17;;5461:231;:::o;5700:676::-;5754:13;5778:15;5804;5830:13;5854:11;5876:18;5905;5934:16;5961:7;6138:24;;:::i;:::-;6089:15;;;;;;;;;;;:23;;;6113:10;6089:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6089:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6089:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6089:35:1;;;;;;;;;;;;;;;;6081:44;;;;;;;;6165:9;:14;6175:3;6165:14;;;;;;;;;;;6138:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6201:8;:14;;;6217:8;:16;;;6235:8;:16;;;6253:8;:14;;;6269:8;:15;;;6286:8;:22;;;6310:8;:22;;;6334:8;:20;;;6356:8;:11;;;6192:176;;;;;;;;;;;;;;;;;;5700:676;;;;;;;;;;;;:::o;2553:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;211:6320::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.4.23;\r\n// add all imports for user privileges here\r\n\r\n// actor contracts\r\nimport \"./accesscontrol/CharityRole.sol\";\r\nimport \"./core/Ownable.sol\";\r\nimport \"./accesscontrol/LotteryRole.sol\";\r\n\r\ncontract Share {\r\n\r\n    address private Owner;\r\n    address private Lottery;\r\n    address private Charity;\r\n    bool private initialized = false;\r\n    Ownable private ownableContract;\r\n    CharityRole private charityContract;\r\n    LotteryRole private lotteryContract;\r\n\r\n    // assigns an ID to each donation\r\n    uint private donationID = 1;\r\n\r\n    /// @notice sets the owner to the Owner variable upon contract init\r\n    /// @dev can be expanded to account for many more constructor features\r\n    constructor(address _ownable, address _charityRole, address _lotteryRole) public {\r\n        Owner = msg.sender;\r\n\r\n        // sets the address for the instance of each helper contract\r\n        ownableContract = Ownable(_ownable);\r\n        charityContract = CharityRole(_charityRole);\r\n        lotteryContract = LotteryRole(_lotteryRole);\r\n    }\r\n\r\n    /// @notice Contains the stucture of the star metadata\r\n    /// @dev key of structure is the provided transaction hash, will be donationId in v2.0\r\n    /// @param owner address, contains the address of the contract owner\r\n    /// @param lottery address, contains the address of the lottery - ether account for v1.0, contract for v2.0\r\n    /// @param charity address, contains the address of the charity - an ether account for v1.0 and v2.0\r\n    /// @param donor address, contains the address of the contract owner - ether account always\r\n    /// @param amount uint, contains the original amount donated - all amounts are after gas\r\n    /// @param charityAmount, contains the remaining 95% of original amount sent to charity\r\n    /// @param lotteryAmount uint, contains the 4% of original amount sent to lottery\r\n    /// @param ownerAmount, contains the 1% of original amount sent to owner\r\n    /// @param id, contains the value of the last submitted donation - is returned to ui\r\n    // TODO - refactor all data handling, updating, and transfer to a BASE data management contract in the future\r\n    struct Donation {\r\n        address owner;\r\n        address lottery;\r\n        address charity;\r\n        address donor;\r\n        uint amount;\r\n        uint charityAmount;\r\n        uint lotteryAmount;\r\n        uint ownerAmount;\r\n        uint id;\r\n    }\r\n\r\n    /// @notice Contains the mapping for the lottery entrees\r\n    /// @dev\r\n    /// @param donor address, will be expanded for v2.0\r\n\r\n    mapping(address => address) public lotteryEntrees;\r\n\r\n    /// @notice Contains the mapping for donation data\r\n    /// @dev key of structure is the transactionHash, in v2.0 a donationId will be introduced\r\n    /// @param Donation structure, contains donation metadata\r\n\r\n    mapping(uint => Donation) private Donations;\r\n\r\n    /// @notice Initiates the contract once deployed, only available to owner\r\n    /// @dev Need to test the syntax here, unsure the require function works\r\n    /// @param _lottery address, contains the ethereum public key for lottery account\r\n    /// @param _charity address, contains the ethereum public key for charity account\r\n\r\n    // TODO - this logic must also include the new contract\r\n    function initiateContract(address _lottery, address _charity) public payable{\r\n\r\n        require(initialized == false && ownableContract.isOwner(msg.sender));\r\n\r\n        // TODO - this logic must add the smart contract address for CharityRole\r\n        // TODO - ei - Charity = CharityRole(_charity) - argument must contain address of contract\r\n\r\n        // sets the lottery for the lotteryRole contract\r\n        lotteryContract.setLottery(_lottery, msg.sender);\r\n\r\n        // gets lottery address\r\n        Lottery = lotteryContract.getLottery(msg.sender);\r\n\r\n        // sets the charity for the charityRole contract\r\n        charityContract.setCharity(_charity, msg.sender);\r\n\r\n        // gets charity address\r\n        Charity = charityContract.getCharity(msg.sender);\r\n\r\n        initialized = true;\r\n    }\r\n\r\n    /// @notice parent function for all contract functionality\r\n    /// @dev Should consider splitting this out further if necessary by reviewers\r\n\r\n    function makeDonation() public payable{\r\n        // owner, charity, and lottery accounts cannot utilize the handleFunds function\r\n        require(initialized == true && !ownableContract.isOwner(msg.sender) && !charityContract.isCharity() && !lotteryContract.isLottery());\r\n\r\n        // creates the amount variable, used to set the amount later on in this function\r\n        // these math. functions can be move to the API to avoid gas cost for calculations\r\n        uint amount = msg.value;\r\n        uint charityAmount = amount * 95 / 100;\r\n        uint lotteryAmount = amount * 4 / 100;\r\n        uint ownerAmount = amount * 1 / 100;\r\n\r\n        // TODO - these can be refactored to ownableContract, since it utilizes the transfer of ownership principle\r\n        Charity.transfer(charityAmount);\r\n        Lottery.transfer(lotteryAmount);\r\n\r\n        // dispatches remaining funds to owner, this ensures that all gas is covered\r\n        Owner.transfer(ownerAmount);\r\n\r\n        // stores all the data\r\n        Donations[donationID] = Donation(Owner, Lottery, Charity, msg.sender, amount, charityAmount, lotteryAmount, ownerAmount, donationID);\r\n\r\n        // updates donationID;\r\n        donationID = donationID + 1;\r\n    }\r\n\r\n    function fetchDonationID() public view returns (uint){\r\n\r\n        // requires the owner to call this function, only owner address can access donationID atm\r\n        require(msg.sender == Owner);\r\n\r\n        return donationID;\r\n    }\r\n\r\n    function fetchDonation(uint _id) public view returns (address owner,\r\n        address lottery,\r\n        address charity,\r\n        address donor,\r\n        uint amount,\r\n        uint charityAmount,\r\n        uint lotteryAmount,\r\n        uint ownerAmount,\r\n        uint id){\r\n\r\n        // requires the owner to call this function, only owner address can access donationID atm\r\n        require(ownableContract.isOwner(msg.sender));\r\n\r\n        Donation memory donation = Donations[_id];\r\n\r\n        return ( donation.owner, donation.lottery, donation.charity, donation.donor, donation.amount, donation.charityAmount, donation.lotteryAmount, donation.ownerAmount, donation.id);\r\n    }\r\n\r\n    function isInitialized() public view returns(bool){\r\n        require(ownableContract.isOwner(msg.sender));\r\n        return initialized;\r\n    }\r\n\r\n}\r\n\r\n",
    "sourcePath": "D:\\Documents\\School\\Share\\ethereum\\contracts\\Share.sol",
    "ast": {
      "absolutePath": "/D/Documents/School/Share/ethereum/contracts/Share.sol",
      "exportedSymbols": {
        "Share": [
          382
        ]
      },
      "id": 383,
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
          "scope": 383,
          "sourceUnit": 508,
          "src": "93:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/core/Ownable.sol",
          "file": "./core/Ownable.sol",
          "id": 60,
          "nodeType": "ImportDirective",
          "scope": 383,
          "sourceUnit": 731,
          "src": "136:28:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/accesscontrol/LotteryRole.sol",
          "file": "./accesscontrol/LotteryRole.sol",
          "id": 61,
          "nodeType": "ImportDirective",
          "scope": 383,
          "sourceUnit": 621,
          "src": "166:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 382,
          "linearizedBaseContracts": [
            382
          ],
          "name": "Share",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 63,
              "name": "Owner",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "235:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 62,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "235:7:1",
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
              "id": 65,
              "name": "Lottery",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "263:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 64,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "263:7:1",
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
              "id": 67,
              "name": "Charity",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "293:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 66,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "293:7:1",
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
              "id": 70,
              "name": "initialized",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "323:32:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 68,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "323:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "66616c7365",
                "id": 69,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "350:5:1",
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
              "id": 72,
              "name": "ownableContract",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "362:31:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$730",
                "typeString": "contract Ownable"
              },
              "typeName": {
                "contractScope": null,
                "id": 71,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 730,
                "src": "362:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$730",
                  "typeString": "contract Ownable"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 74,
              "name": "charityContract",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "400:35:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CharityRole_$507",
                "typeString": "contract CharityRole"
              },
              "typeName": {
                "contractScope": null,
                "id": 73,
                "name": "CharityRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 507,
                "src": "400:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_CharityRole_$507",
                  "typeString": "contract CharityRole"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 76,
              "name": "lotteryContract",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "442:35:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LotteryRole_$620",
                "typeString": "contract LotteryRole"
              },
              "typeName": {
                "contractScope": null,
                "id": 75,
                "name": "LotteryRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 620,
                "src": "442:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_LotteryRole_$620",
                  "typeString": "contract LotteryRole"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 79,
              "name": "donationID",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "525:27:1",
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
                "src": "525:4:1",
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
                "src": "551:1:1",
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
                "id": 111,
                "nodeType": "Block",
                "src": "791:263:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "802:5:1",
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
                          "id": 89,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 745,
                          "src": "810:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 90,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "810:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "802:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 92,
                    "nodeType": "ExpressionStatement",
                    "src": "802:18:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 97,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "ownableContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "903:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Ownable_$730",
                          "typeString": "contract Ownable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 95,
                            "name": "_ownable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "929:8:1",
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
                          "id": 94,
                          "name": "Ownable",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 730,
                          "src": "921:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Ownable_$730_$",
                            "typeString": "type(contract Ownable)"
                          }
                        },
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "921:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Ownable_$730",
                          "typeString": "contract Ownable"
                        }
                      },
                      "src": "903:35:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Ownable_$730",
                        "typeString": "contract Ownable"
                      }
                    },
                    "id": 98,
                    "nodeType": "ExpressionStatement",
                    "src": "903:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "charityContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "949:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_CharityRole_$507",
                          "typeString": "contract CharityRole"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 101,
                            "name": "_charityRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 83,
                            "src": "979:12:1",
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
                          "id": 100,
                          "name": "CharityRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 507,
                          "src": "967:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_CharityRole_$507_$",
                            "typeString": "type(contract CharityRole)"
                          }
                        },
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "967:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_CharityRole_$507",
                          "typeString": "contract CharityRole"
                        }
                      },
                      "src": "949:43:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_CharityRole_$507",
                        "typeString": "contract CharityRole"
                      }
                    },
                    "id": 104,
                    "nodeType": "ExpressionStatement",
                    "src": "949:43:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 105,
                        "name": "lotteryContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "1003:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LotteryRole_$620",
                          "typeString": "contract LotteryRole"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "_lotteryRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 85,
                            "src": "1033:12:1",
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
                          "id": 106,
                          "name": "LotteryRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "1021:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LotteryRole_$620_$",
                            "typeString": "type(contract LotteryRole)"
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1021:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LotteryRole_$620",
                          "typeString": "contract LotteryRole"
                        }
                      },
                      "src": "1003:43:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LotteryRole_$620",
                        "typeString": "contract LotteryRole"
                      }
                    },
                    "id": 110,
                    "nodeType": "ExpressionStatement",
                    "src": "1003:43:1"
                  }
                ]
              },
              "documentation": "@dev can be expanded to account for many more constructor features",
              "id": 112,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 86,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 81,
                    "name": "_ownable",
                    "nodeType": "VariableDeclaration",
                    "scope": 112,
                    "src": "722:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 80,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "722:7:1",
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
                    "id": 83,
                    "name": "_charityRole",
                    "nodeType": "VariableDeclaration",
                    "scope": 112,
                    "src": "740:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 82,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "740:7:1",
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
                    "id": 85,
                    "name": "_lotteryRole",
                    "nodeType": "VariableDeclaration",
                    "scope": 112,
                    "src": "762:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 84,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "762:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "721:62:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 87,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "791:0:1"
              },
              "scope": 382,
              "src": "710:344:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "canonicalName": "Share.Donation",
              "id": 131,
              "members": [
                {
                  "constant": false,
                  "id": 114,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2188:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 113,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2188:7:1",
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
                  "id": 116,
                  "name": "lottery",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2212:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2212:7:1",
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
                  "id": 118,
                  "name": "charity",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2238:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2238:7:1",
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
                  "id": 120,
                  "name": "donor",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2264:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2264:7:1",
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
                  "id": 122,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2288:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2288:4:1",
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
                  "id": 124,
                  "name": "charityAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2310:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2310:4:1",
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
                  "id": 126,
                  "name": "lotteryAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2339:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2339:4:1",
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
                  "id": 128,
                  "name": "ownerAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2368:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 127,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2368:4:1",
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
                  "id": 130,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2395:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 129,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2395:4:1",
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
              "scope": 382,
              "src": "2161:249:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 135,
              "name": "lotteryEntrees",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "2553:49:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "typeName": {
                "id": 134,
                "keyType": {
                  "id": 132,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2561:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "2553:27:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                  "typeString": "mapping(address => address)"
                },
                "valueType": {
                  "id": 133,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2572:7:1",
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
              "id": 139,
              "name": "Donations",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "2827:43:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                "typeString": "mapping(uint256 => struct Share.Donation)"
              },
              "typeName": {
                "id": 138,
                "keyType": {
                  "id": 136,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "2835:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "2827:25:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                  "typeString": "mapping(uint256 => struct Share.Donation)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 137,
                  "name": "Donation",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 131,
                  "src": "2843:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Donation_$131_storage_ptr",
                    "typeString": "struct Share.Donation"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 194,
                "nodeType": "Block",
                "src": "3349:730:1",
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
                          "id": 155,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 149,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 147,
                              "name": "initialized",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 70,
                              "src": "3370:11:1",
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
                              "id": 148,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3385:5:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            "src": "3370:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 152,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 745,
                                  "src": "3418:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 153,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3418:10:1",
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
                              "expression": {
                                "argumentTypes": null,
                                "id": 150,
                                "name": "ownableContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 72,
                                "src": "3394:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Ownable_$730",
                                  "typeString": "contract Ownable"
                                }
                              },
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "isOwner",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 714,
                              "src": "3394:23:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) view external returns (bool)"
                              }
                            },
                            "id": 154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3394:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3370:59:1",
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
                        "id": 146,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "3362:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3362:68:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 157,
                    "nodeType": "ExpressionStatement",
                    "src": "3362:68:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 161,
                          "name": "_lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 141,
                          "src": "3712:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 162,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 745,
                            "src": "3722:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3722:10:1",
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
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 158,
                          "name": "lotteryContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "3685:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_LotteryRole_$620",
                            "typeString": "contract LotteryRole"
                          }
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "setLottery",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 545,
                        "src": "3685:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_address_$returns$__$",
                          "typeString": "function (address,address) payable external"
                        }
                      },
                      "id": 164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3685:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 165,
                    "nodeType": "ExpressionStatement",
                    "src": "3685:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 166,
                        "name": "Lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65,
                        "src": "3779:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 169,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "3816:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3816:10:1",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "lotteryContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "3789:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_LotteryRole_$620",
                              "typeString": "contract LotteryRole"
                            }
                          },
                          "id": 168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "getLottery",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 562,
                          "src": "3789:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                            "typeString": "function (address) view external returns (address)"
                          }
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3789:38:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3779:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 173,
                    "nodeType": "ExpressionStatement",
                    "src": "3779:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 177,
                          "name": "_charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 143,
                          "src": "3925:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 745,
                            "src": "3935:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3935:10:1",
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
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 174,
                          "name": "charityContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "3898:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_CharityRole_$507",
                            "typeString": "contract CharityRole"
                          }
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "setCharity",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 432,
                        "src": "3898:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_address_$returns$__$",
                          "typeString": "function (address,address) payable external"
                        }
                      },
                      "id": 180,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3898:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 181,
                    "nodeType": "ExpressionStatement",
                    "src": "3898:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 188,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 182,
                        "name": "Charity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "3992:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 185,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "4029:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4029:10:1",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 183,
                            "name": "charityContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "4002:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CharityRole_$507",
                              "typeString": "contract CharityRole"
                            }
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "getCharity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 449,
                          "src": "4002:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                            "typeString": "function (address) view external returns (address)"
                          }
                        },
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4002:38:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3992:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 189,
                    "nodeType": "ExpressionStatement",
                    "src": "3992:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "4053:11:1",
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
                        "id": 191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4067:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "4053:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 193,
                    "nodeType": "ExpressionStatement",
                    "src": "4053:18:1"
                  }
                ]
              },
              "documentation": "@param _charity address, contains the ethereum public key for charity account",
              "id": 195,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "initiateContract",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 144,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 141,
                    "name": "_lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 195,
                    "src": "3299:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 140,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3299:7:1",
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
                    "id": 143,
                    "name": "_charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 195,
                    "src": "3317:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 142,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3317:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3298:36:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 145,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3349:0:1"
              },
              "scope": 382,
              "src": "3273:806:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 291,
                "nodeType": "Block",
                "src": "4274:1179:1",
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
                          "id": 218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 213,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 201,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 199,
                                  "name": "initialized",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 70,
                                  "src": "4382:11:1",
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
                                  "id": 200,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4397:4:1",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "4382:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 207,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "4405:36:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 204,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 745,
                                        "src": "4430:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 205,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "4430:10:1",
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
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 202,
                                      "name": "ownableContract",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 72,
                                      "src": "4406:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Ownable_$730",
                                        "typeString": "contract Ownable"
                                      }
                                    },
                                    "id": 203,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "isOwner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 714,
                                    "src": "4406:23:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                                      "typeString": "function (address) view external returns (bool)"
                                    }
                                  },
                                  "id": 206,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4406:35:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "4382:59:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "&&",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "4445:28:1",
                              "subExpression": {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 209,
                                    "name": "charityContract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "4446:15:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_CharityRole_$507",
                                      "typeString": "contract CharityRole"
                                    }
                                  },
                                  "id": 210,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "isCharity",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 479,
                                  "src": "4446:25:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$__$returns$_t_bool_$",
                                    "typeString": "function () view external returns (bool)"
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
                                "src": "4446:27:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "4382:91:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "4477:28:1",
                            "subExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 214,
                                  "name": "lotteryContract",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 76,
                                  "src": "4478:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LotteryRole_$620",
                                    "typeString": "contract LotteryRole"
                                  }
                                },
                                "id": 215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "isLottery",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 592,
                                "src": "4478:25:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_bool_$",
                                  "typeString": "function () view external returns (bool)"
                                }
                              },
                              "id": 216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4478:27:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4382:123:1",
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
                        "id": 198,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "4374:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4374:132:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 220,
                    "nodeType": "ExpressionStatement",
                    "src": "4374:132:1"
                  },
                  {
                    "assignments": [
                      222
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 222,
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4701:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 221,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4701:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 225,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 745,
                        "src": "4715:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4715:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4701:23:1"
                  },
                  {
                    "assignments": [
                      227
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 227,
                        "name": "charityAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4735:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 226,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4735:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 233,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 232,
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
                        "id": 230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 228,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "4756:6:1",
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
                          "id": 229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4765:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_95_by_1",
                            "typeString": "int_const 95"
                          },
                          "value": "95"
                        },
                        "src": "4756:11:1",
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
                        "id": 231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4770:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4756:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4735:38:1"
                  },
                  {
                    "assignments": [
                      235
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 235,
                        "name": "lotteryAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4784:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 234,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4784:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 241,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 240,
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
                        "id": 238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 236,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "4805:6:1",
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
                          "id": 237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4814:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4_by_1",
                            "typeString": "int_const 4"
                          },
                          "value": "4"
                        },
                        "src": "4805:10:1",
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
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4818:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4805:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4784:37:1"
                  },
                  {
                    "assignments": [
                      243
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 243,
                        "name": "ownerAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4832:16:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 242,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4832:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 249,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 248,
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
                        "id": 246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 244,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "4851:6:1",
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
                          "id": 245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4860:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "4851:10:1",
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
                        "id": 247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4864:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4851:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4832:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 253,
                          "name": "charityAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "5014:13:1",
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
                          "id": 250,
                          "name": "Charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67,
                          "src": "4997:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 252,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4997:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 254,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4997:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 255,
                    "nodeType": "ExpressionStatement",
                    "src": "4997:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 259,
                          "name": "lotteryAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 235,
                          "src": "5056:13:1",
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
                          "id": 256,
                          "name": "Lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "5039:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5039:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5039:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 261,
                    "nodeType": "ExpressionStatement",
                    "src": "5039:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "ownerAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 243,
                          "src": "5184:11:1",
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
                          "id": 262,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63,
                          "src": "5169:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5169:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5169:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 267,
                    "nodeType": "ExpressionStatement",
                    "src": "5169:27:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 268,
                          "name": "Donations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 139,
                          "src": "5241:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                            "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                          }
                        },
                        "id": 270,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 269,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "5251:10:1",
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
                        "src": "5241:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$131_storage",
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
                            "id": 272,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63,
                            "src": "5274:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 273,
                            "name": "Lottery",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 65,
                            "src": "5281:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 274,
                            "name": "Charity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67,
                            "src": "5290:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 275,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "5299:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5299:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 277,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 222,
                            "src": "5311:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 278,
                            "name": "charityAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 227,
                            "src": "5319:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 279,
                            "name": "lotteryAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 235,
                            "src": "5334:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 280,
                            "name": "ownerAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "5349:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 281,
                            "name": "donationID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "5362:10:1",
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
                          "id": 271,
                          "name": "Donation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 131,
                          "src": "5265:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Donation_$131_storage_ptr_$",
                            "typeString": "type(struct Share.Donation storage pointer)"
                          }
                        },
                        "id": 282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5265:108:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$131_memory",
                          "typeString": "struct Share.Donation memory"
                        }
                      },
                      "src": "5241:132:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$131_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "id": 284,
                    "nodeType": "ExpressionStatement",
                    "src": "5241:132:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 285,
                        "name": "donationID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "5418:10:1",
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
                        "id": 288,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 286,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "5431:10:1",
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
                          "id": 287,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5444:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5431:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5418:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 290,
                    "nodeType": "ExpressionStatement",
                    "src": "5418:27:1"
                  }
                ]
              },
              "documentation": "@dev Should consider splitting this out further if necessary by reviewers",
              "id": 292,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "makeDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 196,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4257:2:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 197,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4274:0:1"
              },
              "scope": 382,
              "src": "4236:1217:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 306,
                "nodeType": "Block",
                "src": "5514:178:1",
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
                          "id": 301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 298,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "5634:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5634:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 300,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63,
                            "src": "5648:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5634:19:1",
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
                        "id": 297,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "5626:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5626:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 303,
                    "nodeType": "ExpressionStatement",
                    "src": "5626:28:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 304,
                      "name": "donationID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "5674:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 296,
                    "id": 305,
                    "nodeType": "Return",
                    "src": "5667:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 307,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonationID",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 293,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5485:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 296,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 295,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 307,
                    "src": "5509:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 294,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5509:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5508:6:1"
              },
              "scope": 382,
              "src": "5461:231:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 364,
                "nodeType": "Block",
                "src": "5969:407:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 333,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 745,
                                "src": "6113:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6113:10:1",
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 331,
                              "name": "ownableContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 72,
                              "src": "6089:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$730",
                                "typeString": "contract Ownable"
                              }
                            },
                            "id": 332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isOwner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 714,
                            "src": "6089:23:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6089:35:1",
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
                        "id": 330,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "6081:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 336,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6081:44:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 337,
                    "nodeType": "ExpressionStatement",
                    "src": "6081:44:1"
                  },
                  {
                    "assignments": [
                      339
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 339,
                        "name": "donation",
                        "nodeType": "VariableDeclaration",
                        "scope": 365,
                        "src": "6138:24:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                          "typeString": "struct Share.Donation"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 338,
                          "name": "Donation",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 131,
                          "src": "6138:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Donation_$131_storage_ptr",
                            "typeString": "struct Share.Donation"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 343,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 340,
                        "name": "Donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 139,
                        "src": "6165:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                          "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                        }
                      },
                      "id": 342,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 341,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "6175:3:1",
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
                      "src": "6165:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$131_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6138:41:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 344,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6201:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 345,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 114,
                          "src": "6201:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 346,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6217:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 347,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lottery",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 116,
                          "src": "6217:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 348,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6235:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 349,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 118,
                          "src": "6235:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 350,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6253:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 351,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "donor",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 120,
                          "src": "6253:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 352,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6269:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 353,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 122,
                          "src": "6269:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6286:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 355,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charityAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 124,
                          "src": "6286:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 356,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6310:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 357,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lotteryAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 126,
                          "src": "6310:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 358,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6334:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 359,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "ownerAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 128,
                          "src": "6334:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 360,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6356:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 361,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 130,
                          "src": "6356:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 362,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6199:169:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "functionReturnParameters": 329,
                    "id": 363,
                    "nodeType": "Return",
                    "src": "6192:176:1"
                  }
                ]
              },
              "documentation": null,
              "id": 365,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 310,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 309,
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5723:8:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 308,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5723:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5722:10:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 329,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 312,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5754:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 311,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5754:7:1",
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
                    "id": 314,
                    "name": "lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5778:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 313,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5778:7:1",
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
                    "id": 316,
                    "name": "charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5804:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 315,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5804:7:1",
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
                    "id": 318,
                    "name": "donor",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5830:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 317,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5830:7:1",
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
                    "id": 320,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5854:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 319,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5854:4:1",
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
                    "id": 322,
                    "name": "charityAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5876:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 321,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5876:4:1",
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
                    "id": 324,
                    "name": "lotteryAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5905:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 323,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5905:4:1",
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
                    "id": 326,
                    "name": "ownerAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5934:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 325,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5934:4:1",
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
                    "id": 328,
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5961:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 327,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5961:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5753:216:1"
              },
              "scope": 382,
              "src": "5700:676:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 380,
                "nodeType": "Block",
                "src": "6434:92:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 373,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 745,
                                "src": "6477:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 374,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6477:10:1",
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 371,
                              "name": "ownableContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 72,
                              "src": "6453:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$730",
                                "typeString": "contract Ownable"
                              }
                            },
                            "id": 372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isOwner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 714,
                            "src": "6453:23:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 375,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6453:35:1",
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
                        "id": 370,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "6445:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 376,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6445:44:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 377,
                    "nodeType": "ExpressionStatement",
                    "src": "6445:44:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 378,
                      "name": "initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 70,
                      "src": "6507:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 369,
                    "id": 379,
                    "nodeType": "Return",
                    "src": "6500:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 381,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "isInitialized",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 366,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6406:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 369,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 368,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 381,
                    "src": "6429:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 367,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "6429:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6428:6:1"
              },
              "scope": 382,
              "src": "6384:142:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 383,
          "src": "211:6320:1"
        }
      ],
      "src": "0:6535:1"
    },
    "legacyAST": {
      "absolutePath": "/D/Documents/School/Share/ethereum/contracts/Share.sol",
      "exportedSymbols": {
        "Share": [
          382
        ]
      },
      "id": 383,
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
          "scope": 383,
          "sourceUnit": 508,
          "src": "93:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/core/Ownable.sol",
          "file": "./core/Ownable.sol",
          "id": 60,
          "nodeType": "ImportDirective",
          "scope": 383,
          "sourceUnit": 731,
          "src": "136:28:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/D/Documents/School/Share/ethereum/contracts/accesscontrol/LotteryRole.sol",
          "file": "./accesscontrol/LotteryRole.sol",
          "id": 61,
          "nodeType": "ImportDirective",
          "scope": 383,
          "sourceUnit": 621,
          "src": "166:41:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 382,
          "linearizedBaseContracts": [
            382
          ],
          "name": "Share",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 63,
              "name": "Owner",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "235:21:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 62,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "235:7:1",
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
              "id": 65,
              "name": "Lottery",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "263:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 64,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "263:7:1",
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
              "id": 67,
              "name": "Charity",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "293:23:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 66,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "293:7:1",
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
              "id": 70,
              "name": "initialized",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "323:32:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 68,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "323:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "66616c7365",
                "id": 69,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "350:5:1",
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
              "id": 72,
              "name": "ownableContract",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "362:31:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$730",
                "typeString": "contract Ownable"
              },
              "typeName": {
                "contractScope": null,
                "id": 71,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 730,
                "src": "362:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$730",
                  "typeString": "contract Ownable"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 74,
              "name": "charityContract",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "400:35:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CharityRole_$507",
                "typeString": "contract CharityRole"
              },
              "typeName": {
                "contractScope": null,
                "id": 73,
                "name": "CharityRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 507,
                "src": "400:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_CharityRole_$507",
                  "typeString": "contract CharityRole"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 76,
              "name": "lotteryContract",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "442:35:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LotteryRole_$620",
                "typeString": "contract LotteryRole"
              },
              "typeName": {
                "contractScope": null,
                "id": 75,
                "name": "LotteryRole",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 620,
                "src": "442:11:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_LotteryRole_$620",
                  "typeString": "contract LotteryRole"
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 79,
              "name": "donationID",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "525:27:1",
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
                "src": "525:4:1",
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
                "src": "551:1:1",
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
                "id": 111,
                "nodeType": "Block",
                "src": "791:263:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "Owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "802:5:1",
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
                          "id": 89,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 745,
                          "src": "810:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 90,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "810:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "802:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 92,
                    "nodeType": "ExpressionStatement",
                    "src": "802:18:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 97,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 93,
                        "name": "ownableContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "903:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Ownable_$730",
                          "typeString": "contract Ownable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 95,
                            "name": "_ownable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 81,
                            "src": "929:8:1",
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
                          "id": 94,
                          "name": "Ownable",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 730,
                          "src": "921:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Ownable_$730_$",
                            "typeString": "type(contract Ownable)"
                          }
                        },
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "921:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Ownable_$730",
                          "typeString": "contract Ownable"
                        }
                      },
                      "src": "903:35:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Ownable_$730",
                        "typeString": "contract Ownable"
                      }
                    },
                    "id": 98,
                    "nodeType": "ExpressionStatement",
                    "src": "903:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "charityContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "949:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_CharityRole_$507",
                          "typeString": "contract CharityRole"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 101,
                            "name": "_charityRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 83,
                            "src": "979:12:1",
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
                          "id": 100,
                          "name": "CharityRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 507,
                          "src": "967:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_CharityRole_$507_$",
                            "typeString": "type(contract CharityRole)"
                          }
                        },
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "967:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_CharityRole_$507",
                          "typeString": "contract CharityRole"
                        }
                      },
                      "src": "949:43:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_CharityRole_$507",
                        "typeString": "contract CharityRole"
                      }
                    },
                    "id": 104,
                    "nodeType": "ExpressionStatement",
                    "src": "949:43:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 105,
                        "name": "lotteryContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "1003:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LotteryRole_$620",
                          "typeString": "contract LotteryRole"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "_lotteryRole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 85,
                            "src": "1033:12:1",
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
                          "id": 106,
                          "name": "LotteryRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "1021:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LotteryRole_$620_$",
                            "typeString": "type(contract LotteryRole)"
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1021:25:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LotteryRole_$620",
                          "typeString": "contract LotteryRole"
                        }
                      },
                      "src": "1003:43:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LotteryRole_$620",
                        "typeString": "contract LotteryRole"
                      }
                    },
                    "id": 110,
                    "nodeType": "ExpressionStatement",
                    "src": "1003:43:1"
                  }
                ]
              },
              "documentation": "@dev can be expanded to account for many more constructor features",
              "id": 112,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 86,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 81,
                    "name": "_ownable",
                    "nodeType": "VariableDeclaration",
                    "scope": 112,
                    "src": "722:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 80,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "722:7:1",
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
                    "id": 83,
                    "name": "_charityRole",
                    "nodeType": "VariableDeclaration",
                    "scope": 112,
                    "src": "740:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 82,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "740:7:1",
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
                    "id": 85,
                    "name": "_lotteryRole",
                    "nodeType": "VariableDeclaration",
                    "scope": 112,
                    "src": "762:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 84,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "762:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "721:62:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 87,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "791:0:1"
              },
              "scope": 382,
              "src": "710:344:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "canonicalName": "Share.Donation",
              "id": 131,
              "members": [
                {
                  "constant": false,
                  "id": 114,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2188:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 113,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2188:7:1",
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
                  "id": 116,
                  "name": "lottery",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2212:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2212:7:1",
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
                  "id": 118,
                  "name": "charity",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2238:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2238:7:1",
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
                  "id": 120,
                  "name": "donor",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2264:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2264:7:1",
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
                  "id": 122,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2288:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2288:4:1",
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
                  "id": 124,
                  "name": "charityAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2310:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2310:4:1",
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
                  "id": 126,
                  "name": "lotteryAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2339:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2339:4:1",
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
                  "id": 128,
                  "name": "ownerAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2368:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 127,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2368:4:1",
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
                  "id": 130,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 131,
                  "src": "2395:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 129,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2395:4:1",
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
              "scope": 382,
              "src": "2161:249:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 135,
              "name": "lotteryEntrees",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "2553:49:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "typeName": {
                "id": 134,
                "keyType": {
                  "id": 132,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2561:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "2553:27:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                  "typeString": "mapping(address => address)"
                },
                "valueType": {
                  "id": 133,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2572:7:1",
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
              "id": 139,
              "name": "Donations",
              "nodeType": "VariableDeclaration",
              "scope": 382,
              "src": "2827:43:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                "typeString": "mapping(uint256 => struct Share.Donation)"
              },
              "typeName": {
                "id": 138,
                "keyType": {
                  "id": 136,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "2835:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "2827:25:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                  "typeString": "mapping(uint256 => struct Share.Donation)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 137,
                  "name": "Donation",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 131,
                  "src": "2843:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Donation_$131_storage_ptr",
                    "typeString": "struct Share.Donation"
                  }
                }
              },
              "value": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 194,
                "nodeType": "Block",
                "src": "3349:730:1",
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
                          "id": 155,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 149,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 147,
                              "name": "initialized",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 70,
                              "src": "3370:11:1",
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
                              "id": 148,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3385:5:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            "src": "3370:20:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 152,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 745,
                                  "src": "3418:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 153,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3418:10:1",
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
                              "expression": {
                                "argumentTypes": null,
                                "id": 150,
                                "name": "ownableContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 72,
                                "src": "3394:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Ownable_$730",
                                  "typeString": "contract Ownable"
                                }
                              },
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "isOwner",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 714,
                              "src": "3394:23:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address) view external returns (bool)"
                              }
                            },
                            "id": 154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3394:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3370:59:1",
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
                        "id": 146,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "3362:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3362:68:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 157,
                    "nodeType": "ExpressionStatement",
                    "src": "3362:68:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 161,
                          "name": "_lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 141,
                          "src": "3712:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 162,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 745,
                            "src": "3722:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 163,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3722:10:1",
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
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 158,
                          "name": "lotteryContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "3685:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_LotteryRole_$620",
                            "typeString": "contract LotteryRole"
                          }
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "setLottery",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 545,
                        "src": "3685:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_address_$returns$__$",
                          "typeString": "function (address,address) payable external"
                        }
                      },
                      "id": 164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3685:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 165,
                    "nodeType": "ExpressionStatement",
                    "src": "3685:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 166,
                        "name": "Lottery",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65,
                        "src": "3779:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 169,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "3816:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3816:10:1",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 167,
                            "name": "lotteryContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "3789:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_LotteryRole_$620",
                              "typeString": "contract LotteryRole"
                            }
                          },
                          "id": 168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "getLottery",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 562,
                          "src": "3789:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                            "typeString": "function (address) view external returns (address)"
                          }
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3789:38:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3779:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 173,
                    "nodeType": "ExpressionStatement",
                    "src": "3779:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 177,
                          "name": "_charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 143,
                          "src": "3925:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 745,
                            "src": "3935:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3935:10:1",
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
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 174,
                          "name": "charityContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "3898:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_CharityRole_$507",
                            "typeString": "contract CharityRole"
                          }
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "setCharity",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 432,
                        "src": "3898:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_address_$returns$__$",
                          "typeString": "function (address,address) payable external"
                        }
                      },
                      "id": 180,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3898:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 181,
                    "nodeType": "ExpressionStatement",
                    "src": "3898:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 188,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 182,
                        "name": "Charity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "3992:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 185,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "4029:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 186,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4029:10:1",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 183,
                            "name": "charityContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "4002:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CharityRole_$507",
                              "typeString": "contract CharityRole"
                            }
                          },
                          "id": 184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "getCharity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 449,
                          "src": "4002:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                            "typeString": "function (address) view external returns (address)"
                          }
                        },
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4002:38:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3992:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 189,
                    "nodeType": "ExpressionStatement",
                    "src": "3992:48:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "4053:11:1",
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
                        "id": 191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4067:4:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "4053:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 193,
                    "nodeType": "ExpressionStatement",
                    "src": "4053:18:1"
                  }
                ]
              },
              "documentation": "@param _charity address, contains the ethereum public key for charity account",
              "id": 195,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "initiateContract",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 144,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 141,
                    "name": "_lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 195,
                    "src": "3299:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 140,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3299:7:1",
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
                    "id": 143,
                    "name": "_charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 195,
                    "src": "3317:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 142,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3317:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3298:36:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 145,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3349:0:1"
              },
              "scope": 382,
              "src": "3273:806:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 291,
                "nodeType": "Block",
                "src": "4274:1179:1",
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
                          "id": 218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 213,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 201,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 199,
                                  "name": "initialized",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 70,
                                  "src": "4382:11:1",
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
                                  "id": 200,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4397:4:1",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "4382:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 207,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "4405:36:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 204,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 745,
                                        "src": "4430:3:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 205,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "4430:10:1",
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
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 202,
                                      "name": "ownableContract",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 72,
                                      "src": "4406:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Ownable_$730",
                                        "typeString": "contract Ownable"
                                      }
                                    },
                                    "id": 203,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "isOwner",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 714,
                                    "src": "4406:23:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                                      "typeString": "function (address) view external returns (bool)"
                                    }
                                  },
                                  "id": 206,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4406:35:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "4382:59:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "&&",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "4445:28:1",
                              "subExpression": {
                                "argumentTypes": null,
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 209,
                                    "name": "charityContract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 74,
                                    "src": "4446:15:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_CharityRole_$507",
                                      "typeString": "contract CharityRole"
                                    }
                                  },
                                  "id": 210,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "isCharity",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 479,
                                  "src": "4446:25:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$__$returns$_t_bool_$",
                                    "typeString": "function () view external returns (bool)"
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
                                "src": "4446:27:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "4382:91:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "!",
                            "prefix": true,
                            "src": "4477:28:1",
                            "subExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 214,
                                  "name": "lotteryContract",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 76,
                                  "src": "4478:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LotteryRole_$620",
                                    "typeString": "contract LotteryRole"
                                  }
                                },
                                "id": 215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "isLottery",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 592,
                                "src": "4478:25:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_bool_$",
                                  "typeString": "function () view external returns (bool)"
                                }
                              },
                              "id": 216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4478:27:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4382:123:1",
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
                        "id": 198,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "4374:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4374:132:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 220,
                    "nodeType": "ExpressionStatement",
                    "src": "4374:132:1"
                  },
                  {
                    "assignments": [
                      222
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 222,
                        "name": "amount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4701:11:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 221,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4701:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 225,
                    "initialValue": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 745,
                        "src": "4715:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4715:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4701:23:1"
                  },
                  {
                    "assignments": [
                      227
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 227,
                        "name": "charityAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4735:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 226,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4735:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 233,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 232,
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
                        "id": 230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 228,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "4756:6:1",
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
                          "id": 229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4765:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_95_by_1",
                            "typeString": "int_const 95"
                          },
                          "value": "95"
                        },
                        "src": "4756:11:1",
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
                        "id": 231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4770:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4756:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4735:38:1"
                  },
                  {
                    "assignments": [
                      235
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 235,
                        "name": "lotteryAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4784:18:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 234,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4784:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 241,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 240,
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
                        "id": 238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 236,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "4805:6:1",
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
                          "id": 237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4814:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4_by_1",
                            "typeString": "int_const 4"
                          },
                          "value": "4"
                        },
                        "src": "4805:10:1",
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
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4818:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4805:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4784:37:1"
                  },
                  {
                    "assignments": [
                      243
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 243,
                        "name": "ownerAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 292,
                        "src": "4832:16:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 242,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4832:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 249,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 248,
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
                        "id": 246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 244,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 222,
                          "src": "4851:6:1",
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
                          "id": 245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4860:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "4851:10:1",
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
                        "id": 247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4864:3:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "4851:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4832:35:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 253,
                          "name": "charityAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 227,
                          "src": "5014:13:1",
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
                          "id": 250,
                          "name": "Charity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67,
                          "src": "4997:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 252,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4997:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 254,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4997:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 255,
                    "nodeType": "ExpressionStatement",
                    "src": "4997:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 259,
                          "name": "lotteryAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 235,
                          "src": "5056:13:1",
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
                          "id": 256,
                          "name": "Lottery",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "5039:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5039:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5039:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 261,
                    "nodeType": "ExpressionStatement",
                    "src": "5039:31:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "ownerAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 243,
                          "src": "5184:11:1",
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
                          "id": 262,
                          "name": "Owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63,
                          "src": "5169:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5169:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5169:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 267,
                    "nodeType": "ExpressionStatement",
                    "src": "5169:27:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 268,
                          "name": "Donations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 139,
                          "src": "5241:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                            "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                          }
                        },
                        "id": 270,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 269,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "5251:10:1",
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
                        "src": "5241:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$131_storage",
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
                            "id": 272,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63,
                            "src": "5274:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 273,
                            "name": "Lottery",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 65,
                            "src": "5281:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 274,
                            "name": "Charity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67,
                            "src": "5290:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 275,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "5299:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5299:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 277,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 222,
                            "src": "5311:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 278,
                            "name": "charityAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 227,
                            "src": "5319:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 279,
                            "name": "lotteryAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 235,
                            "src": "5334:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 280,
                            "name": "ownerAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "5349:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 281,
                            "name": "donationID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "5362:10:1",
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
                          "id": 271,
                          "name": "Donation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 131,
                          "src": "5265:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Donation_$131_storage_ptr_$",
                            "typeString": "type(struct Share.Donation storage pointer)"
                          }
                        },
                        "id": 282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5265:108:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$131_memory",
                          "typeString": "struct Share.Donation memory"
                        }
                      },
                      "src": "5241:132:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$131_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "id": 284,
                    "nodeType": "ExpressionStatement",
                    "src": "5241:132:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 285,
                        "name": "donationID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "5418:10:1",
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
                        "id": 288,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 286,
                          "name": "donationID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 79,
                          "src": "5431:10:1",
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
                          "id": 287,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5444:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5431:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5418:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 290,
                    "nodeType": "ExpressionStatement",
                    "src": "5418:27:1"
                  }
                ]
              },
              "documentation": "@dev Should consider splitting this out further if necessary by reviewers",
              "id": 292,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "makeDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 196,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4257:2:1"
              },
              "payable": true,
              "returnParameters": {
                "id": 197,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4274:0:1"
              },
              "scope": 382,
              "src": "4236:1217:1",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 306,
                "nodeType": "Block",
                "src": "5514:178:1",
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
                          "id": 301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 298,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 745,
                              "src": "5634:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5634:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 300,
                            "name": "Owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63,
                            "src": "5648:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5634:19:1",
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
                        "id": 297,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "5626:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5626:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 303,
                    "nodeType": "ExpressionStatement",
                    "src": "5626:28:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 304,
                      "name": "donationID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "5674:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 296,
                    "id": 305,
                    "nodeType": "Return",
                    "src": "5667:17:1"
                  }
                ]
              },
              "documentation": null,
              "id": 307,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonationID",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 293,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "5485:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 296,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 295,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 307,
                    "src": "5509:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 294,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5509:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5508:6:1"
              },
              "scope": 382,
              "src": "5461:231:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 364,
                "nodeType": "Block",
                "src": "5969:407:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 333,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 745,
                                "src": "6113:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6113:10:1",
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 331,
                              "name": "ownableContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 72,
                              "src": "6089:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$730",
                                "typeString": "contract Ownable"
                              }
                            },
                            "id": 332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isOwner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 714,
                            "src": "6089:23:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6089:35:1",
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
                        "id": 330,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "6081:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 336,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6081:44:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 337,
                    "nodeType": "ExpressionStatement",
                    "src": "6081:44:1"
                  },
                  {
                    "assignments": [
                      339
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 339,
                        "name": "donation",
                        "nodeType": "VariableDeclaration",
                        "scope": 365,
                        "src": "6138:24:1",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                          "typeString": "struct Share.Donation"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 338,
                          "name": "Donation",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 131,
                          "src": "6138:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Donation_$131_storage_ptr",
                            "typeString": "struct Share.Donation"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 343,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 340,
                        "name": "Donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 139,
                        "src": "6165:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Donation_$131_storage_$",
                          "typeString": "mapping(uint256 => struct Share.Donation storage ref)"
                        }
                      },
                      "id": 342,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 341,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 309,
                        "src": "6175:3:1",
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
                      "src": "6165:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Donation_$131_storage",
                        "typeString": "struct Share.Donation storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6138:41:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 344,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6201:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 345,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 114,
                          "src": "6201:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 346,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6217:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 347,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lottery",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 116,
                          "src": "6217:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 348,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6235:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 349,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charity",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 118,
                          "src": "6235:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 350,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6253:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 351,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "donor",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 120,
                          "src": "6253:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 352,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6269:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 353,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 122,
                          "src": "6269:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6286:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 355,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "charityAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 124,
                          "src": "6286:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 356,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6310:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 357,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lotteryAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 126,
                          "src": "6310:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 358,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6334:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 359,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "ownerAmount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 128,
                          "src": "6334:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 360,
                            "name": "donation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 339,
                            "src": "6356:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Donation_$131_memory_ptr",
                              "typeString": "struct Share.Donation memory"
                            }
                          },
                          "id": 361,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 130,
                          "src": "6356:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 362,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6199:169:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "functionReturnParameters": 329,
                    "id": 363,
                    "nodeType": "Return",
                    "src": "6192:176:1"
                  }
                ]
              },
              "documentation": null,
              "id": 365,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "fetchDonation",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 310,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 309,
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5723:8:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 308,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5723:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5722:10:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 329,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 312,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5754:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 311,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5754:7:1",
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
                    "id": 314,
                    "name": "lottery",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5778:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 313,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5778:7:1",
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
                    "id": 316,
                    "name": "charity",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5804:15:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 315,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5804:7:1",
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
                    "id": 318,
                    "name": "donor",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5830:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 317,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5830:7:1",
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
                    "id": 320,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5854:11:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 319,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5854:4:1",
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
                    "id": 322,
                    "name": "charityAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5876:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 321,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5876:4:1",
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
                    "id": 324,
                    "name": "lotteryAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5905:18:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 323,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5905:4:1",
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
                    "id": 326,
                    "name": "ownerAmount",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5934:16:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 325,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5934:4:1",
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
                    "id": 328,
                    "name": "id",
                    "nodeType": "VariableDeclaration",
                    "scope": 365,
                    "src": "5961:7:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 327,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "5961:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "5753:216:1"
              },
              "scope": 382,
              "src": "5700:676:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 380,
                "nodeType": "Block",
                "src": "6434:92:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 373,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 745,
                                "src": "6477:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 374,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6477:10:1",
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 371,
                              "name": "ownableContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 72,
                              "src": "6453:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$730",
                                "typeString": "contract Ownable"
                              }
                            },
                            "id": 372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isOwner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 714,
                            "src": "6453:23:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 375,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6453:35:1",
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
                        "id": 370,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          748,
                          749
                        ],
                        "referencedDeclaration": 748,
                        "src": "6445:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 376,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6445:44:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 377,
                    "nodeType": "ExpressionStatement",
                    "src": "6445:44:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 378,
                      "name": "initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 70,
                      "src": "6507:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 369,
                    "id": 379,
                    "nodeType": "Return",
                    "src": "6500:18:1"
                  }
                ]
              },
              "documentation": null,
              "id": 381,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "isInitialized",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 366,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6406:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 369,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 368,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 381,
                    "src": "6429:4:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 367,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "6429:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6428:6:1"
              },
              "scope": 382,
              "src": "6384:142:1",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 383,
          "src": "211:6320:1"
        }
      ],
      "src": "0:6535:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "2.0.2",
    "updatedAt": "2019-03-29T02:39:53.900Z"
  }
];

module.exports = abi;
