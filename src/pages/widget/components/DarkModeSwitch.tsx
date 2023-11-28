import { useEffect, useState } from "react";
import { DarkModeSvg, LightModeSvg } from "src/assets/svg";
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

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState<boolean>(initialState.darkMode);

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

  useEffect(() => {
    changeWidgetTheme(defaultTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onClick={() => changeWidgetTheme(null)} className="widget-darkmode">
      {darkMode ? <DarkModeSvg /> : <LightModeSvg />}
    </div>
  );
}

export default DarkModeSwitch;
