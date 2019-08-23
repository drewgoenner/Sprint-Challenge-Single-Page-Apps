import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Grid, Container } from 'semantic-ui-react';


export default function CharacterList() {
  const [chars, setChars] = useState([])

  useEffect(() => {
    
      axios
      .get(`https://rickandmortyapi.com/api/character/`, {
        params: {}
      })
      .then (resp => {
        const char = resp.data.results;
        setChars(char)
      })
    
  }, []);

  return (
    <Container>
      <Grid relaxed columns={2}>
        <Grid.Row padded='vertically' columns={2}>
          {chars.map(newChar => {
          
          return (
            <CharacterCard
            key={newChar.id}
            id={newChar.id}
            image={newChar.image}
            name={newChar.name}
            status={newChar.status}
            species={newChar.species}
            origin={newChar.origin}
            location={newChar.location}
            episode={newChar.episode}
            />
          );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
