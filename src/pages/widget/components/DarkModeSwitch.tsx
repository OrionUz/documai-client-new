import { DarkModeSvg, LightModeSvg } from "src/assets/svg";

interface Props {
  changeWidgetTheme: (mode: string | null) => void;
  darkMode: boolean;
}

function DarkModeSwitch({ changeWidgetTheme, darkMode }: Props) {
  return (
    <div onClick={() => changeWidgetTheme(null)} className="widget-darkmode">
      {darkMode ? <DarkModeSvg /> : <LightModeSvg />}
    </div>
  );
}

export default DarkModeSwitch;
