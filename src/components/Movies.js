import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=>{
        return (
          <div>
            Title: {movie.title} <br/>
            Time: {movie.time}
            <ul>{movie.genres.map(genre=> <li>{movie.genres}</li>)}</ul>
          </div>
        )
      })}
    </div>

  )
}

export default Movies;
