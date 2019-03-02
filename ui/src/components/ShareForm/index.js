import React, { Component, Fragment } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

import { options } from "./constants";

class ShareForm extends Component {

  componentWillMount(){

      let { fields } = this.props;

      if (fields){

          this.setState({hasFields: true});

          fields.map((field, index) =>{
              this.inputState(field, index);
          })
      }
      else{
          return <p>No form fields passed to component</p>
      }

      this.setState({field2: 'TEST'})
  }

  // purely used to test mounted values for now
  componentDidMount(){
      console.log(this.state)
  }

  // TODO add handler to send data to API, this needs to have 2 cases, post and fetch
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
    return (
        <Fragment>
            {hasFields ? <Form>
                <Form.Group widths="equal">
                    {this.renderFields(fields)}
                    <Form.Field
                        control={Input}
                        label="Last name"
                        placeholder="Last name"
                    />
                    <Form.Field
                        control={Select}
                        label="Gender"
                        options={options}
                        placeholder="Gender"
                    />
                </Form.Group>
                <Form.Field control={Button}>Submit</Form.Field>
            </Form> : <p>Form has no input props!</p>}
      </Fragment>

    );
  }
}

export default ShareForm;
