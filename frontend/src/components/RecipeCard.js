import React from 'react'
import { Card, CardHeader, CardMedia, IconButton, CardContent, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const RecipeCard = () => {
    const { user } = useUser();
    const navigate = useNavigate();

  return (
    <Card>
        <CardHeader 
            title="Shrimp and Chorizo Paella"
            subheader="30min | 450cal"
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
              src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1600"
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

export default RecipeCard