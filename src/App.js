import "./App.css";
import "./resetter.css";
import { client } from "./client";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        console.log(response.items[0].fields.name);
        setRecipes(response.items);
      })
      .catch(console.log("Something went wrong"));
  }, []);

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
