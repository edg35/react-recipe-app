import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import '../App.css';
import RecipeCard from '../components/RecipeCard';


const Recipies = () => {
  return (
    <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={4} lg={3}>
            <RecipeCard />
        </Grid2>
          <Grid2 item xs={12} md={4} lg={3}>
              <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={4} lg={3}>
              <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={4} lg={3}>
              <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={4} lg={3}>
              <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={4} lg={3}>
              <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={4} lg={3}>
              <RecipeCard />
          </Grid2>
    </Grid2>
  )
}

export default Recipies