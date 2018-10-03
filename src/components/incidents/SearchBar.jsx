import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { Form, Dropdown } from 'tabler-react';

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
        <Dropdown
          className="dropdown"
          triggerContent="Sorter liste"
          itemsObject={[
            {
              value: "Sensor",
            },
            { isDivider: true },
            { value: "Anlegg" },
            { value: "Bygg" },
            { value: "Dato" },
            { value: "Poengsum" },
          ]}
        />
      </Form.Group>
    );
  }
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
