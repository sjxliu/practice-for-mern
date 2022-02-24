import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />;

function RecipeCards({ image, link, id, summary, title }) {
  return (
    <div className="card-container">
      <div className="w3-card-4" key={id}>
        <img src={image} alt={image.alt} />
        <div className="w3-container w3-center">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <button href={link}>Go to recipe!</button>
        <button>Add to Favs</button>
      </div>
    </div>
  );
}

export default RecipeCards;
