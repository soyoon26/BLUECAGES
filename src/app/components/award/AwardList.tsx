"use client";
import React, { useState } from "react";
import AwardCard from "./AwardCard";
import Modal from "./Modal";

const AwardsList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

  const awards = [
    {
      year: "2021년",
      event: "제57회 백상예술대상",
      category: "영화부문 남자 신인 연기상",
      title: "결백",
      image: "https://img.youtube.com/vi/pVoEKkwg-vg/mqdefault.jpg",
      videoId: "pVoEKkwg-vg",
    },
    {
      year: "2023년",
      event: "SBS 연기대상",
      category: "미니시리즈 장르/액션 부문 남자 우수 연기상",
      title: "악귀",
      image: "https://img.youtube.com/vi/QFzl6yHMRzw/mqdefault.jpg",
      videoId: "QFzl6yHMRzw",
    },
    {
      year: "2024년",
      event: "제10회 마리끌레르 아시아스타어워즈",
      category: "페이스 오브 아시아상",
      title: "",
      image:
        "https://pbs.twimg.com/ext_tw_video_thumb/1841975340203442180/pu/img/vRSxKQOFCDshuE4b.jpg:large",
      videoId: "gH-zXSurdAk",
    },
  ];

  const openModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            year={award.year}
            event={award.event}
            category={award.category}
            title={award.title}
            image={award.image}
            onClick={() => openModal(award.videoId)}
          />
        ))}
      </div>
      <Modal
        videoId={currentVideoId || ""}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default AwardsList;
