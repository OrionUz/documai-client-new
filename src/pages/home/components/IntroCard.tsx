import { useTranslation } from "react-i18next";
import { IntroCardProps } from "../type";
import { IntrocardIconSvg } from "src/assets/svg";

function IntroCard({ item }: IntroCardProps) {
  const { t } = useTranslation();
  return (
    <div className="introcard">
      <div className="line-top"></div>
      <div className="line-left"></div>
      <div className="introcard-icon">
        <div className="introcard-icon-inside">
          <IntrocardIconSvg />
          <div className="introcard-icon-inside-svg">{item.icon}</div>
        </div>
      </div>
      <div className="line"></div>
      <div className="introcard-content">
        <h2>{t(item.title)}</h2>
        <p>{t(item.description)}</p>
      </div>
      {/* <div className="introcard-icon">
        <img src={item.img} alt={item.title + "error"} />
      </div> */}
    </div>
  );
}

export default IntroCard;
