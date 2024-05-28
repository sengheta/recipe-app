import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNewRecipeButton from "./components/AddNewRecipeButton";
import RecipeSearchBar from "./components/RecipeSearchBar";
import SearchResults from "./components/SearchResults";
import Recipe from "./components/Recipe";
import { ISearchResult } from "./models/ISearchResult";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddNewRecipe from "./pages/AddNewRecipe";
import ViewAllRecipes from "./pages/ViewAllRecipes";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AddNewRecipe" element={<AddNewRecipe />} />
          <Route path="/ViewAllRecipes" element={<ViewAllRecipes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
