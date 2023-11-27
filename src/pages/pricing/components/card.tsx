import { useState } from "react";
import { PricingCardsProps } from "../type";

function Card({ item }: PricingCardsProps) {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className="pricing-main-cardInfo"
      style={{
        borderTop: active ? "4px solid #565C64" : "4px solid #664DFF",
        borderBottom: active ? "2px solid #565C64" : "2px solid #664DFF",
        boxShadow: active ? "" : "0px 4px 20px 0px rgba(102, 77, 255, 0.50)",
      }}
      onClick={handleClick}
    >
      {item.icon}
      <div className="pricing-main-info">
        <div className="pricing-main-card">
          <div className="pricing-main-card-balance">
            <h2 className="pricing-main-card-holder">{item.balance}</h2>
            <span className="pricing-main-card-cash">{item.cash} so'm</span>
          </div>
          <div className="pricing-main-card-details">
            <div className="pricing-main-card-detail">
              <h2 className="pricing-main-card-number">{item.card_number}</h2>
              <h2 className="pricing-main-card-holder">{item.card_holder}</h2>
            </div>
            <div className="pricing-main-card-date">
              <div className="pricing-main-card-month">
                <h2 className="pricing-main-card-holder">{item.date}</h2>
                <span className="pricing-main-card-number">
                  {item.date_month}/{item.date_year}
                </span>
              </div>
              <div className="pricing-main-card-cvc">
                <h2 className="pricing-main-card-holder">{item.cvc}</h2>
                <span className="pricing-main-card-number">
                  {item.cvc_number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
