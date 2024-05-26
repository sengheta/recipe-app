import React from "react";

function AddNewRecipeButton() {
  function handleClick() {
    alert("Add your recipe");
  }

  return <button onClick={handleClick}>AddNewRecipeButton</button>;
}

export default AddNewRecipeButton;
