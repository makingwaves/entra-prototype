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
  };

componentDidMount = () => {
  Axios.get('http://localhost:5000/incidents').then((res) => {
    this.setState({
      incidents: res.data,
    });
  });
}

// onClickHandler = () => {
//   console.log(this);
//   console.log('martin');
// }

render() {
  const { incidents } = this.state;
  console.log('inc container - state', incidents);


  return (
    <Page.Content>
      <Page.Title>Hendelser</Page.Title>
      <Grid.Row>
        <CategoryList />
        <FilterableIncidentList onClickHandler={this.onClickHandler} incidents={incidents} />
        <BrowserRouter>
          <Route path="/:incident_id" incidents={incidents} onClick={this.onClickHandler} component={DetailsContainer} />
        </BrowserRouter>
      </Grid.Row>
    </Page.Content>
  );
}
}
