import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';
import { Grid, Container } from 'semantic-ui-react';

export default function LocationsList() {
    const [locs, setLocs] = useState([])

  useEffect(() => {
    
      axios
      .get(`https://rickandmortyapi.com/api/location/`, {
        params: {}
      })
      .then (resp => {
        const loc = resp.data.results;
        console.log("Rick and Morty locations", loc);
        setLocs(loc)
      })
    
  }, []);

  return (
    <Container>
      <Grid relaxed columns={2}>
        <Grid.Row padded='vertically' columns={2}>
          {locs.map(newLoc => {
          
          return (
            <LocationCard
            key={newLoc.id}
            id={newLoc.id}
            name={newLoc.name}
            type={newLoc.type}
            dimension={newLoc.dimension}
            residents={newLoc.residents}
            />
          );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  
  );
}

