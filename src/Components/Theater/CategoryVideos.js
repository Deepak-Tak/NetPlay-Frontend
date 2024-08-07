import React from "react";
import { CDN_LINK } from "../../utils/constants";

const CategoryVideos = ({ data }) => {
  if (!data) return null;
  return (
    <div className="flex overflow-x-scroll scrollbar-none">
      {data.results.map((item) =>
        item.poster_path ? (
          <img
            alt="MOVIECARD"
            key={item.poster_path}
            src={CDN_LINK + item.poster_path}
            className="w-48 pl-4"
          />
        ) : null
      )}
    </div>
  );
};

export default CategoryVideos;
