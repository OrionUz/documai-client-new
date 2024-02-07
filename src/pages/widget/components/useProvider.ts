import { useRef, useState } from "react";
import { widgetThemeColors } from "../constants/theme";
import { IWidgetThemeColor } from "../constants/theme/type";

export interface IWidgetState {
  darkMode: boolean;
  colors: IWidgetThemeColor;
}

export const THEME_COLOR = "DOCUM_AI_WIDGET_THEME_COLOR";
export const defaultTheme = localStorage.getItem(THEME_COLOR);
export const isWidgetDarkTheme = defaultTheme === "dark";

const initialState: IWidgetState = {
  darkMode: isWidgetDarkTheme,
  colors: isWidgetDarkTheme ? widgetThemeColors.dark : widgetThemeColors.light,
};

export const useProvider = () => {
  const endingRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<any>(null);
  const [darkMode, setDarkMode] = useState<boolean>(initialState.darkMode);

  const onMessageChange = () => {
    endingRef?.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    inputRef?.current?.focus();
  }

  const changeWidgetTheme = (mode?: string | null) => {
    let isDarkMode: boolean = !darkMode;
    if (mode) isDarkMode = mode === "dark";
    
    let modeColors = isDarkMode ? widgetThemeColors.dark : widgetThemeColors.light;
    
    localStorage.setItem(THEME_COLOR, isDarkMode ? "dark" : "light");
    
    for (const key in modeColors) {
      document.documentElement.style.setProperty("--color_" + key, modeColors[key as keyof IWidgetThemeColor]);
    }

    setDarkMode(isDarkMode);
  };

  return {
    endingRef, inputRef, darkMode, setDarkMode, onMessageChange, changeWidgetTheme,
  }
}