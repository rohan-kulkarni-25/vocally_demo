import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const searchCardSlice = createSlice({
  name: "searchCard",
  initialState,
  reducers: {
    setShow: (state) => {
      state.show = !state.show;
      return state;
    },
  },
});

export const { setShow } = searchCardSlice.actions;

export default searchCardSlice;
