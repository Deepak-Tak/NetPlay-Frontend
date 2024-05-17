import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import loggedInReducer from "./loginSlice";
import { videoListApi } from "./bodySlice";

const appStore = configureStore({
  reducer: {
    [videoListApi.reducerPath]: videoListApi.reducer,
    search: searchReducer,
    login: loggedInReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoListApi.middleware),
});

export default appStore;
