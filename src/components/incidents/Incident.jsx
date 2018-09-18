import React, { Component } from "react";

//Tabler
import { List } from "tabler-react";

class Incident extends Component {
  render() {
    const incident = this.props.incidents.map(incident => {
      return (
        <List.GroupItem className="incident" key={incident.sensorName}>
          <div>Sensor: {incident.sensorName}</div>
          <div>Category: {incident.sensorCategory}</div>
          <div>Building: {incident.building}</div>
          <div>Dato: {incident.date}</div>
          <div>Score: {incident.confidence}</div>
        </List.GroupItem>
      );
    });

    return incident;
  }
}

export default Incident;
