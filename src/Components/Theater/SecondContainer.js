import React from "react";
import CategoryVideos from "./CategoryVideos";
import {
  useFetchNowPlayingQuery,
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchUpComingQuery,
} from "../../utils/categoryVideosApi";

const SecondContainer = () => {
  const nowPlaying = useFetchNowPlayingQuery();
  const popular = useFetchPopularQuery();
  const topRated = useFetchTopRatedQuery();
  const upComing = useFetchUpComingQuery();
  return (
    <div className="flex flex-col bg-black relative top-[100vh]">
      <div className="-mt-36">
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
          Now Playing
        </h1>
        <CategoryVideos data={nowPlaying.data} />
      </div>
      <div>
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">Popular</h1>
        <CategoryVideos data={popular.data} />
      </div>
      <div>
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
          Top Rated
        </h1>
        <CategoryVideos data={topRated.data} />
      </div>
      <div>
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
          Up Coming
        </h1>
        <CategoryVideos data={upComing.data} />
      </div>
    </div>
  );
};

export default SecondContainer;
