import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.theme == "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      return state;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice;
