import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: "en",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    langValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { langValue } = langSlice.actions;

export default langSlice.reducer;
