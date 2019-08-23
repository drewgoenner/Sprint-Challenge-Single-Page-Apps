import React from "react";
import { Card, Grid } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  return (

    <Grid.Column padded='horizontally' key={props.id}>
      <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>Episode: {props.episode}</Card.Description>
          <Card.Description>Air Date: {props.airdate}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>

  )
}