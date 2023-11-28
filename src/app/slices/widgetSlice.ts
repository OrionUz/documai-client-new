import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { widgetThemeColors } from "src/pages/widget/constants/theme";
import { IWidgetThemeColor } from "src/pages/widget/constants/theme/type";

export interface IWidgetState {
  darkMode: boolean;
  colors: IWidgetThemeColor;
}

export const THEME_COLOR = "DOCUM_AI_WIDGET_THEME_COLOR";

export const isWidgetDarkTheme = localStorage.getItem(THEME_COLOR) === "light";

const initialState: IWidgetState = {
  darkMode: isWidgetDarkTheme,
  colors: isWidgetDarkTheme ? widgetThemeColors.dark : widgetThemeColors.light,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeWidgetTheme: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload === "light") state.darkMode = false;
      else if (action.payload === "dark") state.darkMode = true;
      else state.darkMode = !state.darkMode;

      if (state.darkMode) {
        localStorage.setItem(THEME_COLOR, "dark");
        state.colors = widgetThemeColors.dark;
      } else {
        localStorage.setItem(THEME_COLOR, "light");
        state.colors = widgetThemeColors.light;
      }

      for (const key in state.colors) {
        document.documentElement.style.setProperty("--color_" + key, state.colors[key as keyof IWidgetThemeColor]);
      }
    },
  },
});

export const { changeWidgetTheme } = layoutSlice.actions;

export default layoutSlice.reducer;
