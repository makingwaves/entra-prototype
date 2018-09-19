import React, { Component } from 'react';

//Components
import Incident from './Incident';

import { List } from 'tabler-react';

class IncidentList extends Component {
  render() {
    const { incidents, searchText } = this.props;

    const incident = incidents.map(incident => {
      if (incident.sensorName.indexOf(searchText) === -1) {
        return null;
      }
      return <Incident incident={incident} key={incident.sensorName} />;
    });
    return <List.Group className="incident-list">{incident}</List.Group>;
  }
}

export default IncidentList;
