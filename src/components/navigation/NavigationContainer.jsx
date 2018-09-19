import React, { Component } from 'react';

//Tabler
import { Nav, Container } from 'tabler-react';

export default class NavigationContainer extends Component {
  render() {
    return (
      <div className="header d-lg-flex p-0 collapse">
        <Container>
          <Nav>
            <Nav.Item icon="home">Dashboard</Nav.Item>
            <Nav.Item active icon="list">
              Incidents
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    );
  }
}
