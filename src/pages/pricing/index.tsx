import { CardAddingSvg } from "src/assets/svg/pricing";
import Card from "./components/card";
import Plan from "./components/plan";
import { pricingCardData, pricingPlanData } from "./const";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "src/app/store";
import { saveBillingCardInfo, setBillingModal } from "src/app/slices/billingcardSlice";
import PricingModal from "src/pages/pricing/components/PricingModal";
import CustomButton from "src/components/common/button";

function PricingInfo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  const openModal = () => {
    if (true) {
      if (isAuthenticated) {
        dispatch(setBillingModal(true));
        dispatch(saveBillingCardInfo());
      } else navigate("/auth/signin?redirect=/pricing");
    }
  };

  return (
    <div className="pricing">
      <div className="container">
        <div className="pricing-head">
          <h2 className="pricing-head-text">Choose Your Plan</h2>
          <div className="pricing-head-plan">
            {pricingPlanData.map((item) => {
              return <Plan item={item} key={item.price} />;
            })}
          </div>
        </div>
        <div className="pricing-main">
          <h2 className="pricing-main-text">Choose Card To Pay</h2>
          <div className="pricing-main-cardList">
            {pricingCardData.map((item) => {
              return <Card item={item} />;
            })}
            <div className="pricing-main-add">
              <div className="pricing-main-add-middle">
                <button onClick={openModal}>
                  <CardAddingSvg />
                </button>
                <h2 className="pricing-main-card-cash">Add Card</h2>
              </div>
              <PricingModal />
            </div>
          </div>
          <div className="pricing-main-buttons">
            <CustomButton className="button button-light undefined undefined undefined" type="submit">
              Payment
            </CustomButton>
            <CustomButton>Delete</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingInfo;
