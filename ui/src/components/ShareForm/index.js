import React, { Component, Fragment } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

import { apiRoutes } from "../../constants";

class ShareForm extends Component {
  componentWillMount() {
    let { fields } = this.props;

    if (fields) {
      this.setState({ hasFields: true });

      fields.map((field, index) => {
        this.inputState(field, index);
      });
    }

    this.setState({ field2: "TEST" });
  }

  // purely used to test mounted values for now
  componentDidMount() {
    console.log(this.state);
  }

  submitForm = formName => {
    let parent = this;
    let { value0, value1 } = this.state;

    // TODO make a switch statement to handle both form cases

    // TODO consider refactoring this to a helper file
    axios
      .post(
        apiRoutes.makeDonation,
        {
          address: value0,
          amount: value1
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(function(response) {
        parent.setState({ donationID: response.data });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  inputState = (fieldObject, index) => {
    Object.keys(fieldObject).map(key => {
      // only creates state for the error / value variables
      if (key === "error" || key === "value") {
        // uses index argument to create scalable state for each object in this.fields
        let stateVariable = `${key + index}`;

        // sets the state key name and value
        this.setState({ [stateVariable]: fieldObject[key] });
      }
    });
  };

  inputChange = (value, fieldValue) => {
    this.setState({ [fieldValue]: value });
  };

  renderFields = fields => {
    return fields.map((field, index) => {
      let { name, label, placeholder, value, error } = field;

      // creates state key names from index
      let fieldValue = `${"value" + index}`;

      // expects a boolean
      let fieldError = `${error + index}`;

      return (
        <Form.Input
          key={index}
          name={name}
          label={label}
          onChange={e => {
            this.inputChange(e.target.value, fieldValue);
          }}
          placeholder={placeholder}
          error={this.state[fieldError]}
        />
      );
    });
  };

  render() {
    const { hasFields, donationID } = this.state;
    let { fields } = this.props;

    // TODO add state handling for this.props.formName to handle makeDonation / fetchDonation form display

    // TODO fragment hasFields and donationID conditionals

    // TODO when DonationID logic exists, fire a trigger to app.js
    return (
      <Fragment>

        {hasFields ? (
          <Form>
            <Form.Group widths="equal">{this.renderFields(fields)}</Form.Group>
            <Form.Field onClick={() => this.submitForm()} control={Button}>
              Submit
            </Form.Field>
          </Form>
        ) : (
          <p>Form has no input props!</p>
        )}

        {donationID ? (
          <p>DonationID: {donationID}</p>
        ) : (
          <p>Submit the form to create your donation!</p>
        )}

      </Fragment>
    );
  }
}

export default ShareForm;
