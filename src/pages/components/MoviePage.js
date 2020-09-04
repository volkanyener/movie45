import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const [movieData, set_movieData] = useState({});
  console.log("render", movieData);
  const route_parameters = useParams();
  console.log("routeparameters", route_parameters);

  useEffect(() => {
    async function fetchData() {
      // console.log("I am gonna fetch some data!", movieData);

      const dataMovie = await axios.get(
        `http://www.omdbapi.com/?i=${route_parameters.imdb_id}&plot=full&apikey=ad3fbe99`
      );
      console.log("got back", dataMovie.data);

      set_movieData(dataMovie.data);
    }
    fetchData();
  }, [route_parameters.imdb_id]);

  return (
    <div>
      <h1>{movieData.Title}</h1>
      <h3>Year released: {movieData.Year}</h3>
      <h3>Runtime: {movieData.Runtime}</h3>
      <img src={movieData.Poster} alt="movie poster" />
    </div>
  );
}
