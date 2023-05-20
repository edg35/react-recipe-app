import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Divider, Box, CircularProgress } from '@mui/material';
import YoutubeVideo from '../components/YoutubeVideo';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getRecipes = async() =>{
      try{
        const res = await axios.get(`/api/search/${id}`);
        setLoading(false);
        setRecipe(res.data.meals[0]);
        console.log(res.data.meals[0]);
      } catch(error){
        setLoading(false);
        setError(error.message);
      }
    }

    if(loading) {
      getRecipes();
    }

  }, [])

  
  const youtube = recipe.strYoutube

  if(loading) {
    return <Box sx={{height: '100vh', width: '100%', display:'flex',justifyContent: 'center', alignItems: 'center'}}><CircularProgress color='success' /></Box>
  }

  return (
    <>
      {error ? <div>{error}</div> : <h3 className='recipe-page-meal-title'>{recipe.strMeal}</h3>}
      <Grid container spacing={3} sx={{ padding: '20px'}} >
        <Grid item xs={12} sm={3} md={4} lg={4}>
          <Paper sx={{width: '100%', height: '100vh'}}>
            <h4 className='recipe-page-heading'>Ingredients</h4>
            <Divider />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9} md={8} lg={8}>
          <Paper sx={{width: '100%', height: '40vh', marginBottom: '5vh'}}>
            <h4></h4>
            {youtube == null ? <div className='video-not-found'>Sorry! We cant pull up the video right now.</div> : <YoutubeVideo str={youtube} />}
          </Paper>
          <Paper sx={{width: '100%', height: '55vh', overflow: 'scroll'}}>
            <h4 className='recipe-page-heading'>Directions</h4>
            <Divider />
            <div className='recipe-page-instr'>{recipe.strInstructions}</div>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default RecipePage