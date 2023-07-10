import CustomButton from "src/components/common/button";
import { AboutCardProps } from "../type";
import { useTranslation } from "react-i18next";
import TranslatedComponents from "./TranslatedTextWithNewLines";

function AboutCard({ item }: AboutCardProps) {
  const { t } = useTranslation();
  return (
    <div className={`aboutcard aboutcard-${item.width}`}>
      <div className="aboutcard-left">
        <h2>{t(item.title)}</h2>
        {item.description.map((p) => {
          return <TranslatedComponents text={p} key={p}/>;
        })}

        {item.button ? (
          <CustomButton color="light" bordered>
            {t(item.button)}
          </CustomButton>
        ) : item.img ? (
          <img src={item.img} alt={item.title + "error"} />
        ) : item.icon ? (
          item.icon
        ) : (
          ""
        )}
      </div>
      {item.button && <div className="aboutcard-right">{item.icon}</div>}
    </div>
  );
}

export default AboutCard;
