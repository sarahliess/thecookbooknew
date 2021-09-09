import axios from "axios";
import React, { useState } from "react";

function PostForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      image,
      ingredients,
      description,
    };

    axios
      .post("https://thecookbookmongodb.herokuapp.com/recipes", newRecipe)
      .then((res) => {
        console.log(res);
      });

    setName("");
    setImage("");
    setIngredients("");
    setDescription("");

    alert("Your recipe has been added.");
  };

  return (
    <div className="RecipeForm">
      <h2>ADD YOUR OWN RECIPE!</h2>
      <form onSubmit={handleSubmit}>
        <input
          maxLength="200"
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          maxLength="500"
          type="text"
          placeholder="Recipe Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Recipe Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Recipe Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          disabled={
            (name.length < 5,
            image.length < 5,
            ingredients.length < 5,
            description.length < 5)
          }
          type="submit"
          value="Add Recipe"
        >
          ADD RECIPE
        </button>
      </form>
    </div>
  );
}

export default PostForm;
