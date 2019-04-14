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