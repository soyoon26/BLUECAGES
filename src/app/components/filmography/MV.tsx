"use client";

import React from "react";
import VideoItem from "../common/VideoItem";
import mv1 from "../../../../public/옥탑방에서.png";
import mv2 from "../../../../public/태연뮤비.png";
import mv3 from "../../../../public/내일의우리.png";
import 비스킷타운 from "../../../../public/비스킷타운.jpg";
import SM from "../../../../public/SMTOWN.jpg";
import 카더가든 from "../../../../public/카더가든.jpg";

const videoData = [
  {
    id: 1,
    src: mv1,
    alt: "mv1",
    title: "[Official MV] 좋아서하는밴드 - 옥탑방에서",
    youtuber_src: 비스킷타운,
    youtuber: "비스킷타운",
    content: "2017년 12월 5일",
    videoUrls: ["https://www.youtube.com/embed/9_9tBgbdMRk"],
  },
  {
    id: 2,
    src: mv2,
    alt: "mv2",
    title: "TAEYEON 태연 'Can't Control Myself' MV",
    youtuber_src: SM,
    youtuber: "SMTOWN",
    content: "2022년 1월 17일",
    videoUrls: ["https://www.youtube.com/embed/RccDIpx4ZMM"],
  },
  {
    id: 3,
    src: mv3,
    alt: "mv3",
    title: "카더가든(Car, the garden) '내일의 우리(Tomorrow)' Music Video",
    youtuber_src: 카더가든,
    youtuber: "카더가든 (Car, the garden)",
    content: "2023년 9월 12일",
    videoUrls: ["https://www.youtube.com/embed/IxaTjGPP2aM"],
  },
];

const MV: React.FC = () => {
  return (
    <div className="w-full">
      {videoData.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default MV;
