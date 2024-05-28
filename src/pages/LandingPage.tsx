import { Box, Container, Grid } from "@mui/material";
import AddNewRecipeButton from "../components/AddNewRecipeButton";
import Recipe from "../components/Recipe";
import RecipeSearchBar from "../components/RecipeSearchBar";
import SearchResults from "../components/SearchResults";
import { IRecipe } from "../models/IRecipe";
import NavBar from "../components/NavBar";

export default function LandingPage() {
  const topFiveRecent: IRecipe[] = [
    {
      ingredients: ["bread", "tortilla"],
      name: "Tortilla Sandwich",
      steps: ["put the tortilla on the bread"],
    },
    {
      ingredients: ["bread", "ham"],
      name: "Ham Sandwich",
      steps: ["put the ham on the bread"],
    },
    {
      ingredients: ["rice", "shrimp"],
      name: "Paella",
      steps: ["mix the rice with the shrimp"],
    },
    {
      ingredients: ["milk", "cereal"],
      name: "Breakfast Cereal",
      steps: ["add the cereal to the bowl", "add the milk"],
    },
    {
      ingredients: ["yogurt", "banana"],
      name: "Banana Smoothie",
      steps: ["blend banana and yogurt"],
    },
  ];
  return (
    <Container>
      <Box>
        <AddNewRecipeButton />
      </Box>
      <Box>
        <RecipeSearchBar />
      </Box>

      <Grid container>
        {topFiveRecent.map((recipe) => (
          <Grid item xs={6} sm={3}>
            <Recipe recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
