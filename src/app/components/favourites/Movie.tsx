import React, { useEffect, useState } from "react";
import MovieItem from "../common/MovieItem";
import { getUpdatedMoviesData } from "../../../utils/dataHandler";
import { StaticImageData } from "next/image";

interface Platform {
  src?: StaticImageData | string;
  link?: string;
}

interface Trailer {
  url: string;
  title: string;
}

interface MovieInfo {
  id: number;
  poster?: StaticImageData | string;
  title: string;
  content: string;
  cast: string;
  director: string;
  genre: string;
  platforms: Platform[];
  trailers: Trailer[];
}

const Movie: React.FC = () => {
  const [movies, setMovies] = useState<MovieInfo[]>([]); // MovieInfo 타입 지정

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const updatedMovies: MovieInfo[] = await getUpdatedMoviesData(); // 데이터 타입 단언
        setMovies(updatedMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error); // 에러 처리
      }
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
