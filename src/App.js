import React, { Component } from "react";

//Components
import Header from "./components/Header/Header";
import FilterableIncidentList from "./components/incidents/FilterableIncidentList";
// import Incidents from "./components/incidents/Incidents";

//Tabler
import { Grid } from "tabler-react";

//CSS
import "./App.scss";
import "tabler-react/dist/Tabler.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid.Row>
          <FilterableIncidentList />
        </Grid.Row>
      </div>
    );
  }
}

export default App;
