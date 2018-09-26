import React, { Component } from 'react';
import { Grid, Card } from 'tabler-react';

// Components
import Details from './Details';

export default class DetailsContainer extends Component {
  render() {
    return (
      <Grid.Col className="card" width={6}>
        <Card.Header>
          <Card.Title>Sensor Name</Card.Title>
        </Card.Header>
        <Card.Body>
          <Details />
        </Card.Body>
      </Grid.Col>
    );
  }
}
