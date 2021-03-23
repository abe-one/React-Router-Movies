import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieListComponent from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    if (!saved.includes(id)) {
      setSaved([...saved, movieList.find((movie) => movie.id === id)]);
      console.log(movieList.find((movie) => movie.id === id));
    }
  };

  return (
    <div>
      <SavedList
        list={saved}
        // {saved.map((movieID) => {
        //   movieList.find((movie) => movie.id == 0);
        // })}
      />
      <Switch>
        <Route path="/movies/:movieID">
          <Movie addToSavedList={addToSavedList} />
        </Route>
        <Route path="/">
          <MovieListComponent
            movies={movieList}
            saved={saved}
            setSaved={setSaved}
            addToSavedList={addToSavedList}
          />
        </Route>
      </Switch>
    </div>
  );
}
