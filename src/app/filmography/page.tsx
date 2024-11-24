// src/pages/page.js
"use client";
import React from "react";
import MV from "../components/filmography/MV";
import Movie from "../components/filmography/Movie";
import Category from "../components/common/Category";
import useCategoryStore from "../../store/categoryStore";
import Ad from "../components/filmography/Ad";
import Radio from "../components/filmography/Radio";
import {
  CameraIcon,
  FilmIcon,
  GiftTopIcon,
  MegaphoneIcon,
  RadioIcon,
  TvIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Drama from "../components/filmography/Drama";
import { Photo } from "../components/filmography/Photo";
import Variety from "../components/filmography/Variety";

const Page = () => {
  const { selectedCategory } = useCategoryStore();

  const categories = [
    { name: "영화", icon: FilmIcon },
    { name: "드라마", icon: TvIcon },
    { name: "MV", icon: VideoCameraIcon },
    { name: "라디오", icon: RadioIcon },
    { name: "화보", icon: CameraIcon },
    { name: "예능", icon: GiftTopIcon },
    { name: "광고", icon: MegaphoneIcon },
  ];

  const renderSelectedComponent = () => {
    switch (selectedCategory) {
      case "MV":
        return <MV />;
      case "영화":
        return <Movie />;
      case "광고":
        return <Ad />;
      case "라디오":
        return <Radio />;
      case "드라마":
        return <Drama />;
      case "화보":
        return <Photo />;
      case "예능":
        return <Variety />;
      default:
        return <div className="text-white p-4">{selectedCategory}</div>;
    }
  };

  return (
    <div className="flex">
      <Category categories={categories} />
      <div className="flex-grow">{renderSelectedComponent()}</div>
    </div>
  );
};

export default Page;
