import React, { Component, Fragment } from 'react';
import { Table } from "semantic-ui-react";

class DonationTable extends Component {

  displayDonation = fetchedDonation => {

    let mapArray = () => {
      return fetchedDonation.map((donation, key) => {
        return (
          <Table.Row key={key}>
            <Table.Cell>{donation[0]}</Table.Cell>
            <Table.Cell>{donation[1]}</Table.Cell>
          </Table.Row>
        );
      });
    };

    return (
      <Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{mapArray()}</Table.Body>
        </Table>
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        {this.displayDonation(this.props.donationData)}
      </Fragment>
    );
  }
}

export default DonationTable;