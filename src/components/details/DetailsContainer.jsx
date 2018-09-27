import React, { Component } from 'react';
import { Grid, Card } from 'tabler-react';
import Axios from 'axios';
// Components
import Details from './Details';

export default class DetailsContainer extends Component {
  state = {
    coordinates: [],
  };

  componentDidMount = () => {
    Axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      this.setState({
        coordinates: res.data.slice(0, 10),
      });
    });
  };

  render() {
    const { coordinates } = this.state;
    console.log(coordinates);

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
