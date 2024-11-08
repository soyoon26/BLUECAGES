"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const MV = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const toggleVideoVisibility = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <div>
      <section
        onClick={toggleVideoVisibility}
        className="cursor-pointer p-4 text-center"
      >
        {isVideoVisible ? (
          <div>
            <p>Can't Control Myself - 태연</p>
            <ChevronUpIcon className="w-6 h-6" />
          </div>
        ) : (
          <div>
            <p>Can't Control Myself - 태연</p>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
        )}
      </section>
      {isVideoVisible && (
        <div className="video-container mt-4">
          <iframe
            width="1000"
            height="515"
            src="https://www.youtube.com/embed/RccDIpx4ZMM"
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

export default MV;
