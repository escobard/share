import React, { Component } from "react";
import axios from "axios";

import Navigation from "./components/Navigation";
import Form from "./components/Form";
import DonationTable from "./components/DonationTable";

import "./styles/global.scss";

import {
  makeDonationFields,
  fetchDonationFields,
  apiRoutes,
  headers
} from "./constants";

import { makeDonation, makeDonationStatus } from "./utils/requests";

class App extends Component {
  state = {
    messageErrors: [],
    makeDonationTitle: "Make Donation form instructions",
    makeDonationMessage:
      "Enter a valid public key in the Address Public field, the public address' private key in the Private Key field, and an ether value smaller than 1 in the Amount field.",
    makeDonationStatus: null,
    fetchDonationTitle: "Fetch Donation form instructions",
    fetchDonationMessage:
      "Enter a valid donor public key in the Address Public field and a valid donationID in the donationID field.",
    fetchDonationStatus: null,
    donationID: false,
    donorAddress: false,
    fetchedDonation: false,
    formMessage: "",
    time: 0,
    isOn: false,
    start: 0
  };

  /** Triggers logic to start the timer
   * @name startTimer
   * @dev every second checkStatus request is triggered, to check donationStatus from API
   **/

  startTimer = async () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });

    this.timer = setInterval(async () => await this.checkStatus(), 1000);
  };

  /** Triggers logic to stop the timer
   * @name stopTimer
   **/

  stopTimer = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  };

  /** Triggers logic to stop the timer
   * @name resetTimer
   **/

  resetTimer = () => {
    this.setState({ time: 0, isOn: false });
  };

  /** Sends GET request to API to check donationStatus
   * @name checkStatus
   * @dev refer to the /makeDonationStatus route within the API request handling logic
   * @returns this.resetTimer || this.setState || err
   **/

  checkStatus = async () => {
    let response = await makeDonationStatus();

    // ends the timer if donation has been created.
    if (response.data.result === "created") {
      this.stopTimer();

      let {
        data: { result, status, donationID }
      } = response;

      this.setState({
        donationStatus: result,
        donationID: donationID,
        makeDonationTitle: "makeDonation() success",
        makeDonationMessage:
          `Time spent creating donation: ${this.state.time} seconds. ` + status,
        makeDonationStatus: "green"
      });
      return this.resetTimer();
    } else {
      return this.setState({
        time: this.state.time + 1,
        donationStatus: response.data.result,
        makeDonationTitle: "makeDonation() started",
        makeDonationMessage:
          "Donation Validated! " +
          `Time spent creating donation: ${this.state.time} seconds. `,
        makeDonationStatus: "blue"
      });
    }
  };

  /** Submits the donation POST request to the API
   * @name makeDonation
   * @dev this requests triggers the timer, and checkStatus logic
   * @param {string} address_pu, contains public address form field value
   * @param {string} private_key, contains private address form field value
   * @param {string} amount, contains amount form field value
   * @returns /makeDonation route response, or validation errors
   **/

  makeDonation = async (address_pu, private_key, amount) => {
    let { messageErrors } = this.state;

    amount = parseFloat(amount);

    // triggers validation logic
    this.validateMakeDonation(address_pu, private_key, amount);

    // only runs request, if no validation errors are present
    if (messageErrors.length === 0) {

      const request = {
        address_pu: address_pu.toUpperCase(),
        address_pr: private_key,
        amount: amount
      }

      let response = await makeDonation(request);

      // checks for API validation errors
      if (response.data.errors){

        let { status, errors } = response;

        const message = `API rejection: ${status} ${errors}`;

        return this.setState({
          makeDonationTitle: "makeDonation() error(s)",
          makeDonationMessage: message,
          makeDonationStatus: "red"
        });
      }
      // checks for API promise rejections
      else if(!response.data){
        return this.setState({
          makeDonationTitle: "makeDonation() error(s)",
          makeDonationMessage: response,
          makeDonationStatus: "red"
        });
      }
      // checks for success cases
      else if(response.data.result === 'validated'){
        const { data: { status } } = response;

        this.setState({
          donorAddress: address_pu,
          makeDonationTitle: "makeDonation() started",
          makeDonationMessage: status,
          makeDonationStatus: "blue"
        });

        // starts logic to check for donationStatus
        return this.startTimer();
      }
    }
  };

  /** Submits the fetch donation POST request to the API
   * @devs this function returns the fetched donation object from ethereum, via the API
   * @param {string} address_pu, contains public address form field value
   * @param {string} donationID, contains amount form field value
   * @returns /fetchDonation route response, or validation errors
   **/

  fetchDonation = (address_pu, donationID) => {
    let { messageErrors } = this.state;

    donationID = parseInt(donationID);

    this.validateFetchDonation(address_pu, donationID);

    if (messageErrors.length === 0) {
      axios
        .post(
          apiRoutes.fetchDonation,
          { address_pu: address_pu, id: donationID },
          { headers }
        )
        .then(response => {
          let { data } = response;

          // donation object from ethereum is turned into an array to work with react
          let donationArray = Object.keys(data).map(key => {
            return [key, data[key]];
          });

          return this.setState({
            fetchedDonation: donationArray,
            fetchDonationTitle: "fetchDonation() success",
            fetchDonationMessage: `Donation fetched, find your donation data below.`,
            fetchDonationStatus: "green"
          });
        })
        .catch(error => {
          let errors;
          let status;
          let message;

          // checks for api validation error
          if (error.response) {
            errors = error.response.data.errors;
            status = error.response.data.status;
            message = `API rejection: ${status} ${errors}`;
            console.log(
              "fetchDonation error response:",
              error.response.data.errors
            );
          } else {
            message = `API rejection: ${error}`;
          }

          return this.setState({
            fetchDonationTitle: "fetchDonation error(s)",
            fetchDonationMessage: message,
            fetchDonationStatus: "red"
          });
        });
    }
  };

  /** Validates a form value
   * @dev can be split out into a validation class to re-use in api / ui layers
   * @param {*} value, property to validate
   * @param {*} condition, functional condition to validate / invalidate value
   * @param {string} error, string of error to add to this.state.errors
   **/

  validateField = (value, condition, error) => {
    if (condition) {
      this.setState({ messageErrors: this.state.messageErrors.push(error) });
    }
  };

  /** Resets the message array after form validation checks
   * @returns this.setState()
   **/

  emptyErrors = () => {
    this.setState({
      messageErrors: []
    });
  };

  /** Validates makeDonation form values
   * @name validateMakeDonation
   * @dev used to reduce clutter in makeDonation
   * @param {string} address_pu, contains public address form field value
   * @param {string} private_key, contains private address form field value
   * @param {string} amount, contains amount form field value
   **/

  validateMakeDonation = (address_pu, private_key, amount) => {
    let { messageErrors } = this.state;

    this.validateField(
      address_pu,
      address_pu.length !== 42,
      "Address Public must be valid public key"
    );

    this.validateField(
      private_key,
      private_key.length !== 64,
      " Address Private must be valid private key"
    );

    this.validateField(amount, isNaN(amount), " Amount must be a number");

    this.validateField(
      amount,
      amount > 1,
      " Amount cannot be more than 1 ether"
    );

    // sets messagesState
    if (messageErrors.length > 0) {
      // TODO - get rid of setMessage and start using setState once at parent
      this.setState({
        makeDonationStatus: "red",
        makeDonationTitle: "makeDonation() error(s)",
        makeDonationMessage: `Contains the following error(s): ${messageErrors.join()}.`
      });
      this.emptyErrors();
    } else {
      this.setState({
        makeDonationStatus: "green",
        makeDonationTitle: "makeDonation() validated",
        makeDonationMessage: `Making donation...`
      });
    }
  };

  /** Validates validateFetchDonation form values
   * @name validateFetchDonation
   * @dev used to reduce clutter in makeDonation
   * @param {string} address_pu, contains public address form field value
   * @param {string} donationID, contains amount form field value
   **/
  validateFetchDonation = (address_pu, donationID) => {
    let { messageErrors } = this.state;

    this.validateField(
      address_pu,
      address_pu.length !== 42,
      "Address Public must be valid public key"
    );

    this.validateField(
      donationID,
      isNaN(donationID),
      " Amount must be a number"
    );

    if (messageErrors.length > 0) {
      this.setState({
        fetchDonationStatus: "red",
        fetchDonationTitle: "fetchDonation() error(s)",
        fetchDonationMessage: `Contains the following error(s): ${messageErrors.join()}.`
      });
      this.emptyErrors();
      return;
    } else {
      this.setState({
        fetchDonationStatus: "blue",
        fetchDonationTitle: "fetchDonation() started",
        fetchDonationMessage: `Fetching donation...`
      });
    }
  };

  render() {
    let {
      makeDonationTitle,
      makeDonationMessage,
      makeDonationStatus,
      fetchDonationTitle,
      fetchDonationMessage,
      fetchDonationStatus,
      fetchedDonation
    } = this.state;

    return (
      <main className="application">
        <Navigation />
        <section className="float">
          <Form
            makeDonation={this.makeDonation}
            fields={makeDonationFields}
            messageHeader={makeDonationTitle}
            messageValue={makeDonationMessage}
            messageStatus={makeDonationStatus}
            setMessage={this.setMessage}
          />
        </section>

        <section className="float">
          <Form
            fetchDonation={this.fetchDonation}
            fields={fetchDonationFields}
            messageHeader={fetchDonationTitle}
            messageValue={fetchDonationMessage}
            messageStatus={fetchDonationStatus}
            setMessage={this.setMessage}
          />
        </section>

        {fetchedDonation ? (
          <section className="float">
            <DonationTable donationData={fetchedDonation} />
          </section>
        ) : null}

        <footer> Copyright &copy; 2019, git@escobard</footer>
      </main>
    );
  }
}

export default App;
