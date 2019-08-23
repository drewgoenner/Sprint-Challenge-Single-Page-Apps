import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard';
import { Grid, Container } from 'semantic-ui-react';


export default function EpisodesList() {

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    
      axios
      .get(`https://rickandmortyapi.com/api/episode/`, {
        params: {}
      })
      .then (resp => {
        const epis = resp.data.results;
        setEpisodes(epis)
      })
    
  }, []);

  return (
    <Container>
      <Grid relaxed columns={2}>
        <Grid.Row padded='vertically' columns={2}>
          {episodes.map(newEpi => {
          
          return (
            <EpisodeCard
            key={newEpi.id}
            id={newEpi.id}
            name={newEpi.name}
            airdate={newEpi.air_date}
            episode={newEpi.episode}
            />
          );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}