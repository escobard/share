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
   * @dev refer to the /makeDonationStatus route within the API request handling logic
   * @name checkStatus
   * @returns this.resetTimer || this.setState || err
   **/

  checkStatus = async () => {
    await axios
      .get(apiRoutes.makeDonationStatus, { headers })
      .then(response => {
        // console.log('RESPONSE', response)

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
              `Time spent creating donation: ${this.state.time} seconds. ` +
              status,
            makeDonationStatus: "green"
          });
          return this.resetTimer();
        }

        return this.setState({
          time: this.state.time + 1,
          donationStatus: response.data.result,
          makeDonationTitle: "makeDonation() started",
          makeDonationMessage:
            "Donation Validated! " +
            `Time spent creating donation: ${this.state.time} seconds. `,
          makeDonationStatus: "blue"
        });
      })
      .catch(err => {
        return err;
      });
  };

  /** Submits the donation POST request to the API
   * @dev this requests triggers the timer, and checkStatus logic
   * @param {object} request, contains all request data
   * @returns this.startTimer() || this.setState()
   **/

  makeDonation = (value0, value1, value2) => {

    let { messageErrors } = this.state;

    value2 = parseFloat(value2);

    this.validateField(
      value0,
      value0.length !== 42,
      "Address Public must be valid public key"
    );

    this.validateField(
      value1,
      value1.length !== 64,
      " Address Private must be valid private key"
    );

    this.validateField(value2, isNaN(value2), " Amount must be a number");

    this.validateField(
      value2,
      value2 > 1,
      " Amount cannot be more than 1 ether"
    );

    // sets messagesState
    if (messageErrors.length > 0) {
      // TODO - get rid of setMessage and start using setState once at parent
      this.setMessage(
        "makeDonation",
        "red",
        "makeDonation() error(s)",
        `Contains the following error(s): ${messageErrors.join()}.`
      );
      this.emptyErrors();
      return;
    } else {
      this.setMessage(
        "makeDonation",
        "green",
        "makeDonation() validated",
        `Making donation...`
      );
    }

    let request = {
      address_pu: value0.toUpperCase(),
      address_pr: value1,
      amount: value2
    };

    // TODO - refactor the promise logic to an util
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
  };

  /** Submits the fetch donation POST request to the API
   * @devs
   * @param {object} request, contains all request data
   * @returns this.setState()
   **/

  fetchDonation = request => {

    axios
      .post(apiRoutes.fetchDonation, request, { headers })
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
  };

  // TODO - get rid of this entire function, redundant
  /** Sets the message value after form validation checks
   * @param {string} formName, name of the form to update parent state
   * @param {string} state, state of message component
   * @param {string} header, message header string
   * @param {string} content, message content string
   **/

  setMessage = (formName, state, header, content) => {
    switch (formName) {
      case "makeDonation": {
        return this.setState({
          makeDonationStatus: state,
          makeDonationTitle: header,
          makeDonationMessage: content
        });
      }
      case "fetchDonation": {
        return this.setState({
          fetchDonationStatus: state,
          fetchDonationTitle: header,
          fetchDonationMessage: content
        });
      }
      default: {
        return;
      }
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

  render() {

    let {
      makeDonationTitle,
      makeDonationMessage,
      makeDonationStatus,
      fetchDonationTitle,
      fetchDonationMessage,
      fetchDonationStatus,
      donationID,
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
