import React from "react";

interface Trailer {
  url: string;
  title: string;
}

interface TrailerListProps {
  trailers: Trailer[];
}

const TrailerList: React.FC<TrailerListProps> = ({ trailers }) => {
  if (!trailers || trailers.length === 0) return null;

  return (
    <div className="trailers-container bg-gray-800 p-4 mt-2 rounded-lg">
      {trailers.map((trailer, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-white text-lg mb-2">{trailer.title}</h3>
          <iframe
            width="100%"
            height="360"
            src={trailer.url}
            title={`YouTube Trailer ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default TrailerList;
