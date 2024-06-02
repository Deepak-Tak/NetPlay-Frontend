import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import loggedInReducer from "./loginSlice";
import { videoListApi } from "./bodySlice";
import { categoryVideosApi } from "../services/categoryVideosApi";
import sidebarReducer from "./sidebarSlice";
import gptReducer from "./gptSlice";
import { gptApi } from "../services/gptapi";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    login: loggedInReducer,
    gpt: gptReducer,
    [videoListApi.reducerPath]: videoListApi.reducer,
    [categoryVideosApi.reducerPath]: categoryVideosApi.reducer,
    [gptApi.reducerPath]: gptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      videoListApi.middleware,
      categoryVideosApi.middleware,
      gptApi.middleware,
    ]),
});

export default appStore;
