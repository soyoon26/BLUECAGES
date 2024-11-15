import React from "react";
import MovieItem from "../common/MovieItem";
import moviesData from "./MoviesData";
const Movie = () => {
  return (
    <div className="w-full">
      {moviesData.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movie;
