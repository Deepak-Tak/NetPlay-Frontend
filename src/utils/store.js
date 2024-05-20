import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import loggedInReducer from "./loginSlice";
import { videoListApi } from "./bodySlice";
import { categoryVideosApi } from "./categoryVideosApi";
import sidebarReducer from "./sidebarSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    login: loggedInReducer,
    [videoListApi.reducerPath]: videoListApi.reducer,
    [categoryVideosApi.reducerPath]: categoryVideosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      videoListApi.middleware,
      categoryVideosApi.middleware,
    ]),
});

export default appStore;
