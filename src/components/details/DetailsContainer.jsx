import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';
import { Grid, Card } from 'tabler-react';
import Axios from 'axios';
// Components
import Details from './Details';

export default class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    //this.state = props;
  }
  // static propTypes = {
  //   incident: objectOf(any),
  // };

  // static defaultProps = {
  //   incident: null,
  // };

  // state = {
  //   incident: null,
  // };


  componentDidMount = () => {
    console.log('details', this.props.data);
    // Axios.get('http://entraml.northeurope.cloudapp.azure.com:8080/linechart?from=2017-10-01&to=2017-10-02&unit_id=27244').then((res) => {
    //   console.log('api', res.data);
    // });
  };

  render() {
    const incident = this.props.data ? (
      <div className="indident-detail">
        <Card.Header>
          <Card.Title>{this.props.data.sensorName}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Details />
        </Card.Body>
      </div>
    ) : (
      <div className="text-muted">No incident selected</div>
    );

    return (
      <Grid.Col className="card" width={6}>
        {incident}
      </Grid.Col>
    );
  }
}
