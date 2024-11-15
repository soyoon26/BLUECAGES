"use client";
import React from "react";
import useCategoryStore from "../../store/categoryStore";

import { BookOpenIcon, FilmIcon } from "@heroicons/react/24/outline";
import Movie from "../components/favourites/Movie";
import Book from "../components/favourites/Book";
import Category from "../components/common/Category";

const Page = () => {
  const { selectedCategory } = useCategoryStore();

  const categories = [
    { name: "영화", icon: FilmIcon },
    { name: "책", icon: BookOpenIcon },
  ];

  const renderSelectedComponent = () => {
    switch (selectedCategory) {
      case "영화":
        return <Movie />;
      case "책":
        return <Book />;
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
