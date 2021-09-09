import "./App.css";
import "./resetter.css";
import { client } from "./client";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [recipes, setRecipes] = useState([]);

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name: name,
  //     image: image,
  //     ingredients: ingredients,
  //     description: description,
  //   };
  //   axios
  //     .post("https://thecookbookmongodb.herokuapp.com/recipes", data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    axios
      .get("https://thecookbookmongodb.herokuapp.com/recipes")
      .then((json) => {
        setRecipes(json.data.data);
        console.log("blablabla", json.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("recipes console", recipes);

  return (
    <div className="App">
      <div className="container">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/recipes/:id">
              <Post recipes={recipes} />
            </Route>
            <Route path="/recipes">
              <Posts recipes={recipes} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home recipes={recipes} />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
