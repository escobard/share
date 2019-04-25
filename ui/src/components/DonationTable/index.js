import React, { Component, Fragment } from 'react';
import { Table } from "semantic-ui-react";

import "./styles.scss"

class DonationTable extends Component {

  displayDonation = fetchedDonation => {

    let mapArray = () => {
      return fetchedDonation.map((donation, key) => {
        return (
          <Table.Row key={key}>
            <Table.Cell width={8}>{donation[0]}</Table.Cell>
            <Table.Cell width={8}>{donation[1]}</Table.Cell>
          </Table.Row>
        );
      });
    };

    return (
      <Fragment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Key</Table.HeaderCell>
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