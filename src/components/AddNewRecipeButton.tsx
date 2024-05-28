import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AddNewRecipeButton() {
  return (
    <Button>
      <Link to="/AddNewRecipe"> Add New Recipe </Link>{" "}
    </Button>
  );
}

export default AddNewRecipeButton;
