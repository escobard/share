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
/*
export const makeDonation = async () => {
  axios
    .post(apiRoutes.makeDonation, request, { headers })
    .then(response => {
      let { data } = response;

      this.setState({
        donationID: data,
        donorAddress: request.address_pu,
        makeDonationTitle: "makeDonation() started",
        makeDonationMessage: data.status,
        makeDonationStatus: "blue"
      });

      // starts logic to check for donationStatus
      return this.startTimer();
    })
    .catch(error => {
      // TODO - refactor this into its own function

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

      return this.setState({
        makeDonationTitle: "makeDonation() error(s)",
        makeDonationMessage: message,
        makeDonationStatus: "red"
      });
    });
}; */
