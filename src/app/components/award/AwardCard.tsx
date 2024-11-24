import React from "react";

interface AwardCardProps {
  year: string;
  event: string;
  category: string;
  title: string;
  image: string;
  onClick: () => void;
}

const AwardCard: React.FC<AwardCardProps> = ({
  year,
  event,
  category,
  title,
  image,
  onClick,
}) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title || event}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{year}</h3>
        <p className="text-pink-500 font-semibold">{event}</p>
        <p className="text-gray-600">{category}</p>
        <p className="text-gray-700 mt-2">{title}</p>
      </div>
    </div>
  );
};

export default AwardCard;
