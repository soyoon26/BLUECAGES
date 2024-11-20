import React, { useEffect, useState } from "react";
import MovieItem from "../common/MovieItem";
import { getUpdatedMoviesData } from "../../../utils/dataHandler";

const Movie = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const updatedMovies = await getUpdatedMoviesData();
      setMovies(updatedMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movie;
