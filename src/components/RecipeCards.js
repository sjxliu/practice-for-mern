import React from "react";
import Recipe from "./Recipe";
import CardStyles from "./CardStyles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />;

function RecipeCards(props) {
  return (
    <div
      className="card-container"
      style={CardStyles}
      key={props.recipeCards.id}
    >
      {props.recipeData.map((recipe) => (
        <div className="w3-card-4">
          <Recipe id={recipe.id} title={recipe.title} image={recipe.image} />
        </div>
      ))}

      <button className="w3-button w3-blue" href={props.url}>
        Go to recipe!
      </button>
      <button className="w3-button w3-green">Add to Favs</button>
    </div>
  );
}

export default RecipeCards;
