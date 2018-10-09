import React, { Component } from 'react';
import {
  Form, Grid, Page, Card,
} from 'tabler-react';
import Iframe from 'react-iframe'
import { url } from '../../constants/apiConstants';
import Axios from 'axios';

export default class Dashboard extends Component {

  render() {

    return (
      <Page.Content>
        <Page.Title>Dashbord</Page.Title>
        <Grid.Row>
          <Grid.Col className="card" width={12}>
            <Card.Header>
              <Card.Title>Grensesvingen 26</Card.Title>
            </Card.Header>
            <Card.Body>
            <Iframe position="relative" url="http://entraml.northeurope.cloudapp.azure.com:8080/app/kibana#/visualize/edit/a6f60140-c7dd-11e8-8d34-af66e58d8496?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cmode%3Aquick%2Cto%3Anow))"
              width="1128"
              height="744"
            />
            </Card.Body>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    );
  }
}
