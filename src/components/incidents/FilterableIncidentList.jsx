import React, { Component } from 'react';

//Components
import SearchBar from './SearchBar';
import IncidentList from './IncidentList';

class FilterableIncidentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSeachTextChange = this.handleSeachTextChange.bind(this);
  }

  handleSeachTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSeachTextChange}
        />
        <IncidentList
          incidents={INCIDENTS}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

const INCIDENTS = [
  {
    sensorName: 'JV400-1',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '01.01.2000',
    confidence: '85'
  },
  {
    sensorName: 'JV400-2',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '02.02.2001',
    confidence: '97'
  },
  {
    sensorName: 'JV400-3',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '03.04.2004',
    confidence: '65'
  },
  {
    sensorName: 'JV400-4',
    sensorCategory: 'Vifter',
    sensorBuilding: 'Grenseveien 26',
    date: '04.04.2006',
    confidence: '25'
  }
];

export default FilterableIncidentList;
