import React, { Component } from 'react';
import Axios from 'axios';
import { Grid, Page } from 'tabler-react';

// Components
import FilterableIncidentList from './FilterableIncidentList';
import CategoryList from './CategoryList';
import DetailsContainer from '../details/DetailsContainer';

export default class IncidentsContainer extends Component {
  state = {
    incidents: [],
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
  console.log('martin', id);
}

render() {
  const { incidents } = this.state;

  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        <DetailsContainer path="/incidents/incident_id" incidents={incidents} onClick={this.onClickHandler} />
      </Grid.Row>
    </Page.Content>
  );
}
}
