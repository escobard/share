const Validation = require("../utils/validation");

/** Utility to validate null request values
 * @dev split apart from ether address validation, to fail fast if null
 */
module.exports = async (req, res, next) => {
  let {address_pu, address_pr, web3} = req.body;
  let validation = new Validation();

  await validation.isValidPublic(address_pu, web3, 'Public address is invalid');
  await validation.isValidPair(address_pr, address_pu, 'Private Key is invalid');

  let etherErrors = validation.getErrors();

  if (etherErrors.length >= 1){
    return res.status(400).json({
      status: 'Ether errors:',
      errors: etherErrors.join()
    });
  }

  next();
};