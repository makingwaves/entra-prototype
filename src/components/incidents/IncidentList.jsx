import React, { Component } from 'react';
import { arrayOf, object, string } from 'prop-types';
import { List } from 'tabler-react';
// Components
import Incident from './Incident';

const propTypes = {
  incidents: arrayOf(object),
  searchTerm: string,
};

const defaultProps = {
  incidents: [],
  searchTerm: '',
};

export default class IncidentList extends Component {
  render() {
    const { incidents, searchTerm, onClickHandler } = this.props;

    const incident = incidents.map((i) => {
      if (i.sensorName.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
        return null;
      }
      return <Incident incident={i} key={i.sensorName} onClickHandler={onClickHandler} />;
    });
    return <List.Group className="incident-list">{incident}</List.Group>;
  }
}

IncidentList.propTypes = propTypes;
IncidentList.defaultProps = defaultProps;
