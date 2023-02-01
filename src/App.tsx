import './App.css';
import React, { useEffect, useState } from "react";
import { rootCertificates } from 'tls';
import RecipeItem from '../src/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Pages from './pages/Pages';

function App() {

  const APP_ID = '42e13264';
  const APP_KEY = '9cc1186e25c9542efe227cc41afa5466';

  const [recipes, setRecipes] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  }

  const getSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} 
        onChange={updateSearch} placeholder="Search Recipes Here.."/>
        <i className="search-button fa fa-search"></i>
      </form>
      <div className='recipesList'>
        {recipes.map(rec => (
            <RecipeItem
            key={rec.recipe.label} 
            title={rec.recipe.label} 
            calories={rec.recipe.calories} 
            image={rec.recipe.image} 
            ingredients={rec.recipe.ingredients}
            />      
        ))}
      </div>
    </div>
  )
}

export default App;
