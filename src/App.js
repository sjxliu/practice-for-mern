// Lost file
import "./index.css";
import React, { useState, useEffect } from "react";
import RecipeCards from "./components/RecipeCards";

export default function App() {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const [search, setSearch] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [recipeSum, setRecipeSum] = useState([]);
  const [query, setQuery] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    getRecipeData();
    getRecipeSum();
  }, [query]);

  const getRecipeData = async () => {
    const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APIKey}`);
    const data = await response.json();
    setRecipeData(data.results);
    console.log(data.results);
  };

  const getRecipeSum = async () => {
    const response = await fetch(
     `https://api.spoonacular.com/recipes/${id}/summary&apiKey=${APIKey}`);
    const data = await response.json();
    setRecipeSum(id.summary);
    setId(id.summary);
    console.log(id.summary);
  };

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
          <button
            type="submit"
            className="recipe"
            onClick={(getRecipeData, getRecipeSum)}
          >
            Munch Away
          </button>
        </form>
        <div className="recipe_cards">
          {recipeData.map((recipe) => (
            <RecipeCards
            title={recipe.title}
              image={recipe.image}
              alt={recipe.imageUrl}
              button={recipe.source}
            />
          ))}
          {recipeSum.map((recipe) => (
            <RecipeCards
              
              id={recipe.id.summary}
              key={recipe.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
