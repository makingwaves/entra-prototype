import React, { Component } from 'react';
import { arrayOf, object, func } from 'prop-types';
import { Grid } from 'tabler-react';
// Components
import SearchBar from './SearchBar';
import IncidentList from './IncidentList';

const propTypes = {
  incidents: arrayOf(object),
  onClickHandler: func,
};

const defaultProps = {
  incidents: null,
  onClickHandler: null,
};

export default class FilterableIncidentList extends Component {
    state = {
      searchTerm: '',
    };

  handleSearchTermChange = (searchTerm) => {
    this.setState({
      searchTerm,
    });
  }

  render() {
    const { incidents, onClickHandler } = this.props;
    const { searchTerm } = this.state;

    return (
      <Grid.Col width={4}>
        <SearchBar searchTerm={searchTerm} onSearchTermChange={this.handleSearchTermChange} />
        <IncidentList
          incidents={incidents}
          searchTerm={searchTerm}
          onClickHandler={onClickHandler}
        />
      </Grid.Col>
    );
  }
}

FilterableIncidentList.propTypes = propTypes;
FilterableIncidentList.defaultProps = defaultProps;
