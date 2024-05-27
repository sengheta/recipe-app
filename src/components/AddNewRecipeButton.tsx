import { Button } from "@mui/material";
import React from "react";

function AddNewRecipeButton() {
  function handleClick() {
    alert("Add your recipe");
  }

  return (
    <Button onClick={handleClick} variant="contained">
      Add New Recipe Button
    </Button>
  );
}

export default AddNewRecipeButton;
