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
      id, sensorName, sensorCategory, sensorBuilding, date, confidence,
    } = incident;

    return (
      <div onClick={(e) => onClickHandler(e, id)}>
        <List.GroupItem className="incident" key={id} action>
          <Form.StaticText>
            Sensor:
            {sensorName}
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
            {date}
          </Form.StaticText>
          <Form.StaticText>
              Poengsum:
            {confidence}
          </Form.StaticText>
        </List.GroupItem>
      </div>
    );
  }
}

Incident.propTypes = propTypes;
Incident.defaultProps = defaultProps;
