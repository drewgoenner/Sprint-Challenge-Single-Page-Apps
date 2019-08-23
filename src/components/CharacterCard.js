import React from "react";
import { Card, Grid, Image, Icon } from 'semantic-ui-react';


export default function CharacterCard(props) {
  console.log(props);
  return (
    
    <Grid.Column padded='horizontally' key={props.id}>
      <Card>
        <Image src= {props.image}/>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.species} {props.status}</Card.Meta>
          <Card.Description>Location: {props.location.name}</Card.Description>
          <Card.Description>Origin: {props.origin.name}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='user' />
          Episodes: {props.episode.length}
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}
