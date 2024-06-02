import React from "react";
import CategoryVideos from "./CategoryVideos";

const GptResults = ({ data }) => {
  return (
    <div className="flex flex-col bg-black">
      {data[0].map((item, index) =>
        data[1][index].data.results.length ? (
          <div>
            <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
              {item}
            </h1>
            <CategoryVideos key={data[index]} data={data[1][index].data} />
          </div>
        ) : null
      )}
    </div>
  );
};

export default GptResults;
