import { Link } from "react-router-dom";
import { useState } from "react";

function Posts({ recipes }) {
  const [search, setSearch] = useState();

  const searchFunction = (e) => {
    console.log(search);
    setSearch(e.target.value);
  };

  const loadSearch = (search) => {
    const url = search;
  };

  return (
    <>
      <div className="RecipeHeaderImg">
        <h1 className="BackgroundText2">OUR RECIPES</h1>
      </div>
      <div className="SearchContainer">
        <input
          className="InputField"
          placeholder="Search"
          onChange={searchFunction}
        />
        <button>Search</button>
      </div>
      <div className="RecipeBox">
        {recipes.map((recipe, index) => (
          <div className="RecipeContainer">
            <div key={index} className="RecipeTitle">
              {recipe.fields.name}
            </div>

            <div key={index} className="RecipeImage">
              <Link to={`/recipes/${recipe.sys.id}`}>
                <img
                  key={index}
                  src={recipe.fields.image.fields.file.url}
                  alt={recipe.fields.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <a href="/">
          <button className="BackHomeButton">Back home</button>
        </a>
      </div>
    </>
  );
}

export default Posts;
