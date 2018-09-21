import React, { Component } from 'react';

//Tabler
import { Grid, Page } from 'tabler-react';

//Components
import FilterableIncidentList from './FilterableIncidentList';
import CategoryList from './CategoryList';
import DetailsContainer from './../details/DetailsContainer';

export default class Incidents extends Component {
  render() {
    return (
      <Page.Content>
        <Page.Title>Incidents</Page.Title>
        <Grid.Row>
          <CategoryList />
          <FilterableIncidentList />
          <DetailsContainer />
        </Grid.Row>
      </Page.Content>
    );
  }
}
