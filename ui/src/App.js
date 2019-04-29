import React, { Component } from "react";
import axios from "axios";

import Navigation from "./components/Navigation";
import Form from "./components/Form";
import DonationTable from "./components/DonationTable";

import "./styles/global.scss";

import {
  makeDonationFields,
  fetchDonationFields,
  apiRoutes
} from "./constants";

const headers = { "Access-Control-Allow-Origin": "*" };

class App extends Component {

  state = {
    // TODO setting to true to always display fetch form in case reviewer does not want to make a donation
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

  startTimer = async () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    let donationStatus = await this.checkStatus();
    console.log('donationStatus', donationStatus);
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start,
      donationStatus: ''
    }), 3);
  };

  stopTimer= () => {
    this.setState({isOn: false})
    clearInterval(this.timer)
  };

  resetTimer = () => {
    this.setState({time: 0, isOn: false})
  };

  checkStatus = () =>{
    axios
      .get(apiRoutes.makeDonationStatus, { headers})
      .then(response =>{
        console.log('RESPONSE', response)
        return response;
      })
  }

  /** Submits the donation POST request to the API
   * @param {object} request, contains all request data
   **/

  makeDonation = request => {
    // TODO this value must be improved for v2, address is validated through first form, which then gives the user access to the second form, which will be either a makeDonation form, or a grant access to fetchDonation if the user's address has already created a donation, need to implement this logic in all layers

    // TODO - refactor into constants


    axios
      .post(apiRoutes.makeDonation, request, { headers })
      .then(response => {
        let { data } = response;

        console.log("makeDonation API response: ", data);

        /* will need this for final case
                this.setState({
          donationID: data,
          donorAddress: request.address_pu,
          makeDonationTitle: "makeDonation() success",
          makeDonationMessage: `Donation created! Here is your donation's ID: ${data}`,
          makeDonationStatus: "green"
        });
        */
        this.setState({
          donationID: data,
          donorAddress: request.address_pu,
          makeDonationTitle: "makeDonation() success",
          makeDonationMessage: data.status,
          makeDonationStatus: null
        });
        this.startTimer();
      })
      .catch(error => {

        let errors;
        let status;
        let message;

        // checks for api validation error
        if (error.response){
          errors = error.response.data.errors;
          status = error.response.data.status;
          message = `API rejection: ${status} ${errors}`
          console.log("makeDonation error response:",  error.response.data.errors);
        }
        else{
          message = `API rejection: ${error}`
        }

        this.setState({
          makeDonationTitle: "makeDonation() error(s)",
          makeDonationMessage: message,
          makeDonationStatus: "red"
        });
      });
  };

  /** Submits the fetch donation POST request to the API
   * @param {object} request, contains all request data
   **/

  fetchDonation = request => {
    let headers = { "Access-Control-Allow-Origin": "*" };
    axios
      .post(apiRoutes.fetchDonation, request, { headers })
      .then(response => {
        let { data } = response;

        // needs to be turned into a usable array of data to work with react
        let donationArray = Object.keys(data).map(key => {
          return [key, data[key]];
        });

        console.log("fetchDonation API response: ", response.data);
        this.setState({
          fetchedDonation: donationArray,
          fetchDonationTitle: "fetchDonation success",
          // donationId logic here needs to be revised, should grab donationId from fetched donation.
          fetchDonationMessage: `Donation fetched, find your donation data below.`,
          fetchDonationStatus: "green"
        });


      })
      .catch(error => {

        let errors;
        let status;
        let message;

        // checks for api validation error
        if (error.response){
          errors = error.response.data.errors;
          status = error.response.data.status;
          message = `API rejection: ${status} ${errors}`
          console.log("fetchDonation error response:", error.response.data.errors);
        }
        else{
          message = `API rejection: ${error}`
        }

        this.setState({
          fetchDonationTitle: "fetchDonation error(s)",
          fetchDonationMessage: message,
          fetchDonationStatus: "red"
        });

      });
  };

  /** Sets the message value after form validation checks
   * @param {string} formName, name of the form to update parent state
   * @param {string} state, state of message component
   * @param {string} header, message header string
   * @param {string} content, message content string
   **/

  setMessage = (formName, state, header, content) => {
    switch (formName) {
      case 'makeDonation':{
        return this.setState({
          makeDonationStatus: state,
          makeDonationTitle: header,
          makeDonationMessage: content,
        });
      }
      case 'fetchDonation':{
        return this.setState({
          fetchDonationStatus: state,
          fetchDonationTitle: header,
          fetchDonationMessage: content,
        });
      }
      default: {
        return;
      }
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
      donationID,
      fetchedDonation
    } = this.state;

    // console.log("App state", this.state);
    return (
      <main className="application">
        <Navigation />
        <section className="float">
          <Form
            makeDonation={this.makeDonation}
            fields={makeDonationFields}
            donationID={donationID}
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
