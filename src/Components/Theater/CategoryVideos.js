import React from "react";
import { CDN_LINK } from "../../utils/constants";

const CategoryVideos = ({ data }) => {
  if (data === "error") return <Simmer />;
  return (
    <div className="flex gap-4 w-full px-6 overflow-x-scroll scrollbar-none">
      {data.results.map((item) =>
        item.poster_path ? (
          <img
            alt="MOVIECARD"
            key={item.poster_path}
            src={CDN_LINK + item.poster_path}
            className="w-48 shrink-0 pl-4"
          />
        ) : null
      )}
    </div>
  );
};

export default CategoryVideos;

const Simmer = () => {

  return <div className="flex gap-4 w-full px-6 overflow-x-scroll scrollbar-none">
    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <div
      key={index} className="w-48 shrink-0 h-[264px] bg-[#3a3a3a] animate-pulse"
    />

    )}
  </div>

}
