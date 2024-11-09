"use client";

import React from "react";
import VideoItem from "../common/VideoItem";
import mv1 from "../../../../public/옥탑방에서.png";
import mv2 from "../../../../public/태연뮤비.png";
import mv3 from "../../../../public/내일의우리.png";

const videoData = [
  {
    id: 1,
    src: mv1,
    alt: "mv1",
    title: "옥탑방에서 - 좋아서하는밴드",
    content: "2017년 12월 5일",
    videoUrl: "https://www.youtube.com/embed/9_9tBgbdMRk",
  },
  {
    id: 2,
    src: mv2,
    alt: "mv2",
    title: "Can't Control Myself - 태연",
    content: "2022년 1월 17일",
    videoUrl: "https://www.youtube.com/embed/RccDIpx4ZMM",
  },
  {
    id: 3,
    src: mv3,
    alt: "mv3",
    title: "내일의 우리 - 카더가든",
    content: "2023년 9월 12일",
    videoUrl: "https://www.youtube.com/embed/IxaTjGPP2aM",
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
