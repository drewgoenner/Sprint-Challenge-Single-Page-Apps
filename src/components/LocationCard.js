import React from "react";
import { Card, Grid } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (

    <Grid.Column padded='horizontally' key={props.id}>
      <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>Type: {props.type}</Card.Description>
          <Card.Description>Dimension: {props.dimension}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          Residents: {props.residents.length}
        </Card.Content>
      </Card>
    </Grid.Column>

  )
}
