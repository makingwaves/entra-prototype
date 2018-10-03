import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';
import { Table } from "tabler-react";
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
    const { data } = this.props
    console.table(data);


    return (
      <Table className="details">
        <Table.Header>
        <Table.Row>
          <Table.ColHeader key="0">DATO</Table.ColHeader>
          <Table.ColHeader key="1">ANLEGG</Table.ColHeader>
          <Table.ColHeader key="2">KATEGORI</Table.ColHeader>
          <Table.ColHeader key="3">POENGSUM</Table.ColHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Col key="0">{data.date}</Table.Col>
            <Table.Col key="1">anlegg kommer</Table.Col>
            <Table.Col key="2">{data.sensorCategory}</Table.Col>
            <Table.Col key="3">{data.confidence}</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}
