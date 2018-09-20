import React, { Component } from 'react';

//Tabler
import { Nav, Container } from 'tabler-react';

export default class NavigationContainer extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { isActive: '' };
  }

  handleClick() {
    if (this.state.isActive === '') {
      this.setState({ isActive: 'active' });
    } else {
      this.setState({ isActive: '' });
    }
    console.log(this.state);
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

const NAVITEMS = [
  {
    text: 'Dashboard',
    icon: 'home',
    url: ''
  },
  {
    text: 'Incidents',
    icon: 'list',
    url: ''
  }
];
