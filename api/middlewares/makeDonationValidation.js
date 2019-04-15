const Validation = require("../utils/validation");

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

  // existing value validation

  // rejects request in case of invalid values

  next();
};