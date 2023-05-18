import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Grid } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  useEffect(() => {
   const getRecipes = async () => {
    try {
      const response = await axios.get(`/api/recipe/${query}`);
      const data = response.data;
      setRecipes(data.meals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
   }

   if(loading){
    getRecipes();
   }

  },[]);


  if(loading) {
    return <Box sx={{height: '100vh', width: '100%', display:'flex',justifyContent: 'center', alignItems: 'center'}}><CircularProgress color='success' /></Box>
  }

  return (
    <div className='recipelist-container'>
      {error ? <p>error</p>
      : <h3>{`Results for ${query}:`}</h3>}
      <Grid container spacing={3} sx={{
        padding: '20px',
      }}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default RecipeList