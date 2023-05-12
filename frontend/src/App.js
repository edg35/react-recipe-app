import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RecipeList from './pages/RecipeList';
import RecipePage from './pages/RecipePage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipies />} />
          <Route path='/recipes/:query' element={<RecipeList />} />
          <Route path='/recipe/:id' element={<RecipePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
