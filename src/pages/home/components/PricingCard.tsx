import { useTranslation } from "react-i18next";
import { PricingCardProps } from "../type";
import { CorrectActiveSvg, CorrectInActiveSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";

function PricingCard({ item }: PricingCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className={`pricingcard ${item.main && "pricingcard-main"}`}>
      <div className="pricingcard-content">
        <div className="pricingcard-type">{t(item.type)}</div>
        <div className="pricingcard-price">
          {t(item.price ?? '')}
          {item.price_duration ? <span>{t(item.price_duration)}</span> : ""}
        </div>
        {item.description ? (
          <div className="pricingcard-description">{t(item.description)}</div>
        ) : (
          ""
        )}
        {item.requirement ? (
          <div className="pricingcard-requirement">
            {t(item.requirement)} <span>Learn more</span>
          </div>
        ) : (
          ""
        )}
        {item.includes.map((include, index) => {
          return (
            <div className="pricingcard-include" key={include + index}>
              {item.main ? <CorrectActiveSvg /> : <CorrectInActiveSvg />}{" "}
              {t(include)}
            </div>
          );
        })}
      </div>
      {item.current ? (
        <CustomButton color="dark" disabled style={{ color: "#90959B" }}>
          Current plan
        </CustomButton>
      ) : item.main ? (
        <CustomButton color="light">Upgrade</CustomButton>
      ) : (
        <CustomButton color="dark">Upgrade</CustomButton>
      )}
    </div>
  );
}

export default PricingCard;
