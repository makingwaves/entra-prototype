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
      currentCoordinates: [],
      filters: {
        dateRange: [-Infinity, Infinity]
      }
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this.state.currentCoordinates);
  }

  static propTypes = {
    data: objectOf(any),
  };

  static defaultProps = {
    data: null,
  };

  changeFilters = (newFilter) => {
    const { filters } = this.state;
    this.setState({ filters: { ...filters, ...newFilter}})
  }

  chartBrush = (e) => {

    if (e === null) {
      this.changeFilters({ dateRange: [ -Infinity, Infinity ]});
      this.setState({
        currentCoordinates: []
      });
      return
    }
    const bbox = e
    const [x1, x2] = bbox
    if(!isNaN(x1)) {
      const xMin = Math.min(x1, x2);
      const xMax = Math.max(x1, x2);
      this.changeFilters({ dateRange: [ xMin, xMax ]});
      const { data } = this.props;
      let newData = this.props.currentCoordinates.map(d => {
        return d
      });

      this.props.updateCurrentCoordinates(newData, xMin, xMax);
      // this.setState({
      //   isDefaultMinimap: false,
      //   currentCoordinates: newData.filter(n => {
      //     return n.date >= xMin && n.date <= xMax
      //   })
      // })
    }
  }

  render() {

    const { data } = this.props;
    const { filters } = this.state;
    // const { currentCoordinates } = this.props;

    //console.log("container data", data);
    //console.log("container currentCoordinates", currentCoordinates);

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
          <Chart brushFunction={this.chartBrush} allCoordinates={this.props.allCoordinates} currentCoordinates={this.state.currentCoordinates.length > 0 ? this.state.currentCoordinates : this.props.currentCoordinates} data={data} />
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
