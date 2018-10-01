import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Page } from 'tabler-react';
import Axios from 'axios';

// Components
import Header from './components/header/Header';
import NavBar from './components/navigation/NavBar';
import Incidents from './components/incidents/IncidentsContainer';
import Dashboard from './components/dashboard/Dashboard';

// CSS
import './App.scss';
import 'tabler-react/dist/Tabler.css';

export default class App extends Component {
  componentDidMount = () => {
    Axios.get('http://entraml.northeurope.cloudapp.azure.com:8080/linechart?from=2017-10-01&to=2017-10-02&unit_id=27244').then((res) => {
      console.log('ext api res', res.data);
    });
  }

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
