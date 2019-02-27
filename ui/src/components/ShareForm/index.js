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
      this.testKeys();
      if (fields){

          this.setState({hasFields: true});

          fields.map((field, index) =>{
              let { name, label, placeholder, value, error } = field;



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

  testKeys = () =>{
      let testObj = {test: 'asdfa', test2: 'asdferfasf'};
      Object.keys(testObj).map((key, index) =>{
          let stateVariable = `${key + index}`;
          this.setState({ [stateVariable] : index});
      })
  }

/*
  renderFields = (fields) => {
      if (fields){
          fields.map((field, index) =>{
              let { label, placeholder } = field;
          })
      }
      else{
          return <p>No form fields passed to component</p>
      }
    };
*/
  render() {
    const { value, hasFields } = this.state;
    return (
        <Fragment>
            {hasFields ? <Form>
                <Form.Group widths="equal">
                    <Form.Field
                        control={Input}
                        label="First name"
                        placeholder="First name"
                    />
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
                <Form.Group inline>
                    <label>Quantity</label>
                    <Form.Field
                        control={Radio}
                        label="One"
                        value="1"
                        checked={value === "1"}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label="Two"
                        value="2"
                        checked={value === "2"}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label="Three"
                        value="3"
                        checked={value === "3"}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label="About"
                    placeholder="Tell us more about you..."
                />
                <Form.Field
                    control={Checkbox}
                    label="I agree to the Terms and Conditions"
                />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form> : <p>Form has no input props!</p>}
      </Fragment>

    );
  }
}

export default ShareForm;
