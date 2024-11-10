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

  return (
    <div className="movie-item border-b p-4">
      <section
        onClick={toggleTrailerVisibility}
        className="cursor-pointer p-4 text-center flex justify-between items-center gap-10"
      >
        <Image src={movie.poster} alt={movie.title} width={200} />
        <div className="w-full text-left">
          <h2 className="text-xl font-semibold">{movie.title}</h2>
          <p className="text-gray-500">{movie.content}</p>
          <p className="text-gray-500">{movie.cast}</p>
          <p className="text-gray-500">{movie.director}</p>
          <p className="text-gray-500">{movie.genre}</p>
          <div className="flex mt-2 space-x-3">
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
                  width={30}
                  className="rounded"
                />
              </a>
            ))}
          </div>
        </div>
        {isTrailerVisible ? (
          <ChevronUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDownIcon className="w-6 h-6" />
        )}
      </section>

      {isTrailerVisible && <TrailerList trailers={movie.trailers} />}
    </div>
  );
};

export default MovieItem;
