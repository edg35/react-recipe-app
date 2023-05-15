import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/recipe/:query', async (req, res) => {

  const query = req.params.query;

  try {
    const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`);
    const data = response.data;
    res.send(data);
  } catch (error) {
    res.send(error);
  }

});

app.get('/api/search/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = response.data;
    res.send(data);
  } catch (error) {
    res.send(error);
  }

});

app.get('/api/recipes/random', async (req, res) => {

  try {
    const response = await axios.get('http://www.themealdb.com/api/json/v1/1/random.php');
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});