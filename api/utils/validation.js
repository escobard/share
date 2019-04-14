/** Utility to validate request values
 * @dev add methods as necessary, keep as simple and re-usable as possible
 */

class Validation{
  constructor(){
    this.validationErrors = [];
  }

  /** Checks if a value exists
   * @param {*} value, property to validate
   * @param {string} error, error added to the errors array
   */

  exists(value, error){

  }

  /** Checks if a value exists
   * @param {*} value, property to validate
   * @param {string} error, error added to the errors array
   */

  set errors(error){
    this.errors.push(error)
  }

  get errors(){

    // set to stop endless get loop cases
    if (this.validationErrors === []) {
      return this.validationErrors;
    }

    return this.validationErrors;
  }

}


module.exports=Validation;