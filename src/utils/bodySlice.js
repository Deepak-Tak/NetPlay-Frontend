import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VIDEO_LIST_API } from "./constants";

export const videoListApi = createApi({
  reducerPath: "videoList",
  baseQuery: fetchBaseQuery({ baseUrl: VIDEO_LIST_API }),
  endpoints: (builder) => ({
    fetchVideoList: builder.query({ query: () => `` }),
  }),
});

export const { useFetchVideoListQuery } = videoListApi;
