import React from "react";
import { IRecipe } from "../models/IRecipe";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

function Recipe(props: { recipe: IRecipe }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 275 }}>
      <CardContent sx={{ bgcolor: "lightblue" }}>
        <Typography variant="h5"> {props.recipe.name} </Typography>
        <ol> Ingredients </ol>
        {props.recipe.ingredients.map((ingredient) => (
          <li> {ingredient} </li>
        ))}

        <ol> Recipe Steps </ol>
        {props.recipe.steps.map((step) => (
          <li> {step} </li>
        ))}
      </CardContent>
    </Card>
  );
}
export default Recipe;
