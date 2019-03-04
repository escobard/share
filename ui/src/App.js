import React, { Component, Fragment } from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

import { makeDonationFields, fetchDonationFields } from "./constants";

class App extends Component {
  state = {
    donationID: false,
    donorAddress: false,
    fetchedDonation: false
  };

  makeDonation = (donationID, donorAddress) => {
    // TODO this value must be improved for v2.0, address is validated through first form, which then gives the user access to the second form, which will be either a makeDonation form, or a grant access to fetchDonation if the user's address has already created a donation, need to implement this logic in all layers
    this.setState({ donationID, donorAddress });
  };

  fetchDonation = donation => {

    // needs to be turned into a usable array of data to work with react
    var donationArray = Object.keys(donation).map((key) => {
      return [key, donation[key]];
    });

    this.setState({ fetchedDonation: donationArray});
  };

  // TODO DonationID fetches should trigger a state update here to display fetchDonation form

  render() {
    let { donationID, donorAddress, fetchedDonation } = this.state;

    console.log("PARENT", this.state.donationID);
    return (
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <section>
          <ShareForm
            makeDonation={this.makeDonation}
            name={"make"}
            fields={makeDonationFields}
          />
          {donationID ? (
            <Fragment>
              <p>DonationID: {donationID}</p>
              <ShareForm
                fetchDonation={this.fetchDonation}
                name={"fetch"}
                fields={fetchDonationFields}
                donorAddress={donorAddress}
              />
              {fetchedDonation ? (
                <p>Donation data: {fetchedDonation}</p>
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
