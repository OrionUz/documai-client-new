import { useTranslation } from "react-i18next";
import { IntroCardProps } from "../type";

function IntroCard({ item }: IntroCardProps) {
  const { t } = useTranslation();
  return (
    <div className="introcard">
      <div className="introcard-content">
        <h2>{t(item.title)}</h2>
        <p>{t(item.description)}</p>
      </div>
      <div className="introcard-icon">
        <img src={item.img} alt={item.title + "error"} />
      </div>
    </div>
  );
}

export default IntroCard;
