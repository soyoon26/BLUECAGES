interface ParsedMovie {
  title: string;
  content: string;
  cast: string;
  director: string;
  genre: string;
  poster: string;
  ageRating: string;
}

export async function fetchMovieFromKMDB(
  title: string
): Promise<ParsedMovie | null> {
  const KMDB_API_KEY = process.env.NEXT_PUBLIC_KMDB_API_KEY;
  const KMDB_API_URL = process.env.NEXT_PUBLIC_KMDB_API_URL;

  if (!KMDB_API_KEY) {
    console.error("KMDB API 키가 설정되지 않았습니다.");
    return null;
  }

  const finalUrl = `${KMDB_API_URL}?collection=kmdb_new2&title=${encodeURIComponent(
    title
  )}&detail=Y&ServiceKey=${KMDB_API_KEY}`;

  try {
    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "KMDB API 응답 오류:",
        response.status,
        response.statusText
      );
      return null;
    }

    const data = await response.json();

    if (
      !data.Data ||
      !data.Data[0] ||
      !data.Data[0].Result ||
      !data.Data[0].Result[0]
    ) {
      console.warn("KMDB 응답에서 예상한 데이터 구조를 찾을 수 없습니다.");
      return null;
    }

    const movie = data.Data[0].Result[0];
    const plot =
      movie.plots?.plot?.find(
        (plot: { plotLang: string }) => plot.plotLang === "한국어"
      )?.plotText || "";
    const poster = movie.posters
      ? movie.posters
          .split("|")
          .find((url: string) => /\.(jpg|png)$/i.test(url)) || ""
      : "";
    const cast = movie.actors?.actor
      ? movie.actors.actor
          .map((actor: { actorNm: string }) => actor.actorNm)
          .join(", ")
      : "";
    const director = movie.directors?.director
      ? movie.directors.director
          .map((dir: { directorNm: string }) => dir.directorNm)
          .join(", ")
      : "";
    const ageRating =
      movie.rating && movie.rating.length > 0
        ? movie.rating[0].ratingGrade || ""
        : "";

    return {
      title: movie.title,
      content: plot,
      cast,
      director,
      genre: movie.genre || "",
      poster,
      ageRating,
    };
  } catch (error) {
    console.error("KMDB API 호출 실패:", error);

    return null;
  }
}
