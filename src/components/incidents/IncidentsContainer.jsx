import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import { Grid, Page, Card, Button, Alert } from 'tabler-react';
// API
import { url } from '../../constants/apiConstants';
// Components
import FilterableIncidentList from './FilterableIncidentList';
import CategoryList from './CategoryList';
import DetailsContainer from '../details/DetailsContainer';



export default class IncidentsContainer extends Component {
  state = {
    incidents: [],
    detailsData: null,
    allCoordinates: [],
    currentCoordinates: []
  };

componentDidMount = () => {
  Axios.get(`${url}/notifications`).then((res) => {
    console.log('res', res);
    this.setState({
      incidents: res.data,
    });
  });
}

onClickHandler = (e, unit_id) => {
    Axios.get(`${url}/linechart?unit_id=${unit_id}`).then((res) => {
      this.setState({
        detailsData: res.data,
        allCoordinates: res.data.coordinates,
    });
  });
    Axios.get(`${url}/linechart?from=2018-09-01&to=2018-09-03&unit_id=${unit_id}`).then((res) => {
      this.setState({
        currentCoordinates: res.data.coordinates
    });
  });
}

render() {
  const { incidents, detailsData, allCoordinates, currentCoordinates } = this.state;

  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        {detailsData ? (
          <DetailsContainer updateCurrentCoordinates={this.updateCurrentCoordinates} data={detailsData} allCoordinates={allCoordinates} currentCoordinates={currentCoordinates} />
        ) : (
          <div>
            <Alert icon="bell" className="text-muted">
              Ingen hendelse valgt
            </Alert>
          </div>
        )}

      </Grid.Row>
    </Page.Content>
  );
}
}
