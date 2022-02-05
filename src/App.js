import './App.css';
import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

function App() {

  const APP_ID = `e3e6106b`;
  const APP_KEY = `52672c42a12a37d65e100a348831e277`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  function getSearch(e){
    e.preventDefault();
    setQuery(search);
    console.log(search);
    setSearch('');
    console.log(search);
  }

  return <div>
    <form className='search-form' onSubmit={getSearch}>
      <input value={search} className='search-bar' type="text" onChange={(e) => setSearch(e.target.value)} />
      <button className='search-button' type='submit'>Search</button>
    </form>
    {
      recipes.map((recipe, i) => <Recipes key={recipe + i} recipe={recipe.recipe} />)
    }
  </div>;
}

export default App;
 