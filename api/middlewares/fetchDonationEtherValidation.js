const Validation = require("../utils/validation");

/** Utility to validate null request values
 * @dev split apart from ether address validation, to fail fast if null
 */
module.exports = async (req, res, next) => {
  let {
    body: { address_pu, id },
    web3,
    accounts: { owner_pu },
    share
  } = req;

  // setting address to lowercase, to avoid validation errors

  let validation = new Validation();

  let donationID = await share.methods.fetchDonationID.call({
    from: owner_pu
  });

  await validation.isValidPublic(address_pu, web3, "Public address is invalid");
  await validation.customValidation(
    id >= donationID,
    " DonationID does not exist"
  );

  let etherErrors = validation.getErrors();

  if (etherErrors.length >= 1) {
    console.error("Ether validation errors:", etherErrors);
    return res.status(400).json({
      status: "Ether validation errors:",
      errors: etherErrors.join()
    });
  }

  // handles ether business logic
  let donation = await share.methods.fetchDonation(id).call({ from: owner_pu });
  console.log('DONATION', donation.donor === address_pu);

// adding 3 seperate validation cases, custom validation only handles a SINGLE boolean
  await validation.customValidation(
    address_pu !== donation.donor,
    "Public address provided must exist within fetched donation"
  );

  await validation.customValidation(
    address_pu !== donation.donor,
    " Public address provided must exist within fetched donation"
  );


  await validation.customValidation(
    address_pu !== donation.charity,
    " Public address provided must exist within fetched donation"
  );
  console.log('ADDRESS / ID', address_pu, id)
  let etherBusinessErrors = validation.getErrors();

  // if only 2 errors are thrown, that means that 1/3 addresses is within the returned donation
  if (etherBusinessErrors.length === 3) {
    console.error("Ether business validation errors:", etherErrors);
    return res.status(400).json({
      status: "Ether business validation errors:",
      errors: "Public address provided must exist within fetched donation"
    });
  }

  next();
};
