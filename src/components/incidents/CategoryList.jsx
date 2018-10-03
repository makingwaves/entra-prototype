import React, { Component } from 'react';
import { Grid, List } from 'tabler-react';

export default class CategoryList extends Component {
  render() {
    return (
      <Grid.Col width={2}>
        <List.Group transparent>
          <List.GroupItem action active icon="inbox">
            Alle
          </List.GroupItem>
          <List.GroupItem action icon="alert-circle">
            Sikker
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
        <List.Group transparent>
          <List.GroupItem action active icon="inbox">
            Arkiv
          </List.GroupItem>
          <List.GroupItem action icon="alert-circle">
            Todo
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Avventer
          </List.GroupItem>
          <List.GroupItem action icon="tag">
            Planlagt
          </List.GroupItem>
        </List.Group>
      </Grid.Col>
    );
  }
}
