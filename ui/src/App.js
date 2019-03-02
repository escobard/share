import React, { Component } from "react";

import "./App.css";

import Navigation from "./components/Navigation";
import ShareForm from "./components/ShareForm";

let fields = [{ name: 'name', label: 'label', placeholder: 'placeholder', value: '', error: false },{ name: 'name', label: 'label', placeholder: 'placeholder', value: '', error: false }];

// TODO add state to handle form display here
class App extends Component {

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
