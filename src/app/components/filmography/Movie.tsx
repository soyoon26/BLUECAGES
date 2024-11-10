import React, { useState } from "react";
import MovieItem from "../common/MovieItem";
import netflixIcon from "../../../../public/넷플릭스.png";
import watchaIcon from "../../../../public/왓챠.png";
import 웨이브 from "../../../../public/웨이브.png";
import 시리즈온 from "../../../../public/시리즈온.png";
import 유플러스 from "../../../../public/유플러스.png";
import posterImage1 from "../../../../public/댓글부대p.webp";
import 정말먼곳 from "../../../../public/정말먼곳p.webp";
import 청설 from "../../../../public/청설p.webp";
import 결백 from "../../../../public/결백p.webp";
import 보이스 from "../../../../public/보이스p.webp";

const moviesData = [
  {
    id: 1,
    poster: 결백,
    title: "결백",
    content:
      "유명 로펌의 에이스 변호사 ‘정인(신혜선)’은 아빠의 장례식장에서 농약 막걸리 살인사건이 일어났음을 알게 된다. 치매에 걸린 엄마 ‘화자(배종옥)’가 용의자로 지목되고, 그녀의 결백을 주장하기 위해 고향으로 내려가 직접 변호를 맡는다. 사건을 추적하던 중 시장 ‘추인회(허준호)’를 중심으로 한 마을 사람들의 조직적 은폐와 거짓 진술 등 수상한 정황을 포착한 ‘정인’. 그날의 기억을 모두 잃은 ‘화자’의 결백을 입증하기 위해 모든 사람들과 맞서기 시작하는데…! 파헤칠수록 커지는 의혹, 과연 진실은 무엇인가?",
    cast: "신혜선, 배종옥, 허준호, 홍경, 태항호",
    director: "박상현",
    genre: "드라마",
    category: "조연작",
    platforms: [
      { src: netflixIcon, link: "https://www.netflix.com" },
      { src: watchaIcon, link: "https://www.watcha.com" },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/nW6RgkrD2-s",
        title: "1차 예고편",
      },
      {
        url: "https://www.youtube.com/embed/EKmQHauIeJo",
        title: "2차 예고편",
      },
      {
        url: "https://www.youtube.com/embed/oxLLWIhbRfU",
        title: "30초 예고편",
      },
      {
        url: "https://www.youtube.com/embed/j6Lw1G72TVY",
        title: "파이널 예고편",
      },
      {
        url: "https://www.youtube.com/embed/FnHAaqpXXbU",
        title: "【翻供】正式預告",
      },
    ],
  },
  {
    id: 2,
    poster: 정말먼곳,
    title: "정말 먼 곳",
    content:
      "자신만의 안식처를 찾은 진우, 그에게 뜻하지 않은 방문자가 도착하며 조용했던 날들이 흔들리기 시작한다.",
    cast: "강길우, 홍경, 이상희, 기주봉, 기도영, 최금순, 김시하 ",
    director: "박근영",
    genre: "드라마",
    category: "주연작",
    platforms: [
      { src: 시리즈온, link: "https://www.netflix.com" },
      { src: 웨이브, link: "https://www.watcha.com" },
      { src: 유플러스, link: "https://www.watcha.com" },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/kixbsNV4egg",
        title: "30초 예고편",
      },
      {
        url: "https://www.youtube.com/embed/tEvGNbC0zT4",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 3,
    poster: 보이스,
    title: "보이스",
    content:
      "부산 건설현장 직원들을 상대로 걸려온 전화 한 통. 보이스피싱 전화로 인해 딸의 병원비부터 아파트 중도금까지, 당일 현장에서는 수많은 사람들이 목숨 같은 돈을 잃게 된다. 현장작업반장인 전직형사 서준(변요한)은 가족과 동료들의 돈 30억을 되찾기 위해 보이스피싱 조직을 추적하기 시작한다. 마침내 중국에 위치한 본거지 콜센터 잠입에 성공한 서준, 개인정보확보, 기획실 대본입고, 인출책 섭외, 환전소 작업, 대규모 콜센터까지! 체계적으로 조직화된 보이스피싱의 스케일에 놀라고, 그곳에서 피해자들의 희망과 공포를 파고드는 목소리의 주인공이자 기획실 총책 곽프로(김무열)를 드디어 마주한다. 그리고 그가 300억 규모의 새로운 총력전을 기획하는 것을 알게 되는데.. 상상이상으로 치밀하게 조직화된 보이스피싱의 실체! 끝까지 쫓아 반드시 되찾는다!",
    cast: "변요한, 김무열, 김희원, 박명훈, 이주영, 조재윤, 홍경",
    director: "김선, 김곡",
    genre: "범죄, 액션",
    category: "조연작",
    platforms: [
      { src: netflixIcon, link: "https://www.netflix.com" },
      { src: watchaIcon, link: "https://www.watcha.com" },
      { src: 시리즈온, link: "https://www.netflix.com" },
      { src: 웨이브, link: "https://www.watcha.com" },
      { src: 유플러스, link: "https://www.watcha.com" },
      // 애플티비 티빙
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/kixbsNV4egg",
        title: "30초 예고편",
      },
      {
        url: "https://www.youtube.com/embed/tEvGNbC0zT4",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 4,
    poster: posterImage1,
    title: "댓글부대",
    content:
      "실력 있지만 허세 가득한 사회부 기자 ‘임상진’ 대기업 ‘만전’의 비리를 취재하지만 오보로 판명되며 정직당한다.",
    cast: "손석구, 김성철, 김동휘, 홍경",
    director: "안국진",
    genre: "범죄, 드라마",
    category: "조연작",
    platforms: [
      { src: netflixIcon, link: "https://www.netflix.com" },
      { src: watchaIcon, link: "https://www.watcha.com" },
      { src: 시리즈온, link: "https://www.netflix.com" },
      { src: 웨이브, link: "https://www.watcha.com" },
      { src: 유플러스, link: "https://www.watcha.com" },
      //쿠팡플레이
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/-UNF4HK1dwg",
        title: "런칭 예고편",
      },
      {
        url: "https://www.youtube.com/embed/e0y8APQgNSA",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/6kjApj4YXgY",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/kwYLC53p7B4",
        title: "넷플릭스 예고편",
      },
    ],
  },
  {
    id: 5,
    poster: 청설,
    title: "청설",
    content:
      "대학생활은 끝났지만 하고 싶은 것도, 되고 싶은 것도 없어 고민하던 ‘용준’.엄마의 등쌀에 떠밀려 억지로 도시락 배달 알바를 간 ‘용준’은 완벽한 이상형 ‘여름’(노윤서)과 마주친다. 부끄러움은 뒷전, 첫눈에 반한 ‘여름’에게 ‘용준’은 서툴지만 솔직하게 다가가고 여름의 동생 ‘가을’(김민주)은 용준의 용기를 응원한다. 손으로 말하는 ‘여름’과 더 가까워지기 위해 더 잘 듣기보단 더 잘 보고 느끼려 노력하지만, 마침내 가까워졌다 생각하던 찰나 ‘여름’은 왜인지 자꾸 ‘용준’과 멀어지려 하는데…",
    cast: "홍경, 노윤서, 김민주",
    director: "조선호",
    genre: "드라마, 멜로/로맨스",
    category: "공개예정",
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/5yUHkmPMY2A",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/mGhUIExGY4Y",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 6,
    poster: 청설,
    title: "미쉘",
    content:
      "손으로 설렘을 말하고 가슴으로 사랑을 느끼는, 청량한 설렘의 순간 대학생활은 끝났지만...",
    cast: "홍경, 노윤서, 김민주",
    director: "박세영",
    genre: "드라마, 멜로/로맨스",
    category: "공개예정",
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/5yUHkmPMY2A",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/mGhUIExGY4Y",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 7,
    poster: 청설,
    title: "이 별에 필요한",
    content:
      "우주인 난영과 뮤지션 제이의 세상에서 가장 먼 거리의 롱디 로맨스를 그린 애니메이션 영화",
    cast: "홍경, 김태리",
    director: "한지원",
    genre: "애니메이션, 로맨스",
    category: "공개예정",
    platforms: [{ src: netflixIcon, link: "https://www.netflix.com" }],
    trailers: [
      {
        url: "https://www.youtube.com/embed/5yUHkmPMY2A",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/mGhUIExGY4Y",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 8,
    poster: 청설,
    title: "굿뉴스",
    content: "",

    cast: "홍경, 노윤서, 김민주",
    director: "조선호",
    genre: "드라마, 멜로/로맨스",
    category: "공개예정",
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/5yUHkmPMY2A",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/mGhUIExGY4Y",
        title: "메인 예고편",
      },
    ],
  },
];

