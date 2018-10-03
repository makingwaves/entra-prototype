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
    Axios.get(`${url}/linechart?from=2017-10-01&to=2017-10-02&unit_id=27244`).then((res) => {
      console.log('api', res.data);
    });
  };

  render() {
    const { data } = this.props

    const incident = data ? (
      <Card className="incident-detail">
        <Card.Header className="incident-detail-header">
          <Card.Title>{data.sensorName}</Card.Title>
          <Card.Options>
          <Button color="primary" size="sm">
          {data.sensorBuilding}
          </Button>
          </Card.Options>
          </Card.Header>
          <Card.Body>
          <Details data={data}/>
          <Chart />
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
