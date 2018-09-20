import React, { Component } from 'react';

//Components
import Header from './components/header/Header';
import NavBar from './components/navigation/NavBar';
import FilterableIncidentList from './components/incidents/FilterableIncidentList';
import CategoryList from './components/categories/CategoryList';
import DetailsContainer from './components/details/DetailsContainer';

//Tabler
import { Grid, Page } from 'tabler-react';

//CSS
import './App.scss';
import 'tabler-react/dist/Tabler.css';

export default class App extends Component {
  render() {
    return (
      <Page.Main className="App">
        <Header />
        <NavBar />
        <Page.Content>
          <Page.Title>Incidents</Page.Title>
          <Grid.Row>
            <CategoryList />
            <FilterableIncidentList />
            <DetailsContainer />
          </Grid.Row>
        </Page.Content>
      </Page.Main>
    );
  }
}
