import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardMedia, IconButton, CardContent, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RandomRecipeCard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get('http://www.themealdb.com/api/json/v1/1/random.php', {
        headers: {
          'Access-Control-Allow-Origin': 'http://www.themealdb.com',
        }
      });
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    }

    if(isLoading) {
      getRecipe();
    }

  }, []);

  return (
    <Card>
        <CardHeader 
            title={data.strMeal}
            subheader={`${data.strArea} | ${data.strCategory} | $`}
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
              src={data.strMealThumb}
            alt="food"
        />
        <CardContent className='recipe-card-content'>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>
    </Card>
  )
}

export default RandomRecipeCard