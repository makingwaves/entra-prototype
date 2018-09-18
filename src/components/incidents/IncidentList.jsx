import React, { Component } from "react";

//Components
import Incident from "./Incident";

import { List } from "tabler-react";

class IncidentList extends Component {
  render() {
    const incidents = this.props.incidents;

    return (
      <List.Group className="incident-list">
        <Incident incidents={incidents} />
      </List.Group>
    );
  }
}

export default IncidentList;
