import axios from "axios";
import { apiRoutes, headers } from "../constants";

/** Sends GET request to API to check donationStatus
 * @dev refer to the /makeDonationStatus route within the API request handling logic
 * @name makeDonationStatus
 * @return unresolved promise
 **/

export const makeDonationStatus = async () => {
  return await axios.get(apiRoutes.makeDonationStatus, { headers });
};

export const makeDonation = async request => {
  return await axios.post(apiRoutes.makeDonation, request, { headers });
};
