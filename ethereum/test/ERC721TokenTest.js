// grabs the contract artifact, necessary to test contract with Truffle
const ERC721Token = artifacts.require('ERC721Token');

// initiates our contract
contract('ERC721Token', accounts =>{
    let defaultAccount = accounts[0];

    // adds more accounts to test transfering ownership with
    let user1 = accounts[1];
    let user2 = accounts[2];
    let operator = accounts[3];

    // loads our contract prior to each test
    beforeEach(async () =>{
        // assigns contract to the constructor .this variable
        this.contract = await ERC721Token.new({from: defaultAccount})
    })

    describe('can create a token', () =>{

        // creates our new token
        let tokenId = 1;

        // declares empty variable for log
        let tx;

        beforeEach(async () =>{

            // gives the token created above to user1
            tx = await this.contract.mint(tokenId, {from: user1})
        })

        it('confirms ownerOf tokenId is user1, confirming mint transfer of ownership', async () =>{
            assert.equal(await this.contract.ownerOf(tokenId), user1)
        })

        it('confirms balanceOf user1 is incremented by 1, confirming mint increment', async () =>{
            
            // this returns the user's balance, wrapped in a JS object
            let balance = await this.contract.balanceOf(user1);

            assert.equal(balance.toNumber(), 1);
        })

        it('emits the correct event during creation of a new token', async () =>{

            // checks the event name to match what we expect
            assert.equal(tx.logs[0].event, "Transfer");
        })
    })

    describe('can transfer a token', () =>{
        let tokenId = 1;
        let tx

        beforeEach(async () =>{
            // mints a token to user1
            await this.contract.mint(tokenId, {from: user1});

            // transfers token from user1 to user2
            tx = await this.contract.transferFrom(user1, user2, tokenId, {from: user1})
        })

        it('token has new owner', async () =>{
            assert.equal(await this.contract.ownerOf(tokenId), user2)
        })

        it('emits the correct events', async ()=>{
            assert.equal(tx.logs[0].event, 'Transfer')
            assert.equal(tx.logs[0].args._tokenId, tokenId)
            assert.equal(tx.logs[0].args._to, user2)
            assert.equal(tx.logs[0].args._from, user1)
        })

        it('only permissioned users can transfer tokens', async ()=>{
            let randomFoolTryingToStealTokens = accounts[4];

            await expectThrow(this.contract.transferFrom(user1, randomFoolTryingToStealTokens, tokenId, {from: randomFoolTryingToStealTokens}))
        })
    })

    describe('can grant approval to transfer', () =>{
        let tokenId = 1;
        let tx

        beforeEach(async ()=>{

            // mints a token to user1
            await this.contract.mint(tokenId, {from: user1});

            // user1 approves user2 for the transfer of the token
            tx = await this.contract.approve(user2, tokenId, {from:user1})
        })

        it('sets user 2 as an approved address', async () =>{
            assert.equal(await this.contract.getApproved(tokenId), user2)
        })

        it('user2 can now transfer token', async () =>{
            
            // transfers token
            await this.contract.transferFrom(user1, user2, tokenId, {from: user2})

            // checks that the new owner of the token is user2
            assert.equal(await this.contract.ownerOf(tokenId), user2)

        })

        it('emits the correct events', async ()=>{
            assert.equal(tx.logs[0].event, 'Approval')
        })
    })

    describe('can set an operator', () =>{
        let tokenId = 1;
        let tx;

        beforeEach(async ()=>{
            await this.contract.mint(tokenId, {from:user1});
            tx = await this.contract.setApprovalForAll(operator, true, {from: user1})
        })

        it('can set an operator', async () =>{
            assert.equal(await this.contract.isApprovedForAll(user1, operator), true)
        })
    })
})

// checks for expected behavior when an error is thrown with the transaction
// useful to test in case of malicios attacks, or unexpected behavior
let expectThrow = async (promise) =>{
    try{
        await promise;
    }catch(e){
        assert.exists(e);
        return
    }

    // throws this fail if no errors are found
    assert.fail("Expected an error but didn't see one!")
}