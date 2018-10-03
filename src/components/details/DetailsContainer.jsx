import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';
import { Grid, Card } from 'tabler-react';
import Axios from 'axios';
// Components
import Details from './Details';

export default class DetailsContainer extends Component {
  static propTypes = {
    data: objectOf(any),
  };

  static defaultProps = {
    data: null,
  };

  componentDidMount = () => {
    Axios.get('http://entraml.northeurope.cloudapp.azure.com/linechart?from=2017-10-01&to=2017-10-02&unit_id=27244').then((res) => {
      console.log('api', res.data);
    });
  };

  render() {
    const { data } = this.props

    const incident = data ? (
      <div className="indident-detail">
        <Card.Header>
          <Card.Title>{data.sensorName}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Details />
        </Card.Body>
      </div>
    ) : (
      <div className="text-muted">Ingen hendelse valgt</div>
    );

    return (
      <Grid.Col className="card" width={6}>
        {incident}
      </Grid.Col>
    );
  }
}
