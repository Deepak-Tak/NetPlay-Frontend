import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY } from "../utils/constants";

export const videoListApi = createApi({
  reducerPath: "videoList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    fetchVideoList: builder.query({
      query: (number) =>
        `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=${number}&key=${KEY}`,
    }),
    fetchSearchVideoList: builder.query({
      query: (keyword) =>
        `search?part=snippet&maxResults=20&type=video&key=${KEY}&q=${keyword}`,
    }),
  }),
});

export const { useFetchVideoListQuery, useFetchSearchVideoListQuery } =
  videoListApi;
