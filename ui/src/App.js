import React, { Component } from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

import {fields} from "./constants"

class App extends Component {

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
