import React, { Component } from 'react';
import { Nav } from 'tabler-react';
import NavBarLink from './NavBarLink';


export default class NavBarItem extends Component {
  generateLink() {
    return <NavBarLink url={this.props.url} text={this.props.text} />;
  }

  generateContent() {
    const content = [this.generateLink];
    return content;
  }

  render() {
    const content = this.generateContent();
    return <Nav>{content}</Nav>;
  }
}
