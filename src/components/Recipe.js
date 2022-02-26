import React from "react";

export default function Recipe(props) {
  return (
    <div className="recipe-card" key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <image src={props.image} alt={props.title}></image>
    </div>
  );
}
