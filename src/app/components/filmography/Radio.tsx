"use client";

import React from "react";
import VideoItem from "../common/VideoItem";
import { images } from "../../assets/images";

const videoData = [
  {
    id: 1,
    src: images.radio1,
    alt: "radio1",
    title: "사랑하기 좋은날 이금희입니다",
    youtuber_src: images.KBS,
    youtuber: "KBS CoolFM",
    content: "2020년 7월 9일",
    videoUrls: ["https://www.youtube.com/embed/9Xloi_pHaw4"],
  },
  {
    id: 2,
    src: images.radio2,
    alt: "radio2",
    title: "박하선의 씨네타운",
    youtuber_src: images.SBS,
    youtuber: "SBS Radio 에라오",
    content: "2022년 11월 16일",
    videoUrls: ["https://www.youtube.com/embed/1gvPVMGzYLM"],
  },
  {
    id: 3,
    src: images.radio3,
    alt: "radio3",
    title: "최화정의 파워타임",
    youtuber_src: images.SBS,
    youtuber: "SBS Radio 에라오",
    content: "2023년 6월 23일",
    videoUrls: ["https://www.youtube.com/embed/ZyRN1K-6Ck8"],
  },
  {
    id: 4,
    src: images.radio4,
    alt: "radio4",
    title: "박하선의 씨네타운",
    youtuber_src: images.SBS,
    youtuber: "SBS Radio 에라오",
    content: "2024년 3월 27일",
    videoUrls: ["https://www.youtube.com/embed/z0SKuTMVOuI"],
  },
  {
    id: 5,
    src: images.radio5,
    alt: "radio5",
    title: "박하선의 씨네타운",
    youtuber_src: images.SBS,
    youtuber: "SBS Radio 에라오",
    content: "2024년 11월 6일",
    videoUrls: ["https://www.youtube.com/embed/HR-aYOjW-3Y"],
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
