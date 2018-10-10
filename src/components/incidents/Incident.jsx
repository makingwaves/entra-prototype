import React, { Component } from 'react';
import {
  objectOf, func, any,
} from 'prop-types';
import { List, Form } from 'tabler-react';
// Style
import './scss/incident.css';



export default class Incident extends Component {
  static propTypes = {
    incident: objectOf(any),
    onClickHandler: func,
  };

  static defaultProps = {
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

  render() {
    const { incident, onClickHandler } = this.props;
    const {
      unit_id, unit_name, measure_type, utc_date_time, anomaly_score,
    } = incident;

    return (
      <div onClick={(e) => onClickHandler(e, unit_id)} className="incident">
        <List.GroupItem className="incident-group" key={unit_id} action>
          <div className="top-section">
            <div className="incident-unit-name">
             <h4> {unit_name} </h4>
            </div>
            <div className="incident-building">
            Grensesvingen 26
            </div>
            <div className="incident-anlegg">
              Anlegg: SOS96-NAE4
            </div>
            <div className="incident-category">
                Kategori: {measure_type}
            </div>
          </div>
          <div className="bottom-section">
            <div className="incident-date">
                {utc_date_time}
            </div>
            <div className="incident-score">
            Avvik: {Math.floor(100 * anomaly_score)} %
            </div>
          </div>
        </List.GroupItem>
      </div>
    );
  }
}
