"use client";

import React from "react";
import VideoItem from "../common/VideoItem";
import images from "@/app/assets/images";

const videoData = [
  {
    id: 1,
    src: images.mv1,
    alt: "mv1",
    title: "씨스타 SISTAR 스니커즈 TV Commercial",
    youtuber_src: images.스니커즈,
    youtuber: "snickersenergy",
    content: "2013년",
    videoUrls: ["https://www.youtube.com/embed/3J4xvXMQgC8"],
  },
  {
    id: 2,
    src: images.mv2,
    alt: "mv2",
    title: "새우대디 : 세상 모든 펫팸을 위해...",
    youtuber_src: images.LG,
    youtuber: "LG Uplus",
    content: "2016년",
    videoUrls: ["https://www.youtube.com/embed/_x0Ah894n98"],
  },
  {
    id: 3,
    src: images.mv3,
    alt: "mv3",
    title: "[데상트]𝗟𝗜𝗩𝗘 𝗢𝗡 𝗧𝗛𝗘 𝗘𝗗𝗚𝗘, 𝗘𝗗𝗚𝗘 𝗖𝗢𝗨𝗥𝗧_배우 홍경",
    youtuber_src: images.데상트,
    youtuber: "데상트 DESCENTE",
    content: "2024년 1월 26일",
    videoUrls: ["https://www.youtube.com/embed/PBOM_SAtPcs"],
  },
  {
    id: 4,
    src: images.mv3,
    alt: "mv3",
    title:
      "[Sony Audio] 책상에 앉았더니 초능력이 생겼다 Full ver. - 스터디헤드폰 WH-1000XM5",
    youtuber_src: images.소니,
    youtuber: "Sony Korea",
    content: "2024년 4월 29일",
    videoUrls: ["https://www.youtube.com/embed/2DWSSu3wdBw"],
  },
  {
    id: 5,
    src: images.mv3,
    alt: "mv3",
    title: "[데상트]𝗟𝗜𝗩𝗘 𝗢𝗡 𝗧𝗛𝗘 𝗘𝗗𝗚𝗘, 𝗘𝗗𝗚𝗘 𝗖𝗢𝗨𝗥𝗧_배우 홍경",
    youtuber_src: images.데상트,
    youtuber: "데상트 DESCENTE",
    content: "2024년 6월 20일",
    videoUrls: ["https://www.youtube.com/embed/PBOM_SAtPcs"],
  },
  {
    id: 6,
    src: images.mv3,
    alt: "mv3",
    title: "[맥심 T.O.P] Maxim T.O.P '가장 가까운 휴식' 직장인 편",
    youtuber_src: images.맥심,
    youtuber: "커피라는 행복 맥심",
    content: "2024년 8월 9일",
    videoUrls: ["https://www.youtube.com/embed/pM0N6EdwAqg"],
  },

  {
    id: 7,
    src: images.mv3,
    alt: "mv3",
    title: "[어나더오피스] GQ 10월호 홍경 화보 메이킹 필름",
    youtuber_src: images.어나더오피스,
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
