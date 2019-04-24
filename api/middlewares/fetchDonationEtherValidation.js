const Validation = require("../utils/validation");

/** Utility to validate null request values
 * @dev split apart from ether address validation, to fail fast if null
 */
module.exports = async (req, res, next) => {
  let {body: {address_pu, id }, web3, accounts: { owner_pu }, share } = req;
  let validation = new Validation();

  let donationID = await share.methods.fetchDonationID.call({
    from: owner_pu
  });

  await validation.isValidPublic(address_pu, web3, 'Public address is invalid');
  await validation.customValidation(id >= donationID , ' Donation does not exist')

  let etherErrors = validation.getErrors();

  if (etherErrors.length >= 1){
    console.error("Ether validation errors:", etherErrors);
    return res.status(400).json({
      status: 'Ether validation errors:',
      errors: etherErrors.join()
    });
  }

  next();
};