// src/components/common/VideoItem.tsx
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image"; // StaticImageData import 추가

interface Video {
  id: number;
  src: StaticImageData | string;
  alt: string;
  title: string;
  youtuber_src: StaticImageData | string;
  youtuber: string;
  content: string;
  videoUrl: string;
}

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <section
        onClick={toggleVisibility}
        className="cursor-pointer p-4 text-center flex justify-between  gap-10"
      >
        <Image src={video.src} alt={video.alt} width={300} />
        <div className="flex justify-between w-full">
          <article>
            <div className="mb-4 mt-2">
              <p className="flex text-lg">{video.title}</p>
              <p className="flex text-gray-400">{video.content}</p>
            </div>
            <div className="flex text-gray-400 items-center gap-3">
              <Image
                src={video.youtuber_src}
                alt={video.youtuber}
                width={30}
                style={{ borderRadius: "50%" }}
              />
              <p>{video.youtuber}</p>
            </div>
          </article>
          {isVisible ? (
            <ChevronUpIcon className="w-6 h-6" />
          ) : (
            <ChevronDownIcon className="w-6 h-6" />
          )}
        </div>
      </section>
      {isVisible && (
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
  );
};

export default VideoItem;
