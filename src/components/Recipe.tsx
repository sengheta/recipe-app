import React from "react";
import { IRecipe } from "../models/IRecipe";

function Recipe(props: { recipe: IRecipe }) {
  return (
    <>
      <h1> {props.recipe.name} </h1>
      <ol> Ingredients </ol>
      {props.recipe.ingredients.map((ingredient) => (
        <li> {ingredient} </li>
      ))}

      <ol> Recipe Steps </ol>
      {props.recipe.steps.map((step) => (
        <li> {step} </li>
      ))}
    </>
  );
}
export default Recipe;
