import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: [true, true],
  reducers: {
    setToogle: (state) => {
      if (state[0]) state[1] = !state[1];
    },
    displaySidebar: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { setToogle, displaySidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
