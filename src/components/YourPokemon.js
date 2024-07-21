import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import './YourPokemon.css';

const YourPokemon = () => {
  const { team } = useContext(PokemonContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Pokémon Team</Typography>
      <Grid container spacing={3}>
        {team.map(pokemon => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card className="team-card">
              <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default YourPokemon;
