import React from 'react';
import '../App.css';
import QuisineCard from '../components/QuisineCard';
import { Grid } from '@mui/material';
import RandomRecipeCard from '../components/RandomRecipeCard';

const options = [
  {
    src: "https://cdn-icons-png.flaticon.com/128/783/783043.png",
    alt: "seafood",
    text: "Seafood"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515263.png",
    alt: "vegetarian",
    text: "Vegetarian"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/3480/3480618.png",
    alt: "pasta",
    text: "Pasta"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/1046/1046751.png",
    alt: "chicken",
    text: "Chicken"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/737/737967.png",
    alt: "miscellaneous",
    text: "Misc."
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/8346/8346807.png",
    alt: "dessert",
    text: "Dessert"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/10536/10536275.png",
    alt: "side",
    text: "Sides"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/706/706164.png",
    alt: "vegan",
    text: "Vegan"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/706/706871.png",
    alt: "starter",
    text: "Starter",
  }
]


const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>2.3 million recipes <br /> At your fingertips</h1>
        <img alt="Hero" src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?cs=srgb&dl=pexels-pixabay-326279.jpg&fm=jpg"></img>
      </div>
      <div className = "quisine-container">
        <h2>Search by quisine</h2>
         <div className='quisine-list'>
          {options.map(option => (
            <QuisineCard op={option} key={option.alt} />
          ))}
         </div>
      </div>
      <div className='featured-recipes'>
        <h2>Featured Recipes</h2>
        <Grid container spacing={4} sx={{ width: '100%' }}>
          <Grid item xs={12} sm={6} md={3}>
            <RandomRecipeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RandomRecipeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RandomRecipeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RandomRecipeCard />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home