"use client";

import React from "react";
import VideoItem from "../common/VideoItem";
import mv1 from "../../../../public/옥탑방에서.png";
import mv2 from "../../../../public/태연뮤비.png";
import mv3 from "../../../../public/내일의우리.png";
import 스니커즈 from "../../../../public/스니커즈.jpg";
import LG from "../../../../public/LG.jpg";
import 데상트 from "../../../../public/데상트.jpg";
import 소니 from "../../../../public/SONY.jpg";
import 맥심 from "../../../../public/맥심.jpg";
import 어나더오피스 from "../../../../public/어나더오피스.jpg";

const videoData = [
  {
    id: 1,
    src: mv1,
    alt: "mv1",
    title: "씨스타 SISTAR 스니커즈 TV Commercial",
    youtuber_src: 스니커즈,
    youtuber: "snickersenergy",
    content: "2013년",
    videoUrls: ["https://www.youtube.com/embed/3J4xvXMQgC8"],
  },
  {
    id: 2,
    src: mv2,
    alt: "mv2",
    title: "새우대디 : 세상 모든 펫팸을 위해...",
    youtuber_src: LG,
    youtuber: "LG Uplus",
    content: "2016년",
    videoUrls: ["https://www.youtube.com/embed/_x0Ah894n98"],
  },
  {
    id: 3,
    src: mv3,
    alt: "mv3",
    title: "[데상트]𝗟𝗜𝗩𝗘 𝗢𝗡 𝗧𝗛𝗘 𝗘𝗗𝗚𝗘, 𝗘𝗗𝗚𝗘 𝗖𝗢𝗨𝗥𝗧_배우 홍경",
    youtuber_src: 데상트,
    youtuber: "데상트 DESCENTE",
    content: "2024년 1월 26일",
    videoUrls: ["https://www.youtube.com/embed/PBOM_SAtPcs"],
  },
  {
    id: 4,
    src: mv3,
    alt: "mv3",
    title:
      "[Sony Audio] 책상에 앉았더니 초능력이 생겼다 Full ver. - 스터디헤드폰 WH-1000XM5",
    youtuber_src: 소니,
    youtuber: "Sony Korea",
    content: "2024년 4월 29일",
    videoUrls: ["https://www.youtube.com/embed/2DWSSu3wdBw"],
  },
  {
    id: 3,
    src: mv3,
    alt: "mv3",
    title: "[데상트]𝗟𝗜𝗩𝗘 𝗢𝗡 𝗧𝗛𝗘 𝗘𝗗𝗚𝗘, 𝗘𝗗𝗚𝗘 𝗖𝗢𝗨𝗥𝗧_배우 홍경",
    youtuber_src: 데상트,
    youtuber: "데상트 DESCENTE",
    content: "2024년 6월 20일",
    videoUrls: ["https://www.youtube.com/embed/PBOM_SAtPcs"],
  },
  {
    id: 5,
    src: mv3,
    alt: "mv3",
    title: "[맥심 T.O.P] Maxim T.O.P '가장 가까운 휴식' 직장인 편",
    youtuber_src: 맥심,
    youtuber: "커피라는 행복 맥심",
    content: "2024년 8월 9일",
    videoUrls: ["https://www.youtube.com/embed/pM0N6EdwAqg"],
  },

  {
    id: 6,
    src: mv3,
    alt: "mv3",
    title: "[어나더오피스] GQ 10월호 홍경 화보 메이킹 필름",
    youtuber_src: 어나더오피스,
    youtuber: "Another Office Official",
    content: "2024년",
    videoUrls: ["https://www.youtube.com/embed/PnD77dXt3a8"],
  },
];

const Ad: React.FC = () => {
  return (
    <div className="w-full">
      {videoData.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Ad;