const Movie: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredMovies =
    selectedCategory === "전체"
      ? moviesData
      : moviesData.filter((movie) => movie.category.includes(selectedCategory));

  return (
    <div className="w-full">
      <div className="flex justify-end mr-10 mt-10 space-x-4 mb-4">
        <button
          onClick={() => setSelectedCategory("전체")}
          className={`px-4 rounded-lg py-2 ${
            selectedCategory === "전체"
              ? "bg-blue-700 text-white"
              : "bg-gray-700"
          }`}
        >
          전체
        </button>
        <button
          onClick={() => setSelectedCategory("주연작")}
          className={`px-4 rounded-lg py-2 ${
            selectedCategory === "주연작"
              ? "bg-blue-700 text-white"
              : "bg-gray-700"
          }`}
        >
          주연작
        </button>
        <button
          onClick={() => setSelectedCategory("조연작")}
          className={`px-4 rounded-lg py-2 ${
            selectedCategory === "조연작"
              ? "bg-blue-800 text-white"
              : "bg-gray-800"
          }`}
        >
          조연작
        </button>
        <button
          onClick={() => setSelectedCategory("공개예정")}
          className={`px-4 rounded-lg py-2 ${
            selectedCategory === "공개예정"
              ? "bg-blue-800 text-white"
              : "bg-gray-800"
          }`}
        >
          공개예정
        </button>
      </div>

      {filteredMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movie;
