import React from "react";
import { CDN_LINK } from "../../utils/constants";

const CategoryVideos = ({ data }) => {
  if (!data) return <div>Loading</div>;
  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      {data.results.map((item) => (
        <img
          alt="MOVIECARD"
          key={item.poster_path}
          src={CDN_LINK + item.poster_path}
          className="w-48 pl-4"
        />
      ))}
    </div>
  );
};

export default CategoryVideos;
