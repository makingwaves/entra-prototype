import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={this.handleSearchTextChange}
        />
      </form>
    );
  }
}

export default SearchBar;
