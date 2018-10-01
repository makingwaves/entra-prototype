import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import { Grid, Page } from 'tabler-react';

// Components
import FilterableIncidentList from './FilterableIncidentList';
import CategoryList from './CategoryList';
import DetailsContainer from '../details/DetailsContainer';

export default class IncidentsContainer extends Component {
  state = {
    incidents: [],
    id: null
  };

componentDidMount = () => {
  Axios.get('http://localhost:5000/incidents').then((res) => {
    this.setState({
      incidents: res.data,
    });
  });
}

onClickHandler = (e, id = "du må legge inn id i incidents") => {
  e.preventDefault();
  // console.log(this);
  console.log('log onClickHandler IncidentsContainer', id);
    Axios.get(`http://localhost:5000/incidents/${id}`).then((res) => {
    this.setState({
      data: res.data,
    });
  });
}

render() {
  const { incidents } = this.state;
  console.log('log in render, IncidentsContainer', this.state.data);


  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        
        <DetailsContainer data={this.state.data} />
        
      </Grid.Row>
    </Page.Content>
  );
}
}
