export async function fetchMovieFromKMDB(title: string) {
  const KMDB_API_KEY = process.env.NEXT_PUBLIC_KMDB_API_KEY;
  const KMDB_API_URL = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp`;

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
    console.log("KMDB API 전체 응답 데이터:", data);

    // KMDB 데이터 파싱
    if (
      data.Data &&
      data.Data[0] &&
      data.Data[0].Result &&
      data.Data[0].Result[0]
    ) {
      const movie = data.Data[0].Result[0];

      const plot =
        movie.plots?.plot?.find(
          (plot: { plotLang: string }) => plot.plotLang === "한국어"
        )?.plotText || "";

      const poster = movie.posters
        ? movie.posters.includes("|")
          ? movie.posters
              .split("|")
              .find(
                (url: string) => url.endsWith(".jpg") || url.endsWith(".png")
              ) || ""
          : movie.posters.endsWith(".jpg") ||
            movie.posters.endsWith(".png") ||
            movie.posters.endsWith(".JPG")
          ? movie.posters
          : ""
        : "";

      // 배우
      const cast = movie.actors?.actor
        ? movie.actors.actor
            .map((actor: { actorNm: string }) => actor.actorNm)
            .join(", ")
        : "";

      // 감독 이름 배열 병합
      const director = movie.directors?.director
        ? movie.directors.director
            .map((dir: { directorNm: string }) => dir.directorNm)
            .join(", ")
        : "";

      // 관람가 정보 추출
      const ageRating =
        movie.rating && movie.rating.length > 0
          ? movie.rating[0].ratingGrade || ""
          : "";

      const parsedMovie = {
        title: movie.title,
        content: plot || "",
        cast: cast || "",
        director: director || "",
        genre: movie.genre || "",
        poster: poster || "",
        ageRating: ageRating,
      };

      console.log("KMDB에서 파싱된 영화 데이터:", parsedMovie); // 파싱된 데이터 출력
      return parsedMovie;
    }

    console.warn("KMDB에서 데이터를 찾지 못했습니다.");
    return null;
  } catch (error) {
    console.error("KMDB API 호출 실패:", error);
    return null;
  }
}
