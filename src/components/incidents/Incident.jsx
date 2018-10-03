import React, { Component } from 'react';
import {
  objectOf, func, any,
} from 'prop-types';
import { List, Form } from 'tabler-react';

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
      unit_id, unit_name, sensorCategory, sensorBuilding, datestring, anomaly_score,
    } = incident;

    return (
      <div onClick={(e) => onClickHandler(e, unit_id)}>
        <List.GroupItem className="incident" key={unit_id} action>
          <Form.StaticText>
            Sensor:
            {unit_name}
          </Form.StaticText>
          <Form.StaticText>Anlegg:</Form.StaticText>
          <Form.StaticText>
              Kategori:
            {sensorCategory}
          </Form.StaticText>
          <Form.StaticText>
              Bygg:
            {sensorBuilding}
          </Form.StaticText>
          <Form.StaticText>
              Dato:
            {datestring}
          </Form.StaticText>
          <Form.StaticText>
              Poengsum:
            {Math.floor(100 * anomaly_score)}
          </Form.StaticText>
        </List.GroupItem>
      </div>
    );
  }
}

Incident.propTypes = propTypes;
Incident.defaultProps = defaultProps;
