
/** Utility to validate request values
 * @dev add methods as necessary, keep as simple and re-usable as possible
 */

class Validation{
  constructor(){
    this.errors = [];
  }

  /** Checks if a value exists
   * @param {*} value, property to validate
   * @param {string} error, error added to the errors array
   */

  exists(value, error){
    if (value === null || undefined){
      this.setError(error);
    }
  }

  /** Checks if a value is a string
   * @param {string} value, property to validate
   * @param {string} error, error added to the errors array
   */
  isString(value, error){
    if (typeof value !== 'string'){
      this.setError(error)
    }
  }

  /** Checks if a value is a number
   * @param {string} value, property to validate
   * @param {string} error, error added to the errors array
   */
  isNumber(value, error){
    if (typeof value !== 'number'){
      this.setError(error)
    }
  }
  /** Checks if a value exists
   * @param {string} public_address, ether public address hash to validate
   * @param {function} web3, web3 instance to validate public address
   * @param {string} error, error added to the errors array
   */
  async isValidPublic(public_address, web3, error){

    let validateAddress = web3.utis.isAddress(public_address);

    if (validateAddress === false){
      this.setError(error);
    }

  }

  /** Adds errors to this.errors
   * @param {string} error, error added to the errors array
   */

  setError(error){
    this.errors.push(error)
  }

  /** Returns errors array
   * @returns {string[]}, validationErrors
   */

  getErrors(){
    return this.errors;
  }

  /** Clears errors array
   * @return {[]}, clears validation array
   */
  clearErrors(){
    this.errors = [];
  }
}


module.exports=Validation;