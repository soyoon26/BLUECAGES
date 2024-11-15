import React from "react";

type CategoryItemProps = {
  item: {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  isSelected: boolean;
  onClick: () => void;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  isSelected,
  onClick,
}) => {
  const IconComponent = item.icon;

  return (
    <div
      className={`flex py-2 w-[150px] pl-2 items-center space-x-2 cursor-pointer rounded-md ${
        isSelected ? "bg-sky-700" : "hover:bg-sky-600"
      }`}
      onClick={onClick}
    >
      <IconComponent className="w-6 h-6" />
      <span>{item.name}</span>
    </div>
  );
};

export default CategoryItem;
