export default function AddNewRecipe() {
  function addIngredient() {
    return (
      <label>
        Ingredient: <input name="Ingredient" />
      </label>
    );
  }

  return (
    <>
      <label>
        Name of Recipe: <input name="recipeName" />
      </label>
      <hr />
      <h2> Ingredients </h2>
      <hr />
      <button onClick={addIngredient}> Add Ingredient </button>
      <hr />
      <label>
        Steps: <input name="step" />
      </label>
    </>
  );
}
