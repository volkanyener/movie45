import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("idle");
  const [movieData, set_movieData] = useState([]);
  const history = useHistory();
  const params = useParams();

  console.log("url", params);

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
    console.log("history", history);
    // console.log("Succes!", navigateToSearch);
  };

  useEffect(() => {
    async function search() {
      const queryParam = encodeURIComponent(params.searchtext);
      const data = await axios.get(
        `https://www.omdbapi.com/?apikey=ad3fbe99&s=${queryParam}`
      );
      console.log("data", data);
      set_searchState("done");
      set_movieData(data.data.Search);
    }
    search();
  }, [params]);

  return (
    <div>
      <p>{searchState}</p>
      <form onSubmit={navigateToSearch}>
        <label>
          Discover some movies!
          <input
            style={{ marginRight: 15 }}
            onChange={(event) => set_searchText(event.target.value)}
            search="search"
            value={searchText}
          />
        </label>
        <button type="submit">Search Movie</button>
      </form>
      {movieData.map((movie) => {
        return (
          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
            <div>
              Title:{movie.Title}
              <br />
              Year:{movie.Year}
              <br />
              imdb ID:{movie.imdbID}
              <br />
              {/* Picture: */}
              <img
                src={movie.Poster}
                alt="movie poster"
                width="500"
                height="600"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// const search = async (event) => {
//   event.preventDefault();
//   const queryParam = encodeURIComponent(searchText);
//   // console.log("Start searching for:", searchText);

//   set_searchState("searching");

//   const data = await axios.get(
//     `https://www.omdbapi.com/?apikey=ad3fbe99&s=${queryParam}`
//   );

//   set_searchState("done");
//   console.log("Succes!", data.Search);

//   set_movieData(data.Search);
//   history.push(`/discover/${queryParam}`);
//   console.log("moviedata test:", data.search);
// };
