import React, { Component } from 'react';

//Tabler
import { Grid, List } from 'tabler-react';

export default class CategoryList extends Component {
  render() {
    return (
      <Grid.Col width={2}>
        <List.Group transparent={true}>
          <List.GroupItem action active icon="inbox">
            All
          </List.GroupItem>
          <List.GroupItem action icon="alert-circle">
            Confident
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Vifter
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Vendere
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Pumper
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Viftevakt
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Varmekabel
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Spjeld
          </List.GroupItem>
        </List.Group>
      </Grid.Col>
    );
  }
}

// const INCIDENTS = [
//   {
//     sensorName: 'JV400-1',
//     sensorCategory: 'Vifter',
//     sensorBuilding: 'Grenseveien 26',
//     date: '01.01.2000',
//     confidence: '85'
//   },
//   {
//     sensorName: 'JV400-2',
//     sensorCategory: 'Vifter',
//     sensorBuilding: 'Grenseveien 26',
//     date: '02.02.2001',
//     confidence: '97'
//   },
//   {
//     sensorName: 'JV400-3',
//     sensorCategory: 'Vifter',
//     sensorBuilding: 'Grenseveien 26',
//     date: '03.04.2004',
//     confidence: '65'
//   },
//   {
//     sensorName: 'JV400-4',
//     sensorCategory: 'Vifter',
//     sensorBuilding: 'Grenseveien 26',
//     date: '04.04.2006',
//     confidence: '25'
//   },
//   {
//     sensorName: 'ZX200-1',
//     sensorCategory: 'Vender',
//     sensorBuilding: 'Grenseveien 26',
//     date: '04.04.2006',
//     confidence: '25'
//   }
// ];
