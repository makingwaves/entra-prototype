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
    this.setState({
      incidents: res.data,
    });
  });
}

onClickHandler = (e, unit_id) => {
    Axios.get(`${url}/linechart?unit_id=${unit_id}&from=2018-01-14&2018-01-31`).then((res) => {
      console.log("API id", res.data);
      this.setState({
        detailsData: res.data,
        allCoordinates: res.data.coordinates,
        currentCoordinates: res.data.coordinates
    });
  });
}

updateCurrentCoordinates = (newData, xMin, xMax) => {
  console.log('log foooooo');
    this.setState({
      currentCoordinates: newData.filter(n => {
        return n.date >= xMin && n.date <= xMax
      })
    })
}

render() {
  const { incidents, detailsData, allCoordinates, currentCoordinates } = this.state;

  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        {this.state.detailsData ? (
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
