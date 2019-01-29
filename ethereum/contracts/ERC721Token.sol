pragma solidity ^0.4.24;

// this imports the ERC721 interface, allowing us to use the ERC for our contract
import './ERC721.sol';

// creates an instance of the ERC721 interface
// its important to note that this will convert the file name, into a variable
contract ERC721Token is ERC721{
    
    // these aren't too clear yet, but more on mapping functions here: 
    // https://solidity.readthedocs.io/en/v0.4.21/types.html#mappings
    // it maps the values ito an array then assigns the array to a variable
    // these are helpful when trying to isolate data
    mapping(uint256 => address) tokenToOwner;
    mapping(address => uint256) ownerToBalance;

    // creates a new array for the approved addresses for a particular token
    mapping(uint256 => address) tokenToApproved;

    // mapping to grant transfer approval to all available tokens to operator
    mapping(address => mapping(address => bool)) ownerToOperator;

    // another function type, more on that here: 
    // https://solidity.readthedocs.io/en/v0.4.24/common-patterns.html
    // ensures no tokens get stolen
    modifier hasPermission(address _caller, uint256 _tokenId){
        // requires any transfer call to only be allowed the FROM acount to be the owner of the token
        // secondary condition checks if caller address is in the list of APPROVED callers for a given token
        require(_caller == tokenToOwner[_tokenId] || getApproved(_tokenId) == _caller);

        // continues the rest of the function, as long as the call meets the above require statement
        _;
    }

    // the function here will actually create the new token for us to use
    // these functions are generally called 'mints'
    // all a token really is, is a reference of ownership
    // this function can also be used to TRANSFER ownership to another user
    // technically, what this function is doing is transfering ownership form one user to another
    // where the default user is the contract
    function mint(uint256 _tokenId) public {
        // this only allows the owner of the address[0] account to access this function
        // first argument is the condition, ensuring the owner.token property contains the same
        // hash as address[0]
        // second argument is the message, if  the first condition is false
        require(tokenToOwner[_tokenId] == address(0), "This token already belongs to someone else!");

        // this sets the owner of the token to the user's address
        tokenToOwner[_tokenId] = msg.sender;

        // this updates the user's balance with the new token
        ownerToBalance[msg.sender] += 1;
        
        // fires the pre-established transfer event from ERC721 boilerplate
        // returns original owner's address, users's address, and token ID
        emit Transfer(address(0), msg.sender, _tokenId);
    }

    /// @notice Count all NFTs assigned to an owner
    /// @dev NFTs assigned to the zero address are considered invalid, and this
    ///  function throws for queries about the zero address.
    /// @param _owner An address for whom to query the balance
    /// @return The number of NFTs owned by `_owner`, possibly zero
    function balanceOf(address _owner) external view returns (uint256){
        // ensures the user cannot check their own balance, as that is nonsensical
        require(_owner != address(0), "Cannot ask for your own balance!");

        // returns the balance of the owner, when the owner's address is entered
        return ownerToBalance[_owner];
    }

    /// @notice Find the owner of an NFT
    /// @dev NFTs assigned to zero address are considered invalid, and queries
    ///  about them do throw.
    /// @param _tokenId The identifier for an NFT
    /// @return The address of the owner of the NFT
    function ownerOf(uint256 _tokenId) external view returns (address){

        // returns owner of the token, once the tokenID is entered
        return tokenToOwner[_tokenId];
    }


    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    ///  THEY MAY BE PERMANENTLY LOST
    /// @dev Throws unless `msg.sender` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `_tokenId` is not a valid NFT.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer

    // this is used to transfer tokens FROM one address TO another
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable hasPermission(msg.sender, _tokenId){
        
        transferFromHelper(_from, _to, _tokenId);
    }

        // this is used to transfer tokens FROM one address TO another
        // calling this method privately, without authentication since this can only be
        // called internally, more on that here = https://solidity.readthedocs.io/en/v0.4.24/contracts.html#visibility-and-getters
    function transferFromHelper(address _from, address _to, uint256 _tokenId) internal {
        
        // changes the owner's address fo the token to the _to argument
        tokenToOwner[_tokenId] = _to;

        // removes balance of token of FROM account
        ownerToBalance[_from] -= 1;

        // fires transfer event
        emit Transfer(_from, _to, _tokenId);
    }

    /// @notice Change or reaffirm the approved address for an NFT
    /// @dev The zero address indicates there is no approved address.
    ///  Throws unless `msg.sender` is the current NFT owner, or an authorized
    ///  operator of the current owner.
    /// @param _approved The new approved NFT controller
    /// @param _tokenId The NFT to approve

    // gives another address APPROVAL to transfer the token
    function approve(address _approved, uint256 _tokenId) external payable{
        require(tokenToOwner[_tokenId] == msg.sender);

        // sets the approved property of the token to the approved address argument
        tokenToApproved[_tokenId] = _approved;

        // emits the approval event
        emit Approval(msg.sender, _approved, _tokenId);

    }

    /// @notice Enable or disable approval for a third party ("operator") to manage
    ///  all of `msg.sender`'s assets
    /// @dev Emits the ApprovalForAll event. The contract MUST allow
    ///  multiple operators per owner.
    /// @param _operator Address to add to the set of authorized operators
    /// @param _approved True if the operator is approved, false to revoke approval

    // grants permission to operator to transfer ALL tokens within a given account
    function setApprovalForAll(address _operator, bool _approved) external{

        // gives the operator access to transfer ALL the tokens in the users account
        ownerToOperator[msg.sender][_operator] = _approved;

        // emits the approvalForAll event
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    /// @notice Get the approved address for a single NFT
    /// @dev Throws if `_tokenId` is not a valid NFT.
    /// @param _tokenId The NFT to find the approved address for
    /// @return The approved address for this NFT, or the zero address if there is none

    // changed from external function type, so we can use it in this function
    function getApproved(uint256 _tokenId) public view returns (address){

        // returns the approved address of the argument's token;
        return tokenToApproved[_tokenId];
    }

    /// @notice Query if an address is an authorized operator for another address
    /// @param _owner The address that owns the NFTs
    /// @param _operator The address that acts on behalf of the owner
    /// @return True if `_operator` is an approved operator for `_owner`, false otherwise

    // changes from external to public, so it can be used internally by the contract
    function isApprovedForAll(address _owner, address _operator) public view returns (bool){

        // returns the status of the permission, is true if the operator is approved to transfer all of the
        // user's token
        return ownerToOperator[_owner][_operator];
    }
}