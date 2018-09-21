import React, { Component } from 'react';

export default class NavBarLink extends Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>{this.props.text}</a>
      </div>
    );
  }
}
