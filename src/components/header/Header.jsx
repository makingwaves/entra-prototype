import React, { Component } from 'react';
import { Site } from 'tabler-react';
import logo from '../../media/entra-logo-white.svg';

// Tabler

export default class Header extends Component {
  render() {
    return (
      <Site.Header className="App-header">
        <Site.Logo src={logo} alt="logo" />
      </Site.Header>
    );
  }
}
