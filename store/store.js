import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./ThemeSlice";
import { searchCardSlice } from "./SearchCardSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    searchCard: searchCardSlice.reducer,
  },
});
