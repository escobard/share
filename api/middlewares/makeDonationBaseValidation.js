const Validation = require("../utils/validation");

/** Utility to validate null request values
 * @dev split apart from ether address validation, to fail fast if null
 */
module.exports = async (req, res, next) => {
  let {address_pu, address_pr, amount} = req.body;
  let validation = new Validation();
  let {exists, getErrors, clearErrors} = validation;

  // null case values validation
  exists(address_pu, 'Public address must exist');
  exists(address_pr, ' Private address must exist');
  exists(amount, ' Amount must exist');

  // rejects request in case of null values
  let nullErrors = getErrors();

  if (nullErrors.length >= 1){
    res.status(400).json({
      status: 'No null values allowed',
      errors: nullErrors.join()
    });
  }

  next();
};