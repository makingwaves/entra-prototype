import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';
import { Grid, Card, Button, Alert } from 'tabler-react';
import Axios from 'axios';
// API
import { url } from '../../constants/apiConstants';
// Components
import Details from './Details';
import Chart from './Chart';

export default class DetailsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredData: [],
      filters: {
        dateRange: [-Infinity, Infinity]
      }
    }
  }

  static propTypes = {
    data: objectOf(any),
  };

  static defaultProps = {
    data: null,
  };
  // componentDidMount = () => {
  //   Axios.get(`${url}/linechart?from=2018-01-14&to=2018-01-31&unit_id=27244`).then((res) => {
  //     console.log('API Details', res.data);
  //   });
  // };

  changeFilters = (newFilter) => {
    const { filters } = this.state;
    this.setState({ filters: { ...filters, ...newFilter}})
  }

  chartBrush = (e) => {
    const bbox = e
    const [x1, x2] = bbox
    console.log(x1, x2);
    if(!isNaN(x1)) {
      const xMin = Math.min(x1, x2);
      const xMax = Math.max(x1, x2);
      this.changeFilters({ dateRange: [ xMin, xMax ]});
      let newData = this.props.data.coordinates.map(d => {
        return d
      });
      this.setState({
        filteredData: newData.filter(n => {
          return +n.date >= xMin && +n.date <= xMax
        })
      })
    }
  }

  render() {
    const { data } = this.props;
    const { filteredData, filters } = this.state;

    console.log("filteredData", filteredData);

    const incident = data ? (
      <Card className="incident-detail">
        <Card.Header className="incident-detail-header">
          <Card.Title>{data.unit_name}</Card.Title>
          <Card.Options>
          <Button color="primary" size="sm">
          {data.measure_type}
          </Button>
          </Card.Options>
          </Card.Header>
          <Card.Body>
          <Details data={data}/>
          <Chart brushFunction={this.chartBrush} data={filteredData.length === 0 ? data : filteredData} foo={filteredData.length === 0} />
        </Card.Body>
        <Card.Footer>Standard tekst</Card.Footer>
      </Card>
    ) : (
      <Card>
        <Card.Body>
          <Alert icon="bell" className="text-muted">
            Ingen hendelse valgt
          </Alert>
        </Card.Body>
      </Card>
    );

    return (
      <Grid.Col width={7}>
        {incident}
      </Grid.Col>
    );
  }
}
