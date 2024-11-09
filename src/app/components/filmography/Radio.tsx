"use client";

import React from "react";
import VideoItem from "../common/VideoItem";
import radio1 from "../../../../public/이금희.png";
import radio2 from "../../../../public/약한영웅.png";
import radio3 from "../../../../public/악귀.png";
import radio4 from "../../../../public/댓글부대.png";
import SBS from "../../../../public/SBS.jpg";
import KBS from "../../../../public/KBS.jpg";

const videoData = [
  {
    id: 1,
    src: radio1,
    alt: "radio1",
    title: "사랑하기 좋은날 이금희입니다",
    youtuber_src: KBS,
    youtuber: "KBS CoolFM",
    content: "2020년 7월 9일",
    videoUrl: "https://www.youtube.com/embed/9Xloi_pHaw4",
  },
  {
    id: 2,
    src: radio2,
    alt: "radio2",
    title: "박하선의 씨네타운",
    youtuber_src: SBS,
    youtuber: "SBS Radio 에라오",
    content: "2022년 11월 16일",
    videoUrl: "https://www.youtube.com/embed/1gvPVMGzYLM",
  },
  {
    id: 3,
    src: radio3,
    alt: "radio3",
    title: "최화정의 파워타임",
    youtuber_src: SBS,
    youtuber: "SBS Radio 에라오",
    content: "2023년 6월 23일",
    videoUrl: "https://www.youtube.com/embed/ZyRN1K-6Ck8",
  },
  {
    id: 4,
    src: radio4,
    alt: "radio4",
    title: "박하선의 씨네타운",
    youtuber_src: SBS,
    youtuber: "SBS Radio 에라오",
    content: "2024년 3월 27일",
    videoUrl: "https://www.youtube.com/embed/z0SKuTMVOuI",
  },
];

const Radio: React.FC = () => {
  return (
    <div className="w-full">
      {videoData.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Radio;
