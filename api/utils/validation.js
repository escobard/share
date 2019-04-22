const Wallet = require('ethereumjs-wallet');

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

  /** Checks if a value is a number
   * @param {string} value, property to validate
   * @param {int} length, exact length expected
   * @param {string} error, error added to the errors array
   */

  exactLength(value, length, error){
    if (value.length !== length){
      this.setError(error)
    }
  }

  /** Custom validation function
   * @param {function} condition, must return true to trigger error case
   * @param {string} error, error added to the errors array
   */

  customValidation(condition, error){
    if (condition){
      this.setError(error)
    }
  }

  /** Checks if public address is valid ether address
   * @param {hash} public_address, ether public address hash to validate
   * @param {function} web3, web3 instance to validate public address
   * @param {string} error, error added to the errors array
   */

  async isValidPublic(public_address, web3, error){

    console.log("WEB3", web3)

    let validateAddress = await web3.utils.isAddress(public_address);

    if (validateAddress === false){
      this.setError(error);
    }

  }

  /** Checks if valid public / key value pair
   * @dev this may be very valuable to some
   * @param {hash} private_address, ether private address to create wallet
   * @param {hash} public_address, ether public address to validate pair
   * @param {string} error, error added to the errors array
   */

  async isValidPair(private_address, public_address, error){

    // converts private address to hex buffer (needed for wallet generation)
    const rawPrivate = Buffer.from(private_address, hex);

    const tempWallet = Wallet.fromPrivateKey(rawPrivate);

    const uncompressedPublic = tempWallet.getPublicKeyString();

    // this needs to be heavily debugged, expecting public compressed vs uncompressed theory to be accurate
    if (!uncompressedPublic.includes(public_address)){
      this.setError(error)
    }
  }

  /** Adds new a error to this.errors
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