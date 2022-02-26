import "./index.css";
import React, { useState, useEffect } from "react";
import test from "./components/test";

export default function App() {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;

  const [search, setSearch] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [recipeSum, setRecipeSum] = useState([]);
  const [query, setQuery] = useState([]);

  // const [id, setId] = useState([]);

  useEffect(() => {
    async function getRecipeData () {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APIKey}`
      );
      const data = await response.json();
      setRecipeData(data.results);
      console.log(data.results);
      let recipeSum = [];
      for (let i = 0; i < response.data.results.length; i++) {
        async function getRecipeSum() {
          const res = await fetch(
            `https://api.spoonacular.com/recipes/${response.data.results[i].id}/summary&apiKey=${APIKey}`
          );
          recipeSum.push(res.data);
          setRecipeSum(recipeSum);
        }
        getRecipeSum();
      }
    };
  getRecipeData()
  }, [query]);

  
  // const getRecipeSum = async () => {
  //   const response = await fetch(
  //     `https://api.spoonacular.com/recipes/${id}/summary&apiKey=${APIKey}`
  //   );
  //   const data = await response.json();
  //   setRecipeSum(id.summary);
  //   setId(id.summary);
  //   console.log(id.summary);
  // };

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
            onClick={getRecipeData}
          >
            Munch Away
          </button>
        </form>
        <div className="recipe_cards">
          <test
          recipeData={recipeData}
          recipeSum={recipeSum}
          />
        </div>
      </div>
    </div>
  );
}
