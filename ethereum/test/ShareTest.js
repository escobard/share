// this grabs the Share.sol file within /contracts
const LotteryRole = artifacts.require("./LotteryRole.sol"),
  CharityRole = artifacts.require("./CharityRole.sol"),
  OwnerRole = artifacts.require("./OwnerRole.sol"),
  DonationBase = artifacts.require("./DonationBase.sol");
Share = artifacts.require("./Share.sol");

// extracts the accounts array from the contract
contract("Share", accounts => {
  // TODO - Testing contract address by instance here: https://truffleframework.com/docs/truffle/testing/writing-tests-in-solidity#example

  // sets all addresses globally for re-use
  let owner = accounts[0];
  let lottery = accounts[1];
  let charity = accounts[2];
  let donor = accounts[3];
  let other = accounts[4];
  let amount = web3.toWei(0.1, "ether");

  beforeEach(async () => {
    this.ownerRole = await OwnerRole.new({ from: owner });
    this.charityRole = await CharityRole.new(this.ownerRole.address, {
      from: owner
    });
    this.lotteryRole = await LotteryRole.new(this.ownerRole.address, {
      from: owner
    });
    this.donationBase = await DonationBase.new(this.ownerRole.address, {
      from: owner
    });
    this.contract = await Share.new(
      this.ownerRole.address,
      this.charityRole.address,
      this.lotteryRole.address,
      this.donationBase.address,
      { from: owner }
    );
  });

  describe("Tests contract initiation", () => {
    it("owner can initialize contract", async () => {
      let initialized = await this.contract.isInitialized({ from: owner });
      console.log("INIT", initialized);

      let response = await this.contract.initiateContract(lottery, charity, {
        from: owner
      });
      return new Promise(resolve => {
        resolve(response);
      }).then(async resp => {
        // will comment back in when lottery contract is completed
        assert.equal(await this.ownerRole.getOwner({ from: owner }), owner);
        assert.equal(
          await this.charityRole.getCharity(owner, { from: owner }),
          charity
        );
        assert.equal(
          await this.lotteryRole.getLottery(owner, { from: owner }),
          lottery
        );
        assert.equal(await this.contract.isInitialized({ from: owner }), true);
      });
    });

    /* this doesn't work since it reverts as expected, to test contract errors check: https://ethereum.stackexchange.com/questions/48627/how-to-catch-revert-error-in-truffle-test-javascript
        it('only owner can initialize contract', async () =>{

            let response = await this.contract.initiateContract(lottery, charity, {from: other})

            assert.eqal(response, undefined)
        });
        */
  });

  describe("Tests makeDonation()", () => {
    // initializes contract every time prior to makeDonation();
    beforeEach(async () => {
      await this.contract.initiateContract(lottery, charity, { from: owner });
    });

    it("donor can create donation, checks donation iteration", async () => {
      await this.contract.makeDonation({ from: donor, value: amount });
      let response = await this.contract.fetchDonationID();

      assert.equal(response, 2);
    });

    /*
        // only charity needs to be tested, can add cases for
        it("charity cannot create donation", async () =>{
            let response = await this.contract.makeDonation({from: charity, value: amount});

            assert.equal(response, undefined);
        })
        */
  });

  describe("Tests fetchDonation()", () => {
    // initializes contract every time prior to makeDonation();

    let charityAmount = amount * 0.95,
      lotteryAmount = amount * 0.04,
      ownerAmount = amount * 0.01;

    beforeEach(async () => {
      await this.contract.initiateContract(lottery, charity, { from: owner });
    });

    it("donor can fetch donation by donationID", async () => {
      await this.contract.makeDonation({ from: donor, value: amount });
      let fetchedDonation = await this.contract.fetchDonation(1, {
        from: owner
      });
      console.log(fetchedDonation);

      // need to assert each output, due to how number amounts are returned from solidity
      assert.equal(fetchedDonation[0], owner);
      assert.equal(fetchedDonation[1], lottery);
      assert.equal(fetchedDonation[2], charity);
      assert.equal(fetchedDonation[3], donor);
      assert.equal(fetchedDonation[4], amount);
      assert.equal(fetchedDonation[5], charityAmount);
      assert.equal(fetchedDonation[6], lotteryAmount);
      assert.equal(fetchedDonation[7], ownerAmount);
      assert.equal(fetchedDonation[8], 1);
    });
  });
});
