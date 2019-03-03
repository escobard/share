import React, {Component, Fragment} from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

import {fields} from "./constants"

class App extends Component {
  state={
    donationID: false
  }

  // TODO DonationID fetches should trigger a state update here to display fetchDonation form

  makeDonation = (donationID) =>{
    this.setState({donationID})
  }

  render() {

    let { donationID } = this.state

    console.log('PARENT',this.state.donationID)
    return (
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <section>
            <ShareForm makeDonation={this.makeDonation} name={'make'} fields={fields}/>

          {donationID ? (
            <p>DonationID: {donationID}</p>
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
