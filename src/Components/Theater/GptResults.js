import React from "react";
import CategoryVideos from "./CategoryVideos";

const GptResults = ({ data }) => {
  return (
    <div className="flex flex-col bg-black">
      {data[0].map((item, index) =>
        data[1][index].results.length ? (
          <div key={data[0][index]}>
            <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
              {item}
            </h1>
            <CategoryVideos data={data[1][index]} />
          </div>
        ) : null
      )}
    </div>
  );
};

export default GptResults;
