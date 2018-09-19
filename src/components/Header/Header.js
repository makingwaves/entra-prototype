import React, { Component } from 'react';
import logo from '../../media/entra-logo-white.svg';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
