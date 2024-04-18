import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default appStore;
