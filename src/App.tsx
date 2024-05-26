import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNewRecipeButton from "./components/AddNewRecipeButton";
import RecipeSearchBar from "./components/RecipeSearchBar";
import SearchResults from "./components/SearchResults";
import Recipe from "./components/Recipe";
import { ISearchResult } from "./models/ISearchResult";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
