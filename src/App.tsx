import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNewRecipeButton from "./components/AddNewRecipeButton";
import RecipeSearchBar from "./components/RecipeSearchBar";
import SearchResults from "./components/SearchResults";
import Recipe from "./components/Recipe";
import { ISearchResult } from "./models/ISearchResult";

function App() {
  const searchResults: ISearchResult[] = [
    {
      recipe: {
        ingredients: ["cheese", "milk", "milk2"],
        name: "Cheesy Milk",
        steps: ["add cheese to milk", "add milk cheese mixture to other milk"],
      },
    },
  ];
  return (
    <div className="App">
      <AddNewRecipeButton />
      <RecipeSearchBar />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
