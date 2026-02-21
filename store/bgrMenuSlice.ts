"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

const bgrMenuSlice = createSlice({
  name: "bgrMenu",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { open, close, toggle } = bgrMenuSlice.actions;

export default bgrMenuSlice.reducer;
