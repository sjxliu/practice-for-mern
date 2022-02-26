import "./index.css";
import React, { useState, useEffect } from "react";
import RecipeCards from "./components/RecipeCards";
import axios from "axios";

export default function App() {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;
  const complexSearch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}`;

  const [search, setSearch] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [recipeSum, setRecipeSum] = useState([]);
  const [query, setQuery] = useState([]);
  const [id, setId] = useState([]);

  const getAll = useEffect(() => {
    const getRecipeData = async () => {
      const res = await axios.get(`${complexSearch}`);
      setRecipeData(res.data.results);

      let recipeSum = [];
      for (let i = 0; i < res.data.results.length; i++) {
        async function getRecipeSum() {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${res.data.results[i].id}/information?apiKey=${APIKey}&includeNutrition=false`
          );
          recipeSum.push(response.data);
          setRecipeSum(recipeSum);
        }
        getRecipeSum();
      }
    }

    getRecipeData();
  }, [query]);

  
  const searchResults = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Got Munchies?</h1>
      <div className="search-form">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-form"
            type="text"
            placeholder="lookin' for some munchies"
            value={search}
            onChange={searchResults}
          />
          <button type="submit" className="recipe" onClick={getAll}>
            Munch Away
          </button>
        </form>
        <div className="recipe_cards">
          {recipeData.map((recipe) => (
            <RecipeCards
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              text={recipe.id.summary}
              alt={recipe.imageUrl}
              button={recipe.sourceUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
