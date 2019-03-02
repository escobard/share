import React, { Component } from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

import {fields} from "./constants"

class App extends Component {
  // TODO add state to handle form display here
  // TODO need to add state to handle the donation ID

  // TODO need to create a function to handle the display of forms based on fetch status
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
