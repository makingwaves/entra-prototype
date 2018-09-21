import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//Tabler
import { Nav, Container } from 'tabler-react';

//Components
import Incidents from './../incidents/Incidents';
import Dashboard from './../dashboard/Dashboard';

export default class NavBar extends Component {
  render() {
    return (
      <div className="header d-lg-flex p-0 collapse">
        <Container>
          <Nav>
            <Nav.Item onClick={this.handleClick} icon="home">
              <Link to="/">Dashboard</Link>
            </Nav.Item>
            <Nav.Item onClick={this.handleClick} icon="list">
              <Link to="/incidents">Incidents</Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    );
  }
}
