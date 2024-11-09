"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import mv2 from "../../../../public/태연뮤비.png";
import mv1 from "../../../../public/옥탑방에서.png";
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

const MV = () => {
  const [visibleVideoId, setVisibleVideoId] = useState(null);

  const toggleVideoVisibility = (id) => {
    setVisibleVideoId(visibleVideoId === id ? null : id);
  };

  return (
    <div>
      {videoData.map((video) => (
        <div key={video.id}>
          <section
            onClick={() => toggleVideoVisibility(video.id)}
            className="cursor-pointer p-4 text-center flex justify-between items-center gap-10"
          >
            <Image src={video.src} alt={video.alt} width={300} />
            <div className="flex justify-between w-full">
              <article>
                <p>{video.title}</p>
                <p>{video.content}</p>
              </article>
              {visibleVideoId === video.id ? (
                <div>
                  <ChevronUpIcon className="w-6 h-6" />
                </div>
              ) : (
                <div>
                  <ChevronDownIcon className="w-6 h-6" />
                </div>
              )}
            </div>
          </section>
          {visibleVideoId === video.id && (
            <div className="video-container flex justify-center mt-4">
              <iframe
                width="1000"
                height="515"
                src={video.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MV;
