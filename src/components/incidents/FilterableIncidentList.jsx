import React, { Component } from 'react';
import { Grid } from 'tabler-react';

// Components
import SearchBar from './SearchBar';
import IncidentList from './IncidentList';

export default class FilterableIncidentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Grid.Col width={4}>
        <SearchBar searchTerm={searchTerm} onSearchTermChange={this.handleSearchTermChange} />
        <IncidentList incidents={INCIDENTS} searchTerm={searchTerm} onClickHandler={this.props.onClickHandler} />
      </Grid.Col>
    );
  }
}

const INCIDENTS = [
  {
    sensorName: 'JV400-1',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '01.01.2000',
    confidence: '85',
  },
  {
    sensorName: 'JV400-2',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '02.02.2001',
    confidence: '97',
  },
  {
    sensorName: 'JV400-3',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '03.04.2004',
    confidence: '65',
  },
  {
    sensorName: 'JV400-4',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '04.04.2006',
    confidence: '25',
  },
  {
    sensorName: 'ZX200-1',
    sensorCategory: 'Vender',
    sensorBuilding: 'Grenseveien 26',
    date: '04.04.2006',
    confidence: '25',
  },
];
