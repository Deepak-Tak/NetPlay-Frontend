import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import loggedInReducer from "./loginSlice";

const appStore = configureStore({
  reducer: {
    search: searchReducer,
    loginSlice: loggedInReducer,
  },
});

export default appStore;
