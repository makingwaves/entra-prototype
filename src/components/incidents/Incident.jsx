import React, { Component } from 'react';
import { objectOf, string } from 'prop-types';
import { List } from 'tabler-react';

const propTypes = {
  incident: objectOf(string),
};

const defaultProps = {
  incident: {
    sensorName: '',
    sensorCategory: '',
    sensorBuilding: '',
    date: '',
    confidence: '',
  },
};

export default class Incident extends Component {
  render() {
    const { incident, onClickHandler } = this.props;
    const {
      id, sensorName, sensorCategory, sensorBuilding, date, confidence,
    } = incident;

    return (
      <List.GroupItem className="incident" key={sensorName} action>
        <a onClick={(e) => onClickHandler(e, id)}>
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
        </a>
      </List.GroupItem>
    );
  }
}

Incident.propTypes = propTypes;
Incident.defaultProps = defaultProps;
