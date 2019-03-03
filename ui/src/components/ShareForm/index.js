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
    let headers = { "Access-Control-Allow-Origin": "*" }

    switch (formName) {
      case 'make': {    axios
        .post(
          apiRoutes.makeDonation,
          {
            address: value0,
            amount: value1
          },
          { headers }
        )
        .then((response) => {

          let { data } = response

          // passes the donationID to parent
          parent.props.makeDonation(data);

          console.log(response.data);
        })
        .catch((error) =>{
          console.log(error);
        });
        return;
      }
      case 'fetch': {}
      default:{
        console.log('No form name passed!')
        return;
      }
    }

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
    const { hasFields } = this.state;
    let { fields, name  } = this.props;

    return (
      <Fragment>

        {hasFields ? (
          <Form>
            <Form.Group widths="equal">{this.renderFields(fields)}</Form.Group>
            <Form.Field onClick={() => this.submitForm(name)} control={Button}>
              Submit
            </Form.Field>
          </Form>
        ) : (
          <p>Form has no input props!</p>
        )}

      </Fragment>
    );
  }
}

export default ShareForm;
