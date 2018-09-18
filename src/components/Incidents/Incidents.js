import React from "react";

import { List } from "tabler-react";

const Incidents = ({ incidents }) => {
  const incidentList = incidents.map(incident => {
    if (incident.confidence > 20) {
      return (
        <List.GroupItem className="incident" key={incident.id}>
          <div>Sensor: {incident.sensorName}</div>
          <div>Category: {incident.sensorCategory}</div>
          <div>Building: {incident.building}</div>
          <div>Score: {incident.confidence}</div>
        </List.GroupItem>
      );
    } else {
      return null;
    }
  });
  return <List.Group className="incident-list">{incidentList}</List.Group>;
};

export default Incidents;
