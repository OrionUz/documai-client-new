import { PricingCardProps } from "../type";
import { CorrectActiveSvg, CorrectInActiveSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";

function PricingCard({ item }: PricingCardProps) {
  return (
    <div className={`pricingcard ${item.main && "pricingcard-main"}`}>
      <div className="pricingcard-content">
        <div className="pricingcard-type">{item.type}</div>
        <div className="pricingcard-price">
          {item.price}
          {item.price_duration ? <span>{item.price_duration}</span> : ""}
        </div>
        {item.description ? <div className="pricingcard-description">{item.description}</div> : ""}
        {item.requirement ? (
          <div className="pricingcard-requirement">
            {item.requirement} <span>Learn more</span>
          </div>
        ) : (
          ""
        )}
        {item.includes.map((include, index) => {
          return (
            <div className="pricingcard-include" key={include + index}>
              {item.main ? <CorrectActiveSvg /> : <CorrectInActiveSvg />} {include}
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
