import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import { Grid, Page } from 'tabler-react';
// API
import { url } from '../../constants/apiConstants';
// Components
import FilterableIncidentList from './FilterableIncidentList';
import CategoryList from './CategoryList';
import DetailsContainer from '../details/DetailsContainer';


export default class IncidentsContainer extends Component {
  state = {
    incidents: [],
    detailsData: null
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
    });
  });
}

render() {
  const { incidents, detailsData } = this.state;

  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        <DetailsContainer data={detailsData} />
      </Grid.Row>
    </Page.Content>
  );
}
}
