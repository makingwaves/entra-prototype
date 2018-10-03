import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { Form, Button, Dropdown } from 'tabler-react';

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
        <Button.List >
          <Button.Dropdown value="Sorter" color="secondary" size="sm">
            <Dropdown.Item>Sensor</Dropdown.Item>
            <Dropdown.ItemDivider />
            <Dropdown.Item>Anlegg</Dropdown.Item>
            <Dropdown.Item>Bygg</Dropdown.Item>
            <Dropdown.Item>Poengsum</Dropdown.Item>
          </Button.Dropdown>
        </Button.List>
      </Form.Group>
    );
  }
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
