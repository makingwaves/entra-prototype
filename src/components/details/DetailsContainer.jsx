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
  static propTypes = {
    data: objectOf(any),
  };

  static defaultProps = {
    data: null,
  };

  componentDidMount = () => {
    Axios.get(`${url}/linechart?from=2018-01-14&to=2018-01-31&unit_id=27244`).then((res) => {
      console.log('API Details', res.data);
    });
  };

  render() {
    const { data } = this.props

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
          <Chart data={data} />
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
