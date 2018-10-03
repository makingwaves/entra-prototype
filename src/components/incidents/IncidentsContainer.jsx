import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import { Grid, Page } from 'tabler-react';

// Components
import FilterableIncidentList from './FilterableIncidentList';
import CategoryList from './CategoryList';
import DetailsContainer from '../details/DetailsContainer';

import { url } from '../../constants/apiConstants';

export default class IncidentsContainer extends Component {
  state = {
    incidents: [],
    id: null
  };

componentDidMount = () => {
  Axios.get(`${url}/incidents`).then((res) => {
    this.setState({
      incidents: res.data,
    });
  });
}

onClickHandler = (e, id = "du må legge inn id i incidents") => {
    Axios.get(`${url}/incidents/${id}`).then((res) => {
    this.setState({
      id: res.data,
    });
  });
}

render() {
  const { incidents, id } = this.state;

  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        <DetailsContainer data={id} />
      </Grid.Row>
    </Page.Content>
  );
}
}
