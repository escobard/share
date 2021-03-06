import axios from "axios";
import { apiRoutes, headers } from "../constants";

/** Sends GET request to API to check donationStatus
 * @dev refer to the /makeDonationStatus route within the API request handling logic
 * @name makeDonationStatus
 * @returns resolved promise || rejected promise
 **/

export const makeDonationStatus = async () => {
  try {
    return await axios.get(apiRoutes.makeDonationStatus, { headers });
  } catch (error) {
    return cleanError(error);
  }
};

/** Cleans up API / promise rejection errors for UI error display
 * @dev helper util created to avoid catch clutter
 * @name cleanError
 * @return string
 **/

const cleanError = error => {
  let errors;
  let status;
  let message;

  // checks for api validation error
  if (error.response) {
    errors = error.response.data.errors;
    status = error.response.data.status;
    message = `API rejection: ${status} ${errors}`;
    //console.log("makeDonation error response:",  error.response.data.errors);
  } else {
    message = `API rejection: ${error}`;
  }
  return message;
};

/** Sends POST request to API to makeDonation
 * @dev refer to the /makeDonation route within the API request handling logic
 * @name makeDonation
 * @returns resolved promise || rejected promise
 **/

export const makeDonation = async request => {
  return await axios
    .post(apiRoutes.makeDonation, request, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return cleanError(error);
    });
};

/** Sends POST request to API to fetchDonation
 * @dev refer to the /fetchDonation route within the API request handling logic
 * @name fetchDonation
 * @returns resolved promise || rejected promise
 **/

export const fetchDonation = async request => {
  return await axios
    .post(apiRoutes.fetchDonation, request, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return cleanError(error);
    });
};
