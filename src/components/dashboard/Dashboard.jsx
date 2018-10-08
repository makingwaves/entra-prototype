import React, { Component } from 'react';
import {
  Form, Grid, Page, Card,
} from 'tabler-react';
import { url } from '../../constants/apiConstants';
import Axios from 'axios';
import { OrdinalFrame } from 'semiotic';
import { scaleLinear } from 'd3-scale';

export default class Dashboard extends Component {
  state = {
    heatmap: []
  }

  componentDidMount = () => {
    Axios.get(`${url}/heatmap`).then((res) => {
      this.setState({
        heatmap: res.data.coordinates,
      });
    });
  }


  render() {
    const { heatmap } = this.state;
    console.log(heatmap);

    let startSeed = 0.5

    const heatScale = scaleLinear().domain([-10,-5,0,5,10]).range(["darkblue", "steelblue", "white", "red", "darkred"]).clamp(true);

    const tiles = Array(84)
    .fill()
    .map((d,i) => ({ step: i%12, value: startSeed += (0.5 - Math.random()) }))

    const typeOfSensor = {
      7: "Vifter",
      6: "Vendere",
      5: "Pumper",
      4: "Viftevakt",
      3: "Varmekabel",
      2: "Spjeld",
      1: "Temperatur",
  }

    const sensorAxis = { orient: 'left', tickFormat: d => typeOfSensor[d] ? <text style={{ textAnchor: "end" }} y={20}>{typeOfSensor[d]}</text> : "" }


    return (
      <Page.Content>
        <Page.Title>Dashbord</Page.Title>
        <Grid.Row>
          <Grid.Col className="card" width={12}>
            <Card.Header>
              <Card.Title>Grensesvingen 26</Card.Title>
            </Card.Header>
            <Card.Body>
            <OrdinalFrame
            size={[ 700,400 ]}
            data={tiles}
            rAccessor={() => 1}
            oAccessor={"step"}
            style={d => ({ fill: heatScale(d.value), stroke: "darkgray", strokeWidth: 1 })}
            type={"bar"}
            axis={sensorAxis}
            oLabel={d => <text transform="rotate(45)">Uke {d}</text>}
            margin={{ left: 100, top: 10, bottom: 80, right: 50 }}
            oPadding={0}
            />

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
            </Card.Body>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    );
  }
}
