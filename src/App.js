import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";

import { Card, Button } from "tabler-react";

//CSS
import "tabler-react/dist/Tabler.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
          </Card.Header>
          <Card.Body>
            <Button color="primary">A Button</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
