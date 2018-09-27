import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { Form } from 'tabler-react';

const propTypes = {
  searchTerm: string,
  onSearchTermChange: func,
};

const defaultProps = {
  searchTerm: '',
  onSearchTermChange: func.isRequired,
};

export default class SearchBar extends Component {
  handleSearchTermChange = (e) => {
    const { onSearchTermChange } = this.props;
    onSearchTermChange(e.target.value);
  };

  render() {
    const { searchTerm } = this.props;

    return (
      <Form.Group>
        <Form.Input
          icon="search"
          placeholder="Søk..."
          value={searchTerm}
          onChange={this.handleSearchTermChange}
        />
      </Form.Group>
    );
  }
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
