import React from "react";
import CategoryVideos from "./CategoryVideos";
import {
  useFetchNowPlayingQuery,
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchUpComingQuery,
} from "../../services/categoryVideosApi";

const SecondContainer = () => {
  const nowPlaying = useFetchNowPlayingQuery();
  const popular = useFetchPopularQuery();
  const topRated = useFetchTopRatedQuery();
  const upComing = useFetchUpComingQuery();
  const isFetching = nowPlaying.isFetching || popular.isFetching || topRated.isFetching || upComing.isFetching
  const isError = nowPlaying.isError || popular.isError || topRated.isError || upComing.isError
  return (
    <div className="flex flex-col relative bg-black pb-10  top-[100vh]">
      <div className="-mt-36">
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
          Now Playing
        </h1>
        <CategoryVideos data={(!isFetching && (!isError)) ? nowPlaying.data : "error"} />
      </div>
      <div>
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">Popular</h1>
        <CategoryVideos data={(!isFetching && (!isError)) ? popular.data : "error"} />
      </div>
      <div>
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
          Top Rated
        </h1>
        <CategoryVideos data={(!isFetching && (!isError)) ? topRated.data : "error"} />
      </div>
      <div>
        <h1 className="pl-4 text-2xl font-semibold py-3 text-white">
          Up Coming
        </h1>
        <CategoryVideos data={(!isFetching && (!isError)) ? upComing.data : "error"} />
      </div>
    </div>
  );
};

export default SecondContainer;
