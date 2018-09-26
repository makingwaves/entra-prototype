import React, { Component } from 'react';
import { Form } from 'tabler-react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(e) {
    this.props.onSearchTermChange(e.target.value);
  }

  render() {
    return (
      <Form.Group>
        <Form.Input
          icon="search"
          placeholder="Søk..."
          value={this.props.searchTerm}
          onChange={this.handleSearchTermChange}
        />
      </Form.Group>
    );
  }
}
