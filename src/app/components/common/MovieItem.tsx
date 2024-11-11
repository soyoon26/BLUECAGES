import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import TrailerList from "./TrailerList";

interface Platform {
  src: StaticImageData | string;
  link: string;
}

interface Trailer {
  url: string;
  title: string;
}

interface MovieInfo {
  id: number;
  poster: StaticImageData | string;
  title: string;
  content: string;
  cast: string;
  director: string;
  genre: string;
  platforms: Platform[];
  trailers: Trailer[];
}

const MovieItem: React.FC<{ movie: MovieInfo }> = ({ movie }) => {
  const [isTrailerVisible, setIsTrailerVisible] = useState(false);

  const toggleTrailerVisibility = () => {
    setIsTrailerVisible(!isTrailerVisible);
  };

  const hasTrailers = movie.trailers && movie.trailers.length > 0;

  return (
    <div className="movie-item border-b p-4">
      <section className=" p-4 text-center flex justify-between gap-10">
        <Image src={movie.poster} alt={movie.title} width={200} />
        <div className="w-full text-left">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold ">{movie.title}</h2>
            <div className="flex gap-2 items-center">
              {movie.platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={platform.src}
                    alt="Platform icon"
                    height={30}
                    className="rounded"
                  />
                </a>
              ))}
            </div>
          </div>
          <p className="text-white">{movie.content}</p>
          <p className="text-gray-500 mt-2">출연: {movie.cast}</p>
          <p className="text-gray-500">감독: {movie.director}</p>
          <p className="text-gray-500">장르 : {movie.genre}</p>
        </div>

        {hasTrailers && (
          <div
            className="flex justify-center cursor-pointer"
            onClick={toggleTrailerVisibility}
          >
            {isTrailerVisible ? (
              <ChevronUpIcon className="w-6 h-6" />
            ) : (
              <ChevronDownIcon className="w-6 h-6" />
            )}
          </div>
        )}
      </section>

      {isTrailerVisible && hasTrailers && (
        <TrailerList trailers={movie.trailers} />
      )}
    </div>
  );
};

export default MovieItem;
