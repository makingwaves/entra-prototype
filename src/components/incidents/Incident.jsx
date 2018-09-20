import React, { Component } from 'react';

//Tabler
import { List } from 'tabler-react';

class Incident extends Component {
  render() {
    const { incident } = this.props;

    return (
      <List.GroupItem className="incident" key={incident.sensorName} action>
        <div>Sensor: {incident.sensorName}</div>
        <div>Category: {incident.sensorCategory}</div>
        <div>Building: {incident.sensorBuilding}</div>
        <div>Dato: {incident.date}</div>
        <div>Score: {incident.confidence}</div>
      </List.GroupItem>
    );
  }
}

export default Incident;
