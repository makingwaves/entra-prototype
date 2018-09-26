import React, { Component } from 'react';
import { List } from 'tabler-react';

export default class Incident extends Component {
  render() {
    const { incident } = this.props;

    return (
      <List.GroupItem className="incident" key={incident.sensorName} action>
        <div>Sensor: {incident.sensorName}</div>
        <div>Kategori: {incident.sensorCategory}</div>
        <div>Bygg: {incident.sensorBuilding}</div>
        <div>Dato: {incident.date}</div>
        <div>Poengsum: {incident.confidence}</div>
      </List.GroupItem>
    );
  }
}
