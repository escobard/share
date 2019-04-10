import React, { Component, Fragment } from "react";
import axios from "axios";

import Navigation from "./components/Navigation";
import Form from "./components/Form";
import DonationTable from "./components/DonationTable";

import "./App.css";

import { makeDonationFields, fetchDonationFields, apiRoutes } from "./constants";

class App extends Component {
  state = {

    // TODO setting to true to always display fetch form in case reviewer does not want to make a donation
    donationID: true,
    donorAddress: false,
    fetchedDonation: false,
    formMessage: ""
  };

  /** Submits the donation POST request to the API
   * @param {object} request, contains all request data
  **/

  makeDonation = (request) => {
    // TODO this value must be improved for v2.0, address is validated through first form, which then gives the user access to the second form, which will be either a makeDonation form, or a grant access to fetchDonation if the user's address has already created a donation, need to implement this logic in all layers

    // TODO - refactor into constants
    let headers = { "Access-Control-Allow-Origin": "*" };

    axios
      .post(
        apiRoutes.makeDonation,
        request,
        { headers }
      )
      .then(response => {
        let { data } = response

        console.log('makeDonation API response: ', data);
        this.setState({ donationID: data, donorAddress: request.address_pu });
      })
      .catch(error => {
        console.log(error);
      });


  };

  /** Submits the fetch donation POST request to the API
   * @param {object} request, contains all request data
   **/

  fetchDonation = request => {

    let headers = { "Access-Control-Allow-Origin": "*" };

    axios
      .post(
        apiRoutes.fetchDonation,
        request,
        { headers }
      )
      .then(response => {
        let { data } = response;

        // needs to be turned into a usable array of data to work with react
        let donationArray = Object.keys(data).map(key => {
          return [key, data[key]];
        });

        this.setState({ fetchedDonation: donationArray });

        console.log('fetchDonation APi response: ', response.data);
      })
      .catch(error => {
        console.log(error);
      });


  };

  render() {
    let { donationID, donorAddress, fetchedDonation } = this.state;

    console.log("PARENT", this.state);
    return (
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <section>
          <Form
            makeDonation={this.makeDonation}
            fields={makeDonationFields}
          />
          {donationID ? (
            <Fragment>
              <p>DonationID: {donationID}</p>
              <Form
                fetchDonation={this.fetchDonation}
                fields={fetchDonationFields}
              />
              {fetchedDonation ? (
                <DonationTable donationData={fetchedDonation}/>
              ) : (
                <p>Fetch your donation by ID using the form above</p>
              )}
            </Fragment>
          ) : (
            <p>Submit the form to create your donation!</p>
          )}
        </section>
        <footer>copyright 2019</footer>
      </div>
    );
  }
}

export default App;
