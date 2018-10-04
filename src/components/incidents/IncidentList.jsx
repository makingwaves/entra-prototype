import React, { Component } from 'react';
import {
  arrayOf, object, func, string,
} from 'prop-types';
import { List } from 'tabler-react';
// Components
import Incident from './Incident';
// Style
import './scss/incident-list.css';

const propTypes = {
  incidents: arrayOf(object),
  searchTerm: string,
  onClickHandler: func,
};

const defaultProps = {
  incidents: null,
  searchTerm: '',
  onClickHandler: null,
};

export default class IncidentList extends Component {
  render() {
    const { incidents, searchTerm, onClickHandler } = this.props;

    const incident = incidents.map((i, index) => {
      if (i.unit_name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
        return null;
      }
      return <Incident incident={i} key={i.unit_id + index} onClickHandler={onClickHandler} />;
    });
    return <List.Group className="incident-list">{incident}</List.Group>;
  }
}

IncidentList.propTypes = propTypes;
IncidentList.defaultProps = defaultProps;
