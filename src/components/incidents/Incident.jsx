import React, { Component } from 'react';
import {
  objectOf, func, any,
} from 'prop-types';
import { List } from 'tabler-react';

const propTypes = {
  incident: objectOf(any),
  onClickHandler: func,
};

const defaultProps = {
  incident: {
    id: null,
    sensorName: '',
    sensorCategory: '',
    sensorBuilding: '',
    date: '',
    confidence: '',
  },
  onClickHandler: null,
};

export default class Incident extends Component {
  render() {
    const { incident, onClickHandler } = this.props;
    const {
      id, sensorName, sensorCategory, sensorBuilding, date, confidence,
    } = incident;

    return (
      <List.GroupItem className="incident" key={id} onClick={onClickHandler} action>
        <div>
          Sensor:
          {sensorName}
        </div>
        <div>
            Kategori:
          {sensorCategory}
        </div>
        <div>
            Bygg:
          {sensorBuilding}
        </div>
        <div>
            Dato:
          {date}
        </div>
        <div>
            Poengsum:
          {confidence}
        </div>
      </List.GroupItem>
    );
  }
}

Incident.propTypes = propTypes;
Incident.defaultProps = defaultProps;
