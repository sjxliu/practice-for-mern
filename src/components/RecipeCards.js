import React from "react";
import CardStyles from "./CardStyles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />;

function RecipeCards({ image, sourceUrl, id, summary, title, imageUrl }) {
  return (
    <div className="card-container" >
      <div className="w3-card-4" key={id} >
        <header >{title}</header>
        <img src={image} alt={imageUrl} />
        <div className="w3-container w3-center">
          <p>{summary}</p>
        </div>
        <button className="w3-button w3-blue" href={sourceUrl}>
          Go to recipe!
        </button>
        <button className="w3-button w3-green">Add to Favs</button>
      </div>
    </div>
  );
}

export default RecipeCards;