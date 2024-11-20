import { images } from "../../assets/images";

const moviesData = [
  {
    id: 1,

    title: "매그놀리아",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/-2iaHK-MO9M",
        title: "공식 예고편",
      },
    ],
  },
  {
    id: 2,
    title: "펀치 드렁크 러브",

    category: ["공개예정"],
    platforms: [
      { src: images.왓챠, link: "https://watcha.com/contents/mM5rDjO" },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/IRbca0W1pJ4",
        title: "Punch-Drunk Love 2002 Trailer HD",
      },
    ],
  },
  {
    id: 3,
    title: "팬텀 스레드",

    category: ["공개예정"],
    platforms: [
      { src: images.왓챠, link: "https://watcha.com/contents/m5rQw27" },
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/80195447",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_CG01_NU0000011307",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/7p0_ajWHTMY",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/unqPe2jDPbI",
        title: "30초 예고편",
      },
    ],
  },
  {
    id: 4,
    title: "외계+인 2부",

    category: ["공개예정"],
    platforms: [
      { src: images.왓챠, link: "https://watcha.com/contents/mOkLMmM" },
      { src: images.티빙, link: "https://www.tving.com/contents/M000376700" },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/4uSn4Dem9i0",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/lH0gBidynI8",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/o-PGJMOFe74",
        title: "캐릭터 로드맵 영상",
      },
    ],
  },
  {
    id: 5,
    title: "해피 아워",

    category: ["공개예정"],
    platforms: [
      { src: images.왓챠, link: "https://watcha.com/contents/mdRL9yy" },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/lboTas5Yd2k",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 6,
    title: "너의 새는 노래할 수 있어",

    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/aCFCCCLLF_k",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/SJ_e4moS7XU",
        title: "30초 예고편",
      },
    ],
  },
  {
    id: 7,
    title: "천국의 그림자",
    poster: images.천국의그림자,
    content:
      "혼자 살면서 매일 고독한 시간을 보내는 니칸더는 환경미화원이다. 작은 사고로 손목을 다친 어느 날, 니칸더는 슈퍼마켓에 물건을 사러 갔다가 점원으로 일하는 일로나에게 마음을 빼앗긴다. 일로나가 그의 손목을 치료해준 것이다. 하지만 둘의 데이트는 니칸더의 생각만큼 쉽게 풀리지 않고 그의 마음은 급해진다. ‘프롤레타리아트 삼부작’의 첫 작품.",
    cast: "마티 펠론파, 카티 오우티넨",
    director: "아키카우리스마키",
    genre: "코미디, 드라마, 멜로/로맨스",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 8,
    title: "사랑은 낙엽을 타고",
    category: ["공개예정"],
    platforms: [
      { src: images.왓챠, link: "https://watcha.com/contents/mO077pR" },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/kC_XyifQInE",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/PuS6S7GYCVw",
        title: "30초 예고편",
      },
      {
        url: "https://www.youtube.com/embed/gdcIFu4pkWw",
        title: "티저 예고편",
      },
    ],
  },
  {
    id: 9,
    title: "블루 발렌타인",
    poster: images.블루발렌타인,
    content:
      "영원한 사랑을 꿈꾸는 의대생 신디. 어느 날 그녀의 앞에 솔직하고 다정한 남자 딘이 나타난다. 자신의 모든 걸 받아주고 안아주는 그에게 사랑을 느낀 신디는 딘과 결혼을 선택하지만 시간이 흐르면서 점점 현실적인 문제들로 지쳐간다.운명적 사랑을 믿는 이삿짐센터 직원 딘. 병원에서 우연히 만난 신디에게 반해버린 그는 그녀에게 안식처 같은 남자가 돼주겠다고 약속한다. 하지만 점점 지쳐가는 그녀의 모습에 그는 사랑을 되찾을 방법을 고민하기 시작하는데…",
    cast: "라이언 고슬링, 미셸 윌리엄스, 마셜 존슨, 마이크 보겔, 젠 존스",
    director: "데릭 시엔 프랜스",
    genre: "드라마, 로맨스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/70122316",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_CV01_KE0000011730",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/aILx69WrRhQ",
        title: "공식 예고편",
      },
    ],
  },
  {
    id: 10,
    title: "더 킹: 헨리 5세",
    category: ["공개예정"],
    platforms: [
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/80182016",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/iX_9QIw49tM",
        title: "티저 예고편",
      },
    ],
  },
  {
    id: 11,
    title: "머니볼",
    poster: images.머니볼,
    content:
      "돈 없고 실력 없는 오합지졸 구단이라 불리는 메이저리그 오클랜드 에슬레틱스. 이에 단장 빌리는 경제학 전공자 피터를 영입해 새로운 공식 머니 볼 이론을 전수받고 새로운 도전을 시작한다.",
    cast: "브래드 피트, 조나 힐, 필립 세이모어 호프만, 크리스 프랫, 스티븐 비숍, 브렌트 예닝스, 켄 메드록, 잭 맥기, 비토 루기니스, 헤라르도 셀라스코, 닉 서시",
    director: "베넷 밀러",
    genre: "전기, 드라마, 스포츠",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mO09Exd",
      },
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/70201437",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/Gc2Z8Nt7DZE",
        title: "예고편",
      },
      {
        url: "https://www.youtube.com/embed/-4QPVo0UIzc",
        title: "Movie Trailer",
      },
    ],
  },
  {
    id: 12,
    title: "폭스 캐처",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/XBQIKB7Xko4",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 13,
    title: "지옥",
    poster: images.지옥,
    content: "",
    cast: "엠마누엘 베아르, 프랑수아 클뤼제, 안드레 윔즈",
    director: "클로드 샤브롤",
    genre: "범죄, 드라마",
    category: ["공개예정"],
    platforms: [
      {
        src: images.유튜브,
        link: "https://www.youtube.com/watch?v=4YJql0pbqnM",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 14,
    title: "콜 미 바이 유어 네임",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/yQ5U8suTUw0",
        title: "Trailer",
      },
    ],
  },
  {
    id: 15,
    title: "다크나이트",
    poster: images.다크나이트,
    content:
      "범죄와 부정부패를 제거하여 고담시를 지키려는 배트맨(크리스찬 베일). 그는 짐 고든 형사(게리 올드만)와 패기 넘치는 고담시 지방 검사 하비 덴트(아론 에크하트)와 함께 도시를 범죄 조직으로부터 영원히 구원하고자 한다. 세 명의 의기투합으로 위기에 처한 악당들이 모인 자리에 보라색 양복을 입고 얼굴에 짙게 화장을 한 괴이한 존재가 나타나 배트맨을 죽이자는 사상 초유의 제안을 한다. 그는 바로 어떠한 룰도, 목적도 없는 사상 최악의 악당 미치광이 살인광대 조커(히스 레저). 배트맨을 죽이고 고담시를 끝장내버리기 위한 조커의 광기 어린 행각에 도시는 혼란에 빠지는데...",
    cast: "	크리스찬 베일, 히스 레저, 아론 에크하트, 마이클 케인, 게리 올드만, 매기 질렌할, 모건 프리먼, 모니크 커넨",
    director: "크리스토퍼 놀란",
    genre: "드라마, 액션, 범죄",
    category: ["공개예정"],
    platforms: [
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/70079583",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011175",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/yQ5U8suTUw0",
        title: "Trailer",
      },
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 16,
    title: "성실한 나라의 앨리스",

    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mWyJJj1",
      },
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/70079583",
      },
      {
        src: images.티빙,
        link: "https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011175",
      },
      {
        src: images.유튜브,
        link: "https://www.youtube.com/watch?v=tK1spw1jZ94",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/XXZLpePWPCg",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 17,
    poster: images.복수는나의것,
    title: "복수는 나의 것",
    content:
      "과거 두 명의 남자를 잔인하게 살해하고 돈을 훔친 적이 있는 ‘에노키즈’는 오랜 도주 끝에 경찰에 붙잡힌다. 구치소에 갇힌 그는 반성의 기색 없이 담담하게 자신의 과거를 이야기하기 시작한다. 자신을 쫓고 있는 경찰의 수사망을 따돌리기 위해 유서를 남기고 투신자살로 위장한 그는 이후 대학교수, 변호사 등으로 자신의 신분을 속이고 살인과 절도 등의 잔혹한 범죄를 대범하게 저지르며 도피생활을 이어가지만 사상 최대 인원의 경찰이 투입되었음에도 그를 체포하는데 실패한다. 그러던 중 에노키즈는 ‘하마마츠’의 하숙집에 머무르게 되고 어느새 그는 하숙집 여자주인의 정부가 되어있는데...",
    cast: "오가타 켄, 미쿠니 렌타로, 미야코 초초, 바이쇼 미츠코, 오가와 마유미, 키요카와 니지코",
    director: "이마무라 쇼헤이",
    genre: "드라마",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/kIKd7ch-5T8",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 18,
    title: "굿타임",
    poster: images.굿타임,
    content:
      "지적장애 동생 ‘닉’과 그의 형 ‘코니'. 코니는 그들에게 비참함을 안겨주는 뉴욕을 떠나 새로운 삶을 찾으려 은행 털이를 결심한다. 하지만 현금 2만 달러를 들고 도주하던 형제는 그들의 계획이 엉망이 되었음을 깨닫고, 동생은 홀로 구치소에 수감된다. 코니는 경찰의 수사망을 따돌리고 동생을 구하기 위해, 또 형제를 옥죄는 뉴욕으로부터 탈출하기 위해 촌각을 다투는 사투를 벌이는데…",
    cast: "로버트 패티슨, 베니 사프디, 제니퍼 제이슨 리",
    director: "사프디 형제",
    genre: "드라마, 범죄",
    category: ["공개예정"],
    platforms: [
      {
        src: images.유튜브,
        link: "https://www.youtube.com/watch?v=i7nepAJ3Fd4",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/s9WB5QwnVyE",
        title: "예고편",
      },
      {
        url: "https://www.youtube.com/embed/bQgDJIbfQWM",
        title: "1차 공식 예고편(한국어 CC)",
      },
      {
        url: "https://www.youtube.com/embed/Kdr4hDjQlXg",
        title: "2차 공식 예고편(한국어 CC)",
      },
    ],
  },
  {
    id: 19,
    title: "언컷 젬스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/80990663",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/d_da9RlK-pY",
        title: "예고편",
      },
    ],
  },
  {
    id: 20,
    title: "테넷",
    category: ["공개예정"],
    platforms: [
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/81198930",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/V5KeJhi_bFI",
        title: "공식 예고편",
      },
      {
        url: "https://www.youtube.com/embed/bsoNKZjpZ2A",
        title: "새로운 예고편",
      },
      {
        url: "https://www.youtube.com/embed/wTKUnj86GZA",
        title: "Agent 예고편",
      },
    ],
  },
  {
    id: 21,
    title: "소년시절의 너(소년적니)",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5x1Mex",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/ZgXhUsRzi7g",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/bC4hneqiLHU",
        title: "30초 예고편",
      },
      {
        url: "https://www.youtube.com/embed/uuQuZ1MkHaM",
        title: "스폐셜 예고편",
      },
    ],
  },
  {
    id: 22,
    title: "남매의 여름밤",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mWw3Bq3",
      },
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/81648578",
      },
      {
        src: images.티빙,
        link: "https://www.tving.com/contents/M000343733",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/lnW7XPeVwW4",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/-X4FrJagFAM",
        title: "가족영화 예고편",
      },
    ],
  },
  {
    id: 23,
    title: "악은 존재하지 않는다",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5nX2X9",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/sdnx1I_R0Ig",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 24,
    title: "네 멋대로 해라",
    poster: images.네멋대로해라,
    content:
      "영화 속의 갱으로 등장하는 험프리 보가트를 선망하는 좀도둑 미셸 푸가드는 차를 훔쳐 달리다가 자신도 의식할 새 없이 총으로 경관을 죽이고 쫓기는 몸이 되어 버린다. 그러던 중 어느 모델의 지갑을 훔치다가 니스에서 만난 적이 있는 미국에서 유학 온 패트리샤와 재회하게 되고, 그녀에게 함께 도망 갈 것을 제의한다. 그녀의 작은 아파트에서 며칠 밤을 함께 지내면서 그들은 책에 대해, 죽음에 대해 이야기를 나누며 즐거운 시간을 보낸다. 그리고 절도, 강도 행각을 벌이면서 그녀에게 정중하고, 삶과 죽음에 대해 두려워하지 않는 그에게 패트리샤도 매력을 느낀다. 하지만 패트리샤는 자신이 미셸을 사랑하는지 확신할 수가 없다. 그의 아이를 임신했지만 결국 그를 사랑하지 않다고 생각하게 된 패트리샤는 수배범인 그를 경찰에 신고한다. 하지만 미쏄은 두렵지 않다고 말하면서 그대로 머문다. 하지만 결국 미셸은 거리에서 경찰의 총에 쓰러진다. 그를 둘러싼 사람들 가운데에서 파트리시아를 알아 본 그는 죽어가면서 무표정하게 그녀에게 욕을 하지만 그녀는 알아듣지 못하고서는 험프리 보가트가 그랬듯이 죽은 그의 아랫 입술에 손가락을 문지른다.",
    cast: "장 폴 벨몽도, 진 세버그, 다니엘 보랭거, 장 피에르 멜빌, 반 두드",
    director: "장 뤽 고다르",
    genre: "범죄, 드라마",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/-dndE8EGXIg",
        title:
          "Masterpiece Collection-Breathless, À bout de souffle ,명작 명장면-네 멋대로 해라",
      },
      {
        url: "https://www.youtube.com/embed/ABn7uHGPL8k",
        title: "반영화입문 | 장뤽 고다르 감독, 네 멋대로 해라 | 점프컷",
      },
    ],
  },
  {
    id: 25,
    title: "몽상가들",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mAOla9d",
      },
      {
        src: images.유튜브,
        link: "https://www.youtube.com/watch?v=Bb3JmmvIOcs",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/YU1brBVMBkM",
        title: "The Dreamers Trailer",
      },
      {
        url: "https://www.youtube.com/embed/D9dfoegfQQI",
        title: "30초 예고편",
      },
    ],
  },
  {
    id: 26,
    title: "어느 멋진 아침",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mWq1yLr",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_C901_SG0000157787",
      },
      {
        src: images.티빙,
        link: "https://www.tving.com/contents/M000375839",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/vpYqrtkTlig",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/SFkW3DZg990",
        title: "30초 예고편",
      },
    ],
  },
  {
    id: 27,
    title: "로렌스 애니웨이",
    poster: images.로렌스애니웨이,
    content:
      "몬트리올에서 소설을 쓰는 청년 로렌스와 그의 정열적인 피앙세 프레드는 미래를 약속한 사이. 서른 번째 생일을 맞이한 어느 날, 로렌스는 사랑하는 프레드에게 그 동안 숨겨왔던 비밀을 고백한다. 남은 일생을 여자로 살고 싶다고... 절망의 끝에서도 차마 ‘이 사랑’을 놓지 못하는 두 사람. 이들은 다시, 사랑할 수 있을까?",
    cast: "멜빌 푸포, 수잔 클레망, 나탈리 베이, 모니아 쇼크리, 수잔 알그렌",
    director: "자비에 돌란",
    genre: "드라마, 로맨스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mWL603d",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/BLY6BQNHODc",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/Lrz6IzRqeXk",
        title: "티저 예고편",
      },
    ],
  },
  {
    id: 28,
    title: "탐엣더팜",
    poster: images.탐엣더팜,
    content:
      "연인 기욤을 잃은 탐은 장례식에 참석하기 위해 그의 고향인 퀘벡의 작은 농장을 찾아간다. 그러나, 탐은 기욤의 어머니 아가테와 형 프랑시스에게 자신이 기욤의 연인이었다는 사실을 밝히지 못한다.",
    cast: "자비에 돌란, 피에르-이브 카디날, 리즈 로이, 에블린 브로슈, 마누엘 타드로스, 자크 라발리, 안느 카론, 올리비에 모린, 케일럽 랜드리 존스",
    director: "자비에 돌란",
    genre: "드라마, 미스터리, 스릴러",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mWyJxKx",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/1yUDJDmFuuQ",
        title: "티저 예고편",
      },
    ],
  },
  {
    id: 29,
    title: "엘리펀트 송",
    category: ["공개예정"],
    platforms: [],
    trailers: [
      {
        url: "https://www.youtube.com/embed/CXKwyEVPIdg",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/YMHsl1pM7bA",
        title: "배우, 자비에 돌란 BEST MOMENT",
      },
      {
        url: "https://www.youtube.com/embed/SMYa_BQRT8A",
        title: "엘리펀트 송 자비에 돌란X브루스 그린우드 케미 영상",
      },
    ],
  },
  {
    id: 30,
    title: "아이 킬드 마이 마더",
    poster: images.아이킬드마이마더,
    content:
      "16살 사춘기 소년 후베르트는 엄마에 대한 불만으로 가득하다. 자신을 이해해주기는커녕 제멋대로 행동하는 엄마에게 진절머리가 난 후베르트는그의 연인 안토닌과 함께 자유로운 독립을 꿈꾼다. 하지만 엄마의 눈에 후베르트는 그저 철없는 사춘기 소년으로만 보일 뿐이다. 어느날 엄마는 상상치도 못했던 아들의 비밀을 전해 듣게 되고, 방황하던 후베르트는 결국 기숙학교에 강제 입학하게 되는데...",
    cast: "자비에 돌란, 안느 도발, 수잔 클레망, 프랑수아 아노드, 닐스 슈나이더",
    director: "자비에 돌란",
    genre: "드라마, 로맨스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5X0NN5",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/RzbZIzmkw0M",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/JoiBzcY9yC4",
        title: "티저 예고편",
      },
    ],
  },
  {
    id: 31,
    title: "마티아스와 막심",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mO07Z1e",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/_vUt_mxFndQ",
        title: "메인 예고편",
      },
    ],
  },
  {
    id: 32,
    title: "마미",
    poster: images.마미,
    content:
      "디안은 아들 스티브가 보호시설에서 쫓겨나자 홈스쿨링을 시작한다. 홀로 생계를 책임지며 아들을 돌보는 것에 지쳐가던 어느 날 디안은 이웃집 카일라를 만나고, 세 사람은 점차 서로를 의지하기 시작한다.",
    cast: "안토니-올리버 피론, 안느 도발, 수잔 클레망, 이자벨 넬리스, 패트릭 휴어드, 알렉산더 고이트, 피에르-이브 카디날, 나탈리 하멜-로이, 빈센트 파파드",
    director: "자비에 돌란",
    genre: "드라마",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5nQ3Q9",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/4_4P2L9wP6o",
        title: "뮤직 티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/1HqUvsaQQXw",
        title: "주크박스 영상",
      },
      {
        url: "https://www.youtube.com/embed/77R_y3PyMrk",
        title: "감독판 예고편",
      },
      {
        url: "https://www.youtube.com/embed/hlQLwVCoIkA",
        title: "극찬 리뷰 예고편",
      },
      {
        url: "https://www.youtube.com/embed/R0JyMCSp6s4",
        title: "한국 관객들을 위한 자비에 돌란 감독 영상 메시지",
      },
    ],
  },
  {
    id: 33,
    title: "마스터",
    poster: images.마스터,
    content:
      "제 2차 세계대전이 끝난 후, 젊은이들은 각자 자신의 길을 찾아 떠나지만 프레디 퀠(호아킨 피닉스)은 여전히 방황하며 백화점의 사진기사로 살아가고 있다. 자신이 제조한 술에 의존하며 살아가고 있는 프레디는 술에 취해 유람선의 한 파티장에서 난동을 부리게 되고 다음날 그 자리에 있었던 랭케스터(필립 세이모어 호프만)를 만나게 된다. 몇 마디 나누지 않았음에도 서로에게 이끌리게 된 두 남자. 프레디는 인간의 심리를 연구하는 ‘코즈’ 연합회를 이끌고 있는 마스터, 랭케스터의 실험대상이자, 조력자이자, 친구로서 그의 가족들과 함께 머물게 된다. 하지만 프레디는 진정한 마스터라 믿었던 랭케스터 역시 자신과 다르지 않은 불완전한 인간임을 깨닫고, 랭케스터 역시 가족들로부터 프레디를 멀리하라는 경고를 받게 된다. 두 남자 사이에 균열은 점점 커져가고 아슬아슬한 관계는 점점 파국에 치닫는데...",
    cast: "호아킨 피닉스, 필립 세이모어 호프만, 에이미 아담스, 로라 던, 엠버 칠더스, 라미 말렉, 제시 플레몬스, 케빈 J. 오코너, 크리스토퍼 에반 웰치, 메디슨 비티, 레나 엔드리",
    director: "폴 토마스 앤더슨",
    genre: "드라마",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5rboD5",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_CL01_JY0000011121",
      },
      {
        src: images.티빙,
        link: "https://www.tving.com/contents/M000299737",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/mmnkUJcCmFw",
        title: "예고편",
      },
    ],
  },
  {
    id: 34,
    title: "리코리쉬 피자",
    category: ["공개예정"],
    platforms: [
      {
        // src: images.,
        link: "",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 35,
    title: "데어 윌 비 블러드",
    category: ["공개예정"],
    platforms: [
      {
        // src: images.,
        link: "",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 36,
    title: "나의 왼발",
    category: ["공개예정"],
    platforms: [
      {
        // src: images.,
        link: "",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 37,
    title: "전망 좋은 방",
    poster: images.전망좋은방,
    content: "",
    cast: "",
    director: "제임스 아이보리",
    genre: "",
    category: ["공개예정"],
    platforms: [
      {
        // src: images.,
        link: "",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 38,
    title: "나의 아름다운 세탁소",
    poster: images.나의아름다운세탁소,
    content: "",
    cast: "",
    director: "스티븐 프리어스",
    genre: "",
    category: ["공개예정"],
    platforms: [
      {
        // src: images.,
        link: "",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/",
        title: "예고편",
      },
    ],
  },
  {
    id: 39,
    title: "플라워 킬링 문",
    category: ["공개예정"],
    platforms: [
      {
        // src: images.,
        link: "",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/FrBmnuUUPtk",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/WbCM9EY55ek",
        title: "스폐셜 예고편",
      },
    ],
  },
  {
    id: 40,
    title: "메이 디셈버",
    poster: images.메이디셈버,
    content:
      "23살의 나이 차를 극복하고 세간의 주목을 받으며 결혼한 그레이시와 조. 20년 후, 그레이시를 연기하게 된 배우 엘리자베스가 캐릭터 연구를 위해 부부의 집에 머물면서 세 사람 사이에 균열이 생기기 시작한다.",
    cast: "나탈리 포트만, 줄리안 무어, 찰스 멜튼, 가브리엘 정, 파이퍼 쿠르다, 앤드리아 프랭클, 코리 마이클 스미스, D.W. 모펫, 켈빈 한 이, 드류 샤이드, 엘리자베스 유",
    director: "토드 헤인즈",
    genre: "드라마, 로맨스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/mdj22Ar",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/STvwGykwHxY",
        title: "티저 예고편",
      },
      {
        url: "https://www.youtube.com/embed/yptCBpmYRnE",
        title: "1차 예고편",
      },
      {
        url: "https://www.youtube.com/embed/kUPWnX9ngRQ",
        title: "2차 예고편",
      },
    ],
  },
  {
    id: 41,
    title: "세비지 그레이스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.티빙,
        link: "https://www.tving.com/contents/M000377506",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/7ZXPzLfapOw",
        title: "Savage Grace Official Trailer",
      },
    ],
  },
  {
    id: 42,
    title: "사랑에 대한 모든 것",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5eJZ3R",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_CG01_NU0000011131",
      },
      {
        src: images.유튜브,
        link: "https://www.youtube.com/watch?v=TfW_YCJAbro",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/62wj8WqSjdU",
        title: "1차 예고편",
      },
    ],
  },
  {
    id: 43,
    title: "대니쉬 걸",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5mAEx5",
      },
      {
        src: images.유튜브,
        link: "https://www.youtube.com/watch?v=j_TUucL85P8",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/F-8EnPgvLgU",
        title: "메인 예고편",
      },
      {
        url: "https://www.youtube.com/embed/M34cK2BohGM",
        title: "1차 예고편",
      },
      {
        url: "https://www.youtube.com/embed/PxegFepA6DU",
        title: "대니쉬 걸 THE DANISH GIRL 2차 공식 예고편 (한국어 CC)",
      },
      {
        url: "https://www.youtube.com/embed/ejD-W0F0hr8",
        title:
          "The Danish Girl - A Model Called Lili Scene (1/10) | Movieclips",
      },
    ],
  },
  {
    id: 44,
    title: "만추",
    poster: images.만추,
    content:
      "수인번호 2537번 애나. 7년 째 수감 중, 어머니의 부고로 3일 간의 휴가가 허락된다. 장례식에 가기 위해 탄 시애틀행 버스, 쫓기듯 차에 탄 훈이 차비를 빌린다. 사랑이 필요한 여자들에게 에스코트 서비스를 하는 그는, 누군가로부터 도망치는 중이다. 훈은 돈을 갚고 찾아가겠다며 억지로 시계를 채워주지만 애나는 무뚝뚝하게 돌아선다. 7년 만에 만난 가족도 시애틀의 거리도, 자기만 빼 놓고 모든 것이 변해 버린 것 같아 낯설기만 한 애나. 돌아가 버릴까? 발길을 돌린 터미널에서 훈을 다시 만난다. 그리고 장난처럼 시작된 둘의 하루. 시애틀을 잘 아는 척 안내하는 훈과 함께, 애나는 처음으로 편안함을 느낀다. 이름도 몰랐던 애나와 훈. 호기심이던 훈의 눈빛이 진지해지고 표정 없던 애나의 얼굴에 희미한 미소가 떠오를 때 쯤, 누군가 훈을 찾아 오고 애나가 돌아가야 할 시간도 다가오는데...",
    cast: "탕웨이, 현빈, 김준성, 김서라, 제임스 C. 번스, 존 우, 박미현, 대니 랭, 카타리나 최, 스티브 앤더슨, 니키타 브렌즈니코브",
    director: "김태용",
    genre: "드라마, 로맨스",
    category: ["공개예정"],
    platforms: [
      {
        src: images.왓챠,
        link: "https://watcha.com/contents/m5xMxbW",
      },
      {
        src: images.넷플릭스,
        link: "https://www.netflix.com/kr/title/70154512",
      },
      {
        src: images.웨이브,
        link: "https://www.wavve.com/player/movie?movieid=MV_C901_SG0000029615",
      },
      {
        src: images.티빙,
        link: "https://www.tving.com/contents/M000376246",
      },
    ],
    trailers: [
      {
        url: "https://www.youtube.com/embed/LKfNb2EJ4cY",
        title: "[2011] 현대카드 레드카펫 19 만추 - 예고편",
      },
      {
        url: "https://www.youtube.com/embed/VkyR7fmRUpA",
        title: "[2011] 현대카드 레드카펫 19 만추 - 예고편 (현빈 캐릭터)",
      },
    ],
  },
];
export default moviesData;
