import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: [false],
  reducers: {
    loggedIn: (state, action) => {
      state[0] = !state[0];
    },
  },
});
export const { loggedIn } = loginSlice.actions;
export default loginSlice.reducer;
