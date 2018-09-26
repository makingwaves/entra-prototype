import React, { Component } from 'react';
import {
  Form, Grid, Page, Card,
} from 'tabler-react';

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
              <Form.Group label="Vifter">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                </Form.ColorCheck>
              </Form.Group>
              <Form.Group label="Vendere">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                </Form.ColorCheck>
              </Form.Group>
              <Form.Group label="Pumper">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                </Form.ColorCheck>
              </Form.Group>
              <Form.Group label="Viftevakt">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                </Form.ColorCheck>
              </Form.Group>
              <Form.Group label="Varmekabel">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                </Form.ColorCheck>
              </Form.Group>
              <Form.Group label="Spjeld">
                <Form.ColorCheck>
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="red" />
                  <Form.ColorCheckItem color="orange" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                  <Form.ColorCheckItem color="green" />
                </Form.ColorCheck>
              </Form.Group>
            </Card.Body>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    );
  }
}
