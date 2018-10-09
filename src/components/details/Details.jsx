import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';
import { Table } from "tabler-react";
import moment from 'moment';
// Components
import Chart from './Chart';

export default class Details extends Component {
  static propTypes = {
    data: objectOf(any),
  };

  static defaultProps = {
    data: null,
  };

  render() {
    const { data } = this.props;
    const { coordinates } = data;

    console.log("Details data", coordinates);

    return (
      <Table className="details">
        <Table.Header>
        <Table.Row>
          <Table.ColHeader key="0">SENESTE MÅLING</Table.ColHeader>
          <Table.ColHeader key="1">SENESTE AVVIK</Table.ColHeader>
          <Table.ColHeader key="2">KATEGORI</Table.ColHeader>
          <Table.ColHeader key="3">ANLEGG</Table.ColHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Col key="0">{moment(coordinates[coordinates.length - 1].date).format("lll")}</Table.Col>
            <Table.Col key="1">{Math.floor(coordinates[coordinates.length - 1].anomaly_score_abs * 100)} %</Table.Col>
            <Table.Col key="2">{data.measure_type}</Table.Col>
            <Table.Col key="3">SOS96-NAE4</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}
