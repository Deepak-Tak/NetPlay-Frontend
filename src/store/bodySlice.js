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
        `search?part=snippet&maxResults=18&type=video&key=${KEY}&q=${keyword}`,
    }),
    fetchVideoDetails: builder.query({
      query: (id) =>
        `videos?part=snippet%2CcontentDetails%2Cstatistics&key=${KEY}&id=${id}`,
    }),
    fetchComments: builder.query({
      query: (id) =>
        `commentThreads?part=snippet%2Creplies&videoId=${id}&maxResults=50&key=${KEY}`
    }),
    fetchChannelDetails: builder.query({
      query: (id) =>
        `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`
    })

  }),
});

export const { useFetchChannelDetailsQuery, useFetchCommentsQuery, useFetchVideoListQuery, useFetchSearchVideoListQuery, useFetchVideoDetailsQuery } =
  videoListApi;
