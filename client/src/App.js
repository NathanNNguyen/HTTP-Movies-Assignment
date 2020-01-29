import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from './Movies/UpdateForm';
import axios from 'axios'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res =>
        setMovies(res.data)
        // console.log(res)
      )
      .catch(err => console.log(err.response));
  }, [])

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList movies={movies} />
      </Route>
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path='/update-form/:id'>
        <UpdateForm movies={movies} />
      </Route>
    </>
  );
};

export default App;
