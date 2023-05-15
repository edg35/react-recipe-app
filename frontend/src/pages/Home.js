import React from 'react';
import '../App.css';
import QuisineCard from '../components/QuisineCard';
import { Grid } from '@mui/material';
import RandomRecipeCard from '../components/RandomRecipeCard';

const options = [
  {
    src: "https://cdn-icons-png.flaticon.com/128/8346/8346899.png",
    alt: "hamburger",
    text: "Sandwiches"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515263.png",
    alt: "salad",
    text: "Vegetarian"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png",
    alt: "pizza",
    text: "Italian"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2718/2718224.png",
    alt: "Ramen",
    text: "Japanese"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/737/737967.png",
    alt: "fastfood",
    text: "American"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/8346/8346807.png",
    alt: "cake",
    text: "Dessert"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515225.png",
    alt: "taco",
    text: "Mexican"
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
            <QuisineCard src={option.src} text={option.text} key={option.alt} />
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