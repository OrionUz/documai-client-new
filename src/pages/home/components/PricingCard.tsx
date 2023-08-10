import { useTranslation } from "react-i18next";
import { saveBillingCardInfo, setBillingModal } from "src/app/slices/billingcardSlice";
import { CorrectActiveSvg, CorrectInActiveSvg } from "src/assets/svg";
import PricingModal from "src/components/cards/pricing/PricingModal";
import CustomButton from "src/components/common/button";
import { PricingCardProps } from "../type";
import { useAppDispatch, useTypedSelector } from "src/app/store";
import { useNavigate } from "react-router-dom";

function PricingCard({ item }: PricingCardProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  const openModal = () => {
    if (false) {
      if (isAuthenticated) {
        dispatch(setBillingModal(true));
        dispatch(saveBillingCardInfo(item));
      } else navigate("/auth");
    }
  };

  return (
    <div className={`pricingcard ${item.main && "pricingcard-main"}`}>
      <div className="pricingcard-content">
        <div className="pricingcard-type">{t(item.type)}</div>
        <div className="pricingcard-price">
          {t(item.price ?? "")}
          {item.price_duration ? <span>{t(item.price_duration)}</span> : ""}
        </div>
        {item.description ? <div className="pricingcard-description">{t(item.description)}</div> : ""}
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
              {item.main ? <CorrectActiveSvg /> : <CorrectInActiveSvg />} {t(include)}
            </div>
          );
        })}
      </div>
      {item.current ? (
        <CustomButton color="dark" disabled style={{ color: "#90959B" }}>
          Current plan
        </CustomButton>
      ) : item.main ? (
        <div>
          <CustomButton style={{ width: "100%" }} color="light" onClick={openModal}>
            Upgrade
          </CustomButton>
        </div>
      ) : (
        <CustomButton color="dark" onClick={openModal}>
          Upgrade
        </CustomButton>
      )}
      <PricingModal />
    </div>
  );
}

export default PricingCard;
