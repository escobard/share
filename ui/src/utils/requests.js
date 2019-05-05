import axios from "axios";
import { apiRoutes, headers } from "../constants";

/** Sends GET request to API to check donationStatus
 * @dev refer to the /makeDonationStatus route within the API request handling logic
 * @name makeDonationStatus
 * @return unresolved promise
 **/

export const makeDonationStatus = async () => {
  try{
    return await axios.get(apiRoutes.makeDonationStatus, { headers });
  }
  catch(err){
    return err;
  }

};

/** Sends POST request to API to makeDonation
 * @dev refer to the /makeDonation route within the API request handling logic
 * @name makeDonation
 * @return unresolved promise
 **/
export const makeDonation = async request => {
  try{
    return await axios.post(apiRoutes.makeDonation, request, { headers });
  }
  catch(err){
    return err;
  }
};
