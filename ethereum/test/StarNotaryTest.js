// this grabs the StarNotary.sol file within /contracts
const StarNotary = artifacts.require("StarNotary");

// extracts the accounts array from the contract
contract("StarNotary", accounts => {
  beforeEach(async () => {
    this.contract = await StarNotary.new({ from: accounts[0] });
  });

  describe("can create a star", () => {
    it("can create a star and get all its properties", async () => {
      let name = "New star",
        story = "Amazing demo star story, building this project was fun",
        dec = "dec_121.874",
        mag = "mag_245.978",
        cent = "dec_121.874",
        tokenId = 1;
      coordsString = dec + mag + cent;

      // creates star with the provided name, and tokenId, from the first account.
      await this.contract.createStar(name, story, dec, mag, cent, tokenId, {
        from: accounts[0]
      });
      let sampleStar = [name, story, dec];
      assert.deepEqual(await this.contract.tokenIdToStarInfo(tokenId), [ name,
      story,
      coordsString ]
    );
    });
  });

  describe("can check if a star exists", () => {
    let name = "New star",
      story = "Amazing demo star story, building this project was fun",
      dec = "dec_121.874",
      mag = "mag_245.978",
      cent = "dec_121.874",
      tokenId = 1;
    (coordsString = dec), mag, cent;
    beforeEach(async () => {
      // creates star with the provided name, and tokenId, for the first account.
      await this.contract.createStar(name, story, dec, mag, cent, tokenId, {
        from: accounts[0]
      });
    });

    it("can check if a star exists, testing exist case", async () => {
      // merges all coords together to enforce uniqueness

      assert.equal(await this.contract.checkIfStarExists(coordsString), true);
    });

    it("can check if a star exists, testing non exist case", async () => {
      // merges all coords together to enforce uniqueness
      let coordsString = "random string";

      assert.equal(await this.contract.checkIfStarExists(coordsString), false);
    });
  });

  describe("buying and selling stars", () => {
    let user1 = accounts[1];
    let user2 = accounts[2];

    let starId = 1;

    // this must be set in wei, smallest denominator of ether

    // this function takes the first argument's value, vs the second argument's token cost
    // .toWei() converts to wei, can convert to many other unit types
    let starPrice = web3.toWei(0.01, "ether");

    beforeEach(async () => {
      let name = "New star",
        story = "Amazing demo star story, building this project was fun",
        dec = "dec_121.874",
        mag = "mag_245.978",
        cent = "cent_121.874",
        tokenId = 1;

      // creates star with the provided name, and tokenId, from the first account.
      await this.contract.createStar(name, story, dec, mag, cent, tokenId, {
        from: user1
      });
    });

    describe("user1 can sell a star", () => {
      it("user1 can put up their star for sale", async () => {
        await this.contract.putStarUpForSale(starId, starPrice, {
          from: user1
        });
        assert.equal(await this.contract.starsForSale(starId), starPrice);
      });

      it("user1 gets the funds after selling a star", async () => {
        let starPrice = web3.toWei(0.05, "ether");

        await this.contract.putStarUpForSale(starId, starPrice, {
          from: user1
        });

        let balBefTrans = web3.eth.getBalance(user1);
        await this.contract.buyStar(starId, { from: user2, value: starPrice });
        let balAftTrans = web3.eth.getBalance(user1);

        // checks balanceBeforeTransaction + starPrice = balanceAfterTransaction
        // ensures user1 is awarded with the value of the price of the star, after the star is sold
        assert.equal(
          balBefTrans.add(starPrice).toNumber(),
          balAftTrans.toNumber()
        );
      });
    });

    it("user1 can put up their star for sale", async () => {
      // puts star up for sale, function REQUIRES the seller to be the OWNER of the star
      // this is possible via the mapping created on ERC721Token/line14
      // mappings are SUPER important for data consistency!
      await this.contract.putStarUpForSale(starId, starPrice, { from: user1 });

      // checks that the star is for sale by checking the price vs the stars
      assert.equal(await this.contract.starsForSale(starId), starPrice);
    });

    describe("user2 can buy a star that was put up for sale", () => {
      beforeEach(async () => {
        await this.contract.putStarUpForSale(starId, starPrice, {
          from: user1
        });
      });

      it("user2 is the owner of the star after they buy it", async () => {
        // buys star, sends transaction object with user2 address, and value for star
        await this.contract.buyStar(starId, { from: user2, value: starPrice });
      });

      it("user2 correctly has their balance changed", async () => {
        let overpaidAmount = web3.toWei(0.05, "ether");

        // another helper function of web3, gets the balance of the currency
        // under the user's account
        const balPreTrans = web3.eth.getBalance(user2);

        await this.contract.buyStar(starId, {
          from: user2,
          value: overpaidAmount,
          gasPrice: 0
        });

        // this is expected to be ~.04, since the star price is .01 wei
        // the buyStar function returns the extra value
        const balAftTrans = web3.eth.getBalance(user2);

        // checks balanceBeforeTransaction - BalanceAfterTransaction = starPrice
        // returns true if user is refunded for any extra value sent to the buyStar
        assert.equal(balPreTrans.sub(balAftTrans), starPrice);
      });
    });
  });
});
