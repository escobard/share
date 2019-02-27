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

  state = {
      hasFields: false,
  };

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

  handleChange = (e, { value }) => this.setState({ value });

  inputState = (fieldObject, index) =>{
      Object.keys(fieldObject).map((key) =>{

          // uses index argument to create scalable state for each object in this.fields
          let stateVariable = `${key + index}`;

          // sets the state key name and value
          this.setState({ [stateVariable] : fieldObject[key]});
      })
  }

  renderFields = (fields) => {
          return fields.map((field, index) =>{
              return(
                  <Form.Field
                      key={index}
                      control={Input}
                      label="First name"
                      placeholder="First name"
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
