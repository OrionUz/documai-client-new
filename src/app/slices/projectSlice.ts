import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProject } from "../services/projects/type";

export interface IAuthState {
  projects?: IProject[];
}

const initialState: IAuthState = {
  projects: undefined,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    saveProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { saveProjects,  } = projectSlice.actions;

export default projectSlice.reducer;
