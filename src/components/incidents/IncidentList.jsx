import React, { Component } from 'react';
import { List } from 'tabler-react';

// Components
import Incident from './Incident';

export default class IncidentList extends Component {
  render() {
    const { incidents, searchTerm } = this.props;

    const incident = incidents.map(incident => {
      if (incident.sensorName.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
        return null;
      }
      return <Incident incident={incident} key={incident.sensorName} />;
    });
    return <List.Group className="incident-list">{incident}</List.Group>;
  }
}
