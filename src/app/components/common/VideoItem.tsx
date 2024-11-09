// src/components/common/VideoItem.tsx
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image"; // StaticImageData import 추가

// Video 인터페이스 정의
interface Video {
  id: number;
  src: StaticImageData | string; // src 타입을 StaticImageData | string으로 설정
  alt: string;
  title: string;
  content: string;
  videoUrl: string;
}

// VideoItemProps 인터페이스 정의
interface VideoItemProps {
  video: Video;
}

// React.FC<VideoItemProps>로 VideoItem 컴포넌트 정의
const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <section
        onClick={toggleVisibility}
        className="cursor-pointer p-4 text-center flex justify-between items-center gap-10"
      >
        <Image src={video.src} alt={video.alt} width={300} />{" "}
        {/* 타입이 맞지 않는 경우, src의 타입을 StaticImageData | string으로 설정 */}
        <div className="flex justify-between w-full">
          <article>
            <p>{video.title}</p>
            <p>{video.content}</p>
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
