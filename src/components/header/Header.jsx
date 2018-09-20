import React, { Component } from 'react';
import logo from '../../media/entra-logo-white.svg';

//Tabler
import { Site } from 'tabler-react';

export default class Header extends Component {
  render() {
    return (
      <Site.Header className="App-header">
        <Site.Logo src={logo} alt="logo" />
      </Site.Header>
    );
  }
}
