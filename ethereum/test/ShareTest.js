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
    it('owner can initialize contract', ()=> {

        let reponse =

        assert.equal(response, "Contract initialized!")

    });

    it('only owner can initialize contract', () =>{

        let response = await this.initiateContract(lottery, charity, {from: other})

        assert.eqal(response, undefined)
    });
});

describe("Tests makeDonation()", () =>{

    // initializes contract every time prior to makeDonation();
    beforeEach(async () =>{
        await this.initiateContract(lottery, charity, {from: owner});
    })

    it("donor can create donation, checks donation iteration", =>{
        let response = await this.makeDonation({from: donor, value: amount});

        assert.equal(response, 1);
    })

    it("charity cannot create donation", =>(
        let response = await this.makeDonation({from: donor, value: amount});

        assert.equal(response, undefined);
    ))



});

describe("Tests fetchDonation()", () =>{});

}
