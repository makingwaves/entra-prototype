import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Page } from 'tabler-react';

// Components
import Header from './components/header/Header';
import NavBar from './components/navigation/NavBar';
import Incidents from './components/incidents/Incidents';
import Dashboard from './components/dashboard/Dashboard';

// CSS
import './App.scss';
import 'tabler-react/dist/Tabler.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Page.Main className="App">
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/incidents" component={Incidents} />
          </Switch>
        </Page.Main>
      </BrowserRouter>
    );
  }
}
