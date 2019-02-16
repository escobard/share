// this grabs the Share.sol file within /contracts
const Share = artifacts.require("Share");

// extracts the accounts array from the contract
contract("Share", accounts => {

    // sets all addresses globally for re-use
    let owner = accounts[0];
    let lottery = accounts[1];
    let charity = accounts [2];
    let donor = accounts[3];
    let other = accounts[4];
    let amount = web3.toWei(0.1, "ether");

    beforeEach(async () => {
        this.contract = await Share.new({ from: accounts[0] });
    });


describe("Tests contract initiation", () =>{
    it('owner can initialize contract', async ()=> {

        let reponse = await this.initiateContract(lottery, charity, {from: owner})

        assert.equal(response, "Contract initialized!")

    });

    it('only owner can initialize contract', async () =>{

        let response = await this.initiateContract(lottery, charity, {from: other})

        assert.eqal(response, undefined)
    });
});

describe("Tests makeDonation()", () =>{

    // initializes contract every time prior to makeDonation();
    beforeEach(async () =>{
        await this.initiateContract(lottery, charity, {from: owner});
    })

    it("donor can create donation, checks donation iteration", async () =>{
        let response = await this.makeDonation({from: donor, value: amount});

        assert.equal(response, 1);
    })

    // only charity needs to be tested, can add cases for
    it("charity cannot create donation", async () =>{
        let response = await this.makeDonation({from: charity, value: amount});

        assert.equal(response, undefined);
    })

});

describe("Tests fetchDonation()", () =>{
    // initializes contract every time prior to makeDonation();

    let charityAmount = amount * 0.95,
        lotteryAmount = amount * 0.05,
        ownerAmount = amount * 0.01,
        donation = [ owner, lottery, charity, donor, amount, charityAmount, lotteryAmount, ownerAmount, 1];

    beforeEach(async () =>{
        await this.initiateContract(lottery, charity, {from: owner});
        await this.makeDonation({from: charity, value: amount});
    })

    it("donor can fetch donation by donationID", async () => {
        let response = await this.fetchDonation(1, {from: donor});
        assert.deepEqual(response, donation);
    })

    it("accounts not within the donation array cannot fetch donation", async () => {
        let response = await this.fetchDonation(1, {from: other});
        assert.deepEqual(response, undefined);
    });

})

})