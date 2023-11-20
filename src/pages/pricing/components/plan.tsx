import { useState } from "react";
import { PricingPlanProps } from "../type";

function Plan({ item }: PricingPlanProps) {
  //   const [activeState, setActiveState] = useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="pricing-head-plans">
      <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "#664DFF" : "#212934" }}
        type="button"
        className="pricing-head-plans-btn"
      >
        {item.icon  }
        <div className="pricing-head-plans-right">
          <div className="pricing-head-plans-price">{item.price}</div>
          <span className="pricing-head-plans-text">{item.month}</span>
        </div>
      </button>
    </div>
  );
}

export default Plan;
