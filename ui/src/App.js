import React, { Component } from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

import {fields} from "./constants"

class App extends Component {

  // TODO DonationID fetches should trigger a state update here to display fetchDonation form
  render() {

    return (
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <section>
            <ShareForm fields={fields}/>
        </section>
        <footer>copyright 2019</footer>
      </div>
    );
  }
}

export default App;
