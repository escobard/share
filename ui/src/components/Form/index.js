import React, { Component, Fragment } from "react";
import { Button, Form, Message } from "semantic-ui-react";

import "./styles.scss";

/** Handles the rendering of a form, dynamically renders fields based on props.fields
 * @param {object[]} props.fields, required, determines rendered form fields
 * @param {function} props.fetchDonation / props.makeDonation, one required, determines axios post logic
 * @param {string} donationID, optional, returned donationID from makeDonation()
 * @param {string} messageHeader, optional, base messageHeader value with instructions
 * @param {string} messageValue, optional, base messageContent value with instructions
 * @param {string} messageStatus, optional, updates message color
 * @returns {Component}, Form
 **/

class DynamicForm extends Component {
  state = {
    messageHeader: this.props.messageHeader,
    messageContent: this.props.messageValue,
    messageErrors: [],
    messageStatus: this.props.messageStatus,
  };

  /** Triggers logic to dynamically generate inputState
   * @param {object[]} props.fields, required, determines form value state
   * @returns {Component}, Form
   **/

  componentWillMount() {
    let { fields } = this.props;

    if (fields) {
      this.setState({ hasFields: true });

      fields.map((field, index) => {
        this.inputState(field, index);
      });
    }
  }

  // purely used to test mounted values for now
  componentDidMount() {
    console.log(this.state);
  }

  // TODO - refactor to parent component in the future for re-usability
  /** Submits the form, handles trigger for POST request to API
   * @dev the argument needs to be re-worked after refactor to parent component
   **/

  submitForm = () => {
    let { makeDonation, fetchDonation, donationID } = this.props;
    let { value0, value1, value2, messageErrors } = this.state;

    if (makeDonation) {

      // turns number string into actual number
      value2 = parseFloat(value2);

      this.validateField(
        value0,
        value0.length !== 42,
        "Address Public must be valid public key"
      );

      this.validateField(
        value1,
        value1.length !== 64,
        " Address Private must be valid private key"
      );

      this.validateField(
        value2,
        isNaN(value2),
        " Amount must be a number"
      );

      this.validateField(
        value2,
        value2 > 1,
        " Amount cannot be more than 1 ether"
      );

      // sets messagesState
      if (messageErrors.length > 0) {
        this.setMessage(
          "red",
          "makeDonation() error(s)",
          `Contains the following error(s): ${messageErrors.join()}.`
        );
        return;
      } else {
        this.setMessage(
          "green",
          "makeDonation() validated",
          `Making donation...`
        );
      }

      // sends valuable data to parent, to send actual post request
      makeDonation({
        address_pu: value0.toUpperCase(),
        address_pr: value1,
        amount: value2
      });
    }

    if (fetchDonation) {

      // turns number string into actual number
      value1 = parseInt(value1);

      this.validateField(
        value0,
        value0.length !== 42,
        "Address Public must be valid public key"
      );

      this.validateField(
        value1,
        isNaN(value1),
        " Amount must be a number"
      );

      if (messageErrors.length > 0) {
        this.setMessage(
          "red",
          "fetchDonation() error(s)",
          `Contains the following error(s): ${messageErrors.join()}.`
        );
        return;
      } else {
        this.setMessage(
          "green",
          "fetchDonation() validated",
          `Fetching donation...`
        );
      }

      fetchDonation({ address_pu: value0.toUpperCase(), id: value1 });
    }
  };

  /** Sets the message value after form validation checks
   * @param {string} state, state of message component
   * @param {string} header, message header string
   * @param {string} content, message content string
   **/

  setMessage = (state, header, content) => {
    this.setState({
      messageStatus: state,
      messageHeader: header,
      messageContent: content,
      messageErrors: []
    });
  };

  /** Validates a form value
   * @dev can be split out into a validation class to re-use in api / ui layers
   * @param {*} value, property to validate
   * @param {*} condition, functional condition to validate / invalidate value
   * @param {string} error, string of error to add to this.state.errors
   **/

  validateField = (value, condition, error) => {
    if (condition) {
      this.setState({ messageErrors: this.state.messageErrors.push(error) });
    }
  };

  /** Creates the input state dynamically, based on passed props.fields data
   * @param {object} fieldObject, contains the .error / .value keys necessary to create form state
   * @param {int} index, number for each object in props.fields, used to create dynamic state uniqueness
   **/

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

  /** Handles the change of each field's input, when the user types into a field
   * @param {string} value, new field value
   * @param {string} fieldKey, state.fieldKey, determines which state to update dynamically
   **/

  inputChange = (value, fieldKey) => {

    this.setState({ [fieldKey]: value });
  };

  /** Dynamically renders all fields, based on props.fields
   * @param {object[]} fields, each object contains field name, label, placeholder, error
   * @returns {Component} Form.Input
   **/

  renderFields = fields => {
    return fields.map((field, index) => {
      let { name, label, placeholder, error } = field;

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
    const {
      hasFields,
      messageStatus,
      messageHeader,
      messageContent,
    } = this.state;
    let { fields, name } = this.props;

    console.log("STATE", this.state);

    return (
      <Fragment>
        {hasFields ? (
          <Form>
            <Message
              color={messageStatus}
              header={messageHeader}
              content={messageContent}
            />
            <Form.Group widths="equal">{this.renderFields(fields)}</Form.Group>
            <Form.Field
              onClick={() => this.submitForm(name)}
              control={Button}
            >
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

export default DynamicForm;
