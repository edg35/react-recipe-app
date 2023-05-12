import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();
  return (
    <div className='recipelist-container'>
      {loading && <Box sx={{height: '100%', width: '100%', display:'flex',justifyContent: 'center', alignItems: 'center'}}><CircularProgress color='success' /></Box>}
    </div>
  )
}

export default RecipeList