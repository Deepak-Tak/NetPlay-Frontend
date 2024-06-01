import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { gptRecomendations: null, tmdbResults: null },
  reducers: {
    setGptRecomendations: (state, action) => {
      state.gptRecomendations = action.payload;
    },
    setTmdbResults: (state, action) => {
      state.gptRecomendations = action.payload;
    },
  },
});

export const { setGptRecomendations, setTmdbResults } = gptSlice.actions;
export default gptSlice.reducer;
