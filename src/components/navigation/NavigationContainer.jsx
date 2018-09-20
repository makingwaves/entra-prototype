import React, { Component } from 'react';

//Tabler
import { Nav, Container } from 'tabler-react';

export default class NavigationContainer extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <div className="header d-lg-flex p-0 collapse">
        <Container>
          <Nav>
            <Nav.Item onClick={this.handleClick} icon="home">
              Dashboard
            </Nav.Item>
            <Nav.Item onClick={this.handleClick} active icon="list">
              Incidents
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    );
  }
}
