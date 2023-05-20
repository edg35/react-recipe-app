import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardMedia, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeCard = ({ recipe }) => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get(`/api/search/${recipe.idMeal}`);
                setData(res.data.meals[0]);
                setIsLoading(false);
            } catch(err){
                setError(err.message);
            }
        }

        if(isLoading){
            getData();
        }
    }, []);

  if(error){
    return <div>{error}</div>
  }

  return (
    <Card>
        <CardHeader 
            title={recipe.strMeal}
            subheader={`${data.strArea} | ${data.strCategory}`}
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
        />
    </Card>
  )
}

export default RecipeCard