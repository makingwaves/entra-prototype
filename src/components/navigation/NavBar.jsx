import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Tabler
import { Nav, Container } from 'tabler-react';

//Components

export default class NavBar extends Component {
  render() {
    return (
      <div className="header d-lg-flex p-0 collapse">
        <Container>
          <Nav>
            <Nav.Item onClick={this.handleClick} icon="home">
              <NavLink to="/">Dashboard</NavLink>
            </Nav.Item>
            <Nav.Item onClick={this.handleClick} icon="list">
              <NavLink to="/incidents">Incidents</NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    );
  }
}
