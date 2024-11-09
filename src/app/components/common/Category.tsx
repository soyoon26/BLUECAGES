import React from "react";
import {
  VideoCameraIcon,
  FilmIcon,
  CameraIcon,
  RadioIcon,
  TvIcon,
  GiftTopIcon,
} from "@heroicons/react/24/outline";
import useCategoryStore from "../../../store/categoryStore";

const icons = [
  { name: "영화", icon: FilmIcon },
  { name: "드라마", icon: TvIcon },
  { name: "MV", icon: VideoCameraIcon },
  { name: "라디오", icon: RadioIcon },
  { name: "화보", icon: CameraIcon },
  { name: "예능", icon: GiftTopIcon },
];

const Category = () => {
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  return (
    <div className="bg-sky-900 p-4 rounded-lg text-white">
      {icons.map((item, index) => {
        const IconComponent = item.icon;
        const isSelected = selectedCategory === item.name;

        return (
          <div
            key={index}
            className={`flex py-2 w-[150px] pl-2 items-center space-x-2 cursor-pointer rounded-md ${
              isSelected ? "bg-sky-700" : "hover:bg-sky-600"
            }`}
            onClick={() => {
              setSelectedCategory(item.name);
              console.log("Current selected category:", item.name);
            }}
          >
            <IconComponent className="w-6 h-6" />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
