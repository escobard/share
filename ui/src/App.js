import React, { Component, Fragment } from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

import { makeDonationFields, fetchDonationFields } from "./constants";

class App extends Component {
  state = {
    donationID: false,
    fetchedDonation: false
  };

  makeDonation = donationID => {
    this.setState({ donationID });
  };

  fetchDonation = fetchedDonation => {
    this.setState({ fetchedDonation });
  };

  // TODO DonationID fetches should trigger a state update here to display fetchDonation form

  render() {
    let { donationID, fetchedDonation } = this.state;

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
