import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardMedia, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RandomRecipeCard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  const handleNavigate = (id) => {
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    const getRecipe = async () => {
      try{
        const res = await axios.get('/api/recipes/random');
        setRecipe(res.data.meals[0]);
        setLoading(false);
      } catch(err){
        console.log(err);
        setLoading(false);
      }
    }

    if(loading) {
      getRecipe();
    }

  }, [])

  return (
   <Card>
        <CardHeader 
            title={recipe.strMeal}
            subheader={`${recipe.strArea} | ${recipe.strCategory}`}
            action={
                <IconButton aria-label="add to favorites" size="large" onClick={() =>{
                    if(!user){
                        navigate('/login');
                    }
                }}  >
                    <FavoriteBorderIcon fontSize='inherit' />
                </IconButton>
            }
        />
        <CardMedia
            component="img"
            height="194"
            src={recipe.strMealThumb}
            alt="food"
            onClick={handleNavigate(handleNavigate(recipe.id))}
        />
    </Card>
  )
}

export default RandomRecipeCard