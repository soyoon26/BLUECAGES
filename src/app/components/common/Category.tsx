import React from "react";
import useCategoryStore from "../../../store/categoryStore";
import CategoryItem from "./CategoryItem";

type Category = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type CategoryProps = {
  categories: Category[];
};

const Category: React.FC<CategoryProps> = ({ categories }) => {
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  return (
    <div className="bg-sky-900 p-4 rounded-lg text-white">
      {categories.map((item, index) => (
        <CategoryItem
          key={index}
          item={item}
          isSelected={selectedCategory === item.name}
          onClick={() => {
            setSelectedCategory(item.name);
            console.log("Current selected category:", item.name);
          }}
        />
      ))}
    </div>
  );
};

export default Category;
