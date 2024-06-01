import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY } from "./constants";

export const videoListApi = createApi({
  reducerPath: "videoList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    fetchVideoList: builder.query({
      query: () =>
        `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${KEY}`,
    }),
    fetchSearchVideoList: builder.query({
      query: (keyword) =>
        `search?part=snippet&maxResults=20&type=video&key=${KEY}&q=${keyword}`,
    }),
  }),
});

export const { useFetchVideoListQuery, useFetchSearchVideoListQuery } =
  videoListApi;
