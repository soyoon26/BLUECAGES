// src/pages/page.js
"use client";
import React from "react";
import MV from "../components/filmography/MV";
import Movie from "../components/filmography/Movie";
import Category from "../components/common/Category";
import useCategoryStore from "../../store/categoryStore";
import Ad from "../components/filmography/Ad";
import Radio from "../components/filmography/Radio";

const Page = () => {
  const { selectedCategory } = useCategoryStore();

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
      default:
        return <div className="text-white p-4">{selectedCategory}</div>;
    }
  };

  return (
    <div className="flex">
      <Category />
      <div className="flex-grow">{renderSelectedComponent()}</div>
    </div>
  );
};

export default Page;
