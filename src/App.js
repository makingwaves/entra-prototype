import React, { Component } from 'react';

//Components
import Header from './components/header/Header';
import Nav from './components/navigation/NavigationContainer';
import FilterableIncidentList from './components/incidents/FilterableIncidentList';
import CategoryList from './components/categories/CategoryList';
import DetailsContainer from './components/details/DetailsContainer';

//Tabler
import { Grid, Page } from 'tabler-react';

//CSS
import './App.scss';
import 'tabler-react/dist/Tabler.css';

class App extends Component {
  render() {
    return (
      <Page.Main className="App">
        <Header />
        <Nav />
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

export default App;
