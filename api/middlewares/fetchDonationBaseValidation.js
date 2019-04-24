const Validation = require("../utils/validation");

/** Utility to validate null request values
 * @dev split apart from ether address validation, to fail fast if null
 */
module.exports = async (req, res, next) => {
  let { address_pu,  } = req.body;
  let validation = new Validation();

  // null case values validation
  validation.exists(address_pu, "Public address must exist");
  validation.exists(id, " ID must exist");

  // rejects request in case of null values
  let nullErrors = validation.getErrors();

  if (nullErrors.length >= 1) {
    console.error("Null validation errors:", nullErrors);
    return res.status(400).json({
      status: "Null validation errors:",
      errors: nullErrors.join()
    });
  }

  // data type validation
  validation.isString(address_pu, "Public address must be a string");
  validation.isNumber(id, " ID must be a number");

  let dataTypeErrors = validation.getErrors();

  if (dataTypeErrors.length >= 1) {
    console.error("Data type validation errors:", dataTypeErrors);
    return res.status(400).json({
      status: "Data type validation errors:",
      errors: dataTypeErrors.join()
    });
  }

  // business logic validation
  validation.exactLength(
    address_pu,
    42,
    "Public address must contain exactly 42 characters"
  );

  validation.customValidation(id === 0, " Donation ID must be greater than 0");

  let businessErrors = validation.getErrors();

  if (businessErrors.length >= 1) {
    console.error("Business Logic validation errors:", businessErrors);
    return res.status(400).json({
      status: "Business Logic validation errors:",
      errors: dataTypeErrors.join()
    });
  }

  next();
};
