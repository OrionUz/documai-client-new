import { useTranslation } from "react-i18next";
import { AboutProProps } from "../type";

function AboutPart({ item, index }: AboutProProps) {
  const { t } = useTranslation();
  return (
    <div className="about-middle-top-box">
      <img style={index === 1 ? { order: 2 } : {}} src={item.img} alt="error about img" />
      <div className="about-middle-top-box-element">
        <h1 className="about-middle-top-box-element-heading">{t(item.title)}</h1>
        <p className="about-middle-top-box-element-paragraph">{t(item.text)}</p>
      </div>
    </div>
  );
}

export default AboutPart;
