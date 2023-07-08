import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  navigation: boolean;
}

const initialState: IAuthState = {
  navigation: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    changeNavigation: (state) => {
      state.navigation = !state.navigation;
    },
  },
});

export const { changeNavigation } = headerSlice.actions;

export default headerSlice.reducer;
