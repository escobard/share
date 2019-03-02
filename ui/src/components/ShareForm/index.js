import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

import { apiRoutes } from "../../constants";

class ShareForm extends Component {

  componentWillMount(){

      let { fields } = this.props;

      if (fields){

          this.setState({hasFields: true});

          fields.map((field, index) =>{
              this.inputState(field, index);
          })
      }

      this.setState({field2: 'TEST'})
  }

  // purely used to test mounted values for now
  componentDidMount(){
      console.log(this.state)
  }

  submitForm = (formName) =>{


    let { value1, value2 } = this.state;

    // TODO consider refactoring this to a helper file
    // TODO make a switch statement to handle both form cases
    axios.post(apiRoutes.makeDonation, {
      address: value1,
      amount: value2
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  handleChange = (e, { value }) => this.setState({ value });

  inputState = (fieldObject, index) =>{
      Object.keys(fieldObject).map((key) =>{

          // only creates state for the error / value variables
          if (key === 'error' || key === 'value'){

              // uses index argument to create scalable state for each object in this.fields
              let stateVariable = `${key + index}`;

              // sets the state key name and value
              this.setState({ [stateVariable] : fieldObject[key]});
          }

      })
  }

  renderFields = (fields) => {
          return fields.map((field, index) =>{

              let { name, label, placeholder, value, error} = field;

              // creates state key names from index
              let fieldValue = `${value + index}`;

              // expects a boolean
              let fieldError = `${error + index}`;

              return(
                  <Form.Input
                      key={index}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                      value={this.state[fieldValue]}
                      error={this.state[fieldError]}
                  />
                  )

          })
  };

  render() {
    const { hasFields } = this.state;
    let { fields } = this.props;

    // TODO add state handling for this.props.formName to handle makeDonation / fetchDonation form display
    return (
        <Fragment>
            {hasFields ? <Form>
                <Form.Group widths="equal">
                    {this.renderFields(fields)}
                </Form.Group>
                <Form.Field control={Button}>Submit</Form.Field>
            </Form> : <p>Form has no input props!</p>}
      </Fragment>

    );
  }
}

export default ShareForm;
