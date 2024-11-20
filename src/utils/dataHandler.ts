import moviesData from "@/app/components/favourites/MoviesData";
import { fetchMovieFromKMDB } from "../app/api/proxy/kmdb/route";

// KMDB API 데이터
interface APIMovieData {
  title?: string;
  content?: string;
  cast?: string;
  director?: string;
  genre?: string;
  poster?: string;
  rating?: { ratingGrade?: string }[];
}

// 기존 MovieInfo
interface MovieInfo {
  id: number;
  poster?: string;
  title: string;
  content?: string;
  cast?: string;
  director?: string;
  genre?: string;
  ageRating?: string;
  platforms: { src?: string; link?: string }[];
  trailers: { url: string; title: string }[];
}

// KMDB 병합
export async function mergeMovieData(movie: MovieInfo): Promise<MovieInfo> {
  const apiMovie: APIMovieData | null = await fetchMovieFromKMDB(movie.title);
  console.log("확인하자", apiMovie);

  const ageRating =
    apiMovie?.rating && apiMovie.rating.length > 0
      ? apiMovie.rating[0].ratingGrade || ""
      : "";

  return {
    ...movie,
    title: movie.title || apiMovie?.title || "",
    content: movie.content || apiMovie?.content || "정보 없음",
    cast: movie.cast || apiMovie?.cast || "출연진 정보 없음",
    director: movie.director || apiMovie?.director || "감독 정보 없음",
    genre: movie.genre || apiMovie?.genre || "장르 정보 없음",
    poster: movie.poster || (apiMovie?.poster ? apiMovie.poster : ""),
    ageRating: movie.ageRating || ageRating,
  };
}

export async function getUpdatedMoviesData(): Promise<MovieInfo[]> {
  const updatedMovies = await Promise.all(
    moviesData.map((movie) => mergeMovieData(movie))
  );
  console.log("병합된 영화 데이터 (기존 우선):", updatedMovies);
  return updatedMovies;
}
