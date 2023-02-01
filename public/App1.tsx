import './App.css';
import React, { useEffect, useState } from "react";
import RecipeItem from '../src/Recipe';
import { rootCertificates } from 'tls';
// import Pages from './pages/Pages';

function App() {
  const APP_ID = '42e13264';
  const APP_KEY = '9cc1186e25c9542efe227cc41afa5466';

  const [recipes, setRecipes] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);

  }

  return (
    <div className="App">
      <form action="" className="seach-form">
        <input className="search-bar" type="text" />
        <button onClick={() => setCounter(counter + 1)} 
          className="search-button" 
          type="submit">Search
        </button>
      </form>
      {recipes.map(recipes => (
      <RecipeItem />  
      ))};
      
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
}

export default App;
