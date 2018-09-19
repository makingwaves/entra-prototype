import React, { Component } from 'react';

//Tabler
import { Form } from 'tabler-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    return (
      <Form.Group>
        <Form.Input
          icon="search"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={this.handleSearchTextChange}
        />
      </Form.Group>
    );
  }
}

export default SearchBar;
