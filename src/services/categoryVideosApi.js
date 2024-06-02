import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_KEY } from "../utils/constants";

export const categoryVideosApi = createApi({
  reducerPath: "categoryVideoList",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/movie`,
    prepareHeaders: (headers) => {
      headers.set(`Authorization`, `Bearer ${TMDB_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchNowPlaying: builder.query({
      query: () => `/now_playing?language=en-US&page=1`,
    }),
    fetchPopular: builder.query({
      query: () => `/popular?language=en-US&page=1`,
    }),
    fetchTopRated: builder.query({
      query: () => `/top_rated?language=en-US&page=1`,
    }),
    fetchUpComing: builder.query({
      query: () => `/upcoming?language=en-US&page=1`,
    }),
  }),
});

export const {
  useFetchNowPlayingQuery,
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchUpComingQuery,
} = categoryVideosApi;
