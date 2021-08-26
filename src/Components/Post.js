import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import marked from "marked";

const Post = ({ recipes }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const PopupClick = () => {
    setButtonPopup(true);
  };

  const { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.sys.id === id);

  return (
    <div className="SingleRecipeContainer">
      {recipe ? (
        <div className="SingleRecipe">
          <div className="SingleRecipeTitle">
            <h1>{recipe.fields.name}</h1>
          </div>
          <div className="SingleRecipeHead">
            <div className="SingleRecipeImage">
              <img
                src={recipe.fields.image.fields.file.url}
                alt={recipe.fields.name}
              />
            </div>
            <div className="SingleRecipeIngredients">
              <h2>Ingredients</h2>
              <p>{recipe.fields.ingredients}</p>
            </div>
          </div>
          <div className="SingleRecipeDescription">
            <h2 className="StepByStep">Step by step:</h2>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: marked(recipe.fields.description),
              }}
            ></div>
          </div>
          <div className="BackButton">
            <Link to="/recipes/">
              <button>Go back</button>
            </Link>
            <button onClick={PopupClick} className="share">
              SHARE
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
          </div>
        </div>
      ) : (
        <div>Is loading...</div>
      )}
    </div>
  );
};

export default Post;
