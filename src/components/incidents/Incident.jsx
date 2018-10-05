import React, { Component } from 'react';
import {
  objectOf, func, any,
} from 'prop-types';
import { List, Form } from 'tabler-react';
// Style
import './scss/incident.css';

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
      unit_id, unit_name, sensorCategory, sensorBuilding, utc_date_time, anomaly_score,
    } = incident;

    return (
      <div onClick={(e) => onClickHandler(e, unit_id)} className="incident">
        <List.GroupItem className="incident-group" key={unit_id} action>
          <div className="top-section">
            <div className="incident-unit-name">
             <h4> {unit_name} </h4>
            </div>
            <div className="incident-building">
              Wergelandsgate 15 {sensorBuilding}
            </div>
            <div className="incident-anlegg">
              Anlegg:
            </div>
            <div className="incident-category">
                Kategori: {sensorCategory}
            </div>
          </div>
          <div className="bottom-section">
            <div className="incident-date">
                {datestring}
            </div>
            <div className="incident-score">
            Score: {Math.floor(100 * anomaly_score)}
            </div>
          </div>
        </List.GroupItem>
      </div>
    );
  }
}

Incident.propTypes = propTypes;
Incident.defaultProps = defaultProps;
