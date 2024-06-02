import { GoogleGenerativeAI } from "@google/generative-ai";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GEMINIAI_KEY, TMDB_KEY } from "../utils/constants";

const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);

export const gptApi = createApi({
  reducerPath: "gptApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/search/movie`,
    prepareHeaders: (headers) => {
      headers.set(`Authorization`, `Bearer ${TMDB_KEY}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    gptTmdb: build.query({
      async queryFn({ value }, _1, _2, fetchWithBQ) {
        const search = `you are a movie and webseries suggesting assistant, suggest atmost 5 movies or webseries names with comma separated for the query : ${value} . for example - seetaram,ramlakhan,hanuman,rangeela,ramayan . if you don't find anything return simply "ERROR" prompt`;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = search;
        try {
          const result = await model.generateContent(prompt);
          const response1 = await result.response.text();
          const response = response1.split(",");

          if (response[0] === "ERROR")
            throw new Error("No Suggestions for your Promt, Try Again...");
          let arr = response.map((item) => fetchWithBQ(`?query=${item}`));
          let data = await Promise.all(arr);
          let errorCheck = data.filter((item) => !item.meta.response.ok);
          if (errorCheck.length) throw new Error("TMDB fetch error");
          return { data: [response, data] };
        } catch (error) {
          return { error: error };
        }
      },
    }),
  }),
});

export const { useLazyGptTmdbQuery } = gptApi;
