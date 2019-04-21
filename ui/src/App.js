import React, { Component } from "react";
import { Message } from "semantic-ui-react";
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

class App extends Component {
  state = {
    // TODO setting to true to always display fetch form in case reviewer does not want to make a donation
    makeDonationTitle: "Make Donation form instructions",
    makeDonationMessage:
      "Enter a valid public key in the Address Public field, the public address' private key in the Address Private field, and an ether value smaller than 1 in the Amount field.",
    fetchDonationTitle: "Fetch Donation form instructions",
    fetchDonationMessage:
      "Enter a valid donor public key in the Address Public field and a valid donationID in the donationID field.",
    donationID: false,
    donorAddress: false,
    fetchedDonation: false,
    formMessage: ""
  };

  /** Submits the donation POST request to the API
   * @param {object} request, contains all request data
   **/

  makeDonation = request => {
    // TODO this value must be improved for v2, address is validated through first form, which then gives the user access to the second form, which will be either a makeDonation form, or a grant access to fetchDonation if the user's address has already created a donation, need to implement this logic in all layers

    // TODO - refactor into constants
    let headers = { "Access-Control-Allow-Origin": "*" };

    axios
      .post(apiRoutes.makeDonation, request, { headers })
      .then(response => {
        let { data } = response;

        console.log("makeDonation API response: ", data);
        this.setState({
          donationID: data,
          donorAddress: request.address_pu,
          makeDonationTitle: "makeDonation() success",
          makeDonationMessage: `Donation created! Here is your donation's ID: ${data}`
        });

      })
      .catch(error => {

        console.log("makeDonation error response:", error);
        this.setState({
          makeDonationTitle: "makeDonation() error(s)",
          makeDonationMessage: `API rejection: ${error}`
        })
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

        this.setState({ fetchedDonation: donationArray });

        console.log("fetchDonation APi response: ", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let {
      makeDonationTitle,
      makeDonationMessage,
      fetchDonationTitle,
      fetchDonationMessage,
      donationID,
      fetchedDonation
    } = this.state;

    console.log("App state", this.state);
    return (
      <main className="application">
        <nav>
          <Navigation />
        </nav>

        <section className="float">
          <Form
            makeDonation={this.makeDonation}
            fields={makeDonationFields}
            donationID={donationID}
            messageHeader={makeDonationTitle}
            messageValue={makeDonationMessage}
          />
        </section>

        <section className="float">
          <Form
            fetchDonation={this.fetchDonation}
            fields={fetchDonationFields}
            messageHeader={fetchDonationTitle}
            messageValue={fetchDonationMessage}
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
