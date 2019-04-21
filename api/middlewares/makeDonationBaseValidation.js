const Validation = require("../utils/validation");

/** Utility to validate null request values
 * @dev split apart from ether address validation, to fail fast if null
 */
module.exports = async (req, res, next) => {
  let { address_pu, address_pr, amount } = req.body;
  let validation = new Validation();
  let {
    exists,
    getErrors,
    isString,
    isNumber,
    exactLength,
    customValidation
  } = validation;

  // null case values validation
  exists(address_pu, "Public address must exist");
  exists(address_pr, " Private address must exist");
  exists(amount, " Amount must exist");

  // rejects request in case of null values
  let nullErrors = getErrors();

  if (nullErrors.length >= 1) {
    return res.status(400).json({
      status: "Null validation errors:",
      errors: nullErrors.join()
    });
  }

  // data type validation
  isString(address_pu, "Public address must be a string");
  isString(address_pr, " Private address must be a string");
  isNumber(amount, " Amount must be a number");

  let dataTypeErrors = getErrors();

  if (dataTypeErrors.length >= 1) {
    res.status(400).json({
      status: "Data type validation errors:",
      errors: dataTypeErrors.join()
    });
  }

  // business logic validation
  exactLength(
    address_pu,
    42,
    "Public address must contain exactly 42 characters"
  );
  exactLength(
    address_pr,
    64,
    " Private address must contain exactly 64 characters"
  );
  customValidation(amount > 1, " Amount cannot be greater than 1");

  let businessErrors = getErrors();

  if (businessErrors.length >= 1) {
    res.status(400).json({
      status: "Business Logic validation errors:",
      errors: dataTypeErrors.join()
    });
  }

  next();
};
