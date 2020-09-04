import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviePage";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/components/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/discover/:searchtext?"
          component={DiscoverMoviesPage}
        />
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
