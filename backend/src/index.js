import express from 'express';
import axios from 'axios';

const app = express();

// takes in a query and makes a request to the API
app.get('/api/recipe/:query', async (req, res) => {

  // get the query from the request
  const query = req.params.query;

  // attempt to make a request to the API
  try {
    const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`);
    const data = response.data;
    res.send(data);
  } catch (error) {
    //handle error
    res.send(error);
  }

});

// takes in a recipe id and makes a request to the API for the specific recipe
app.get('/api/search/:id', async (req, res) => {

  // get the id from the request
  const id = req.params.id;

  // attempt to make a request to the API
  try {
    const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    // parse the response and return it to the client
    const data = response.data;
    res.send(data);
  } catch (error) {
    // handle error
    res.send(error);
  }

});

// makes a request to the API for a random recipe
app.get('/api/recipes/random', async (req, res) => {
  try {
    // get data form api, parse it and return it to the client
    const response = await axios.get('http://www.themealdb.com/api/json/v1/1/random.php');
    res.send(response.data);
  } catch (error) {
    //handle error
    res.send(error);
  }

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});