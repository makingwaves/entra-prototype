import React, { Component } from "react";
import "./App.css";

//Components
import Header from "./components/Header/Header";
import Incidents from "./components/Incidents/Incidents";

//CSS
import "tabler-react/dist/Tabler.css";

class App extends Component {
  state = {
    // sensors: [
    //   { name: "JV400-1", category: "Vifter", building: "Grenseveien 26" },
    //   { name: "JV400-2", category: "Vifter", building: "Grenseveien 26" },
    //   { name: "JV400-3", category: "Vifter", building: "Grenseveien 26" },
    //   { name: "JV400-4", category: "Vifter", building: "Grenseveien 26" }
    // ],
    incidents: [
      {
        sensorName: "JV400-1",
        sensorCategory: "Vifter",
        date: "01.01.2000",
        building: "Grenseveien 26",
        confidence: "85"
      },
      {
        sensorName: "JV400-2",
        sensorCategory: "Vifter",
        date: "02.02.2001",
        building: "Grenseveien 26",
        confidence: "97"
      },
      {
        sensorName: "JV400-3",
        sensorCategory: "Vifter",
        date: "03.04.2004",
        building: "Grenseveien 26",
        confidence: "65"
      },
      {
        sensorName: "JV400-4",
        sensorCategory: "Vifter",
        date: "04.04.2006",
        building: "Grenseveien 26",
        confidence: "25"
      }
    ]
  };

  addIncident = incident => {
    incident.id = Math.random();
    let incidents = [...this.state.incidents, incident];
    this.setState({
      incidents: incidents
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Incidents incidents={this.state.incidents} />
      </div>
    );
  }
}

export default App;
