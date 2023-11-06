import { setBillingModal } from "src/app/slices/billingcardSlice";
import { useAppDispatch, useTypedSelector } from "src/app/store";
import CustomModal from "src/components/common/modal";
import "./_pricing.scss";
import PricingSms from "./PricingSms";
import PricingInfo from "./PricingInfo";

function PricingModal() {
  const { billingVisible, billingInfo } = useTypedSelector(
    (state) => state.billing
  );
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(setBillingModal(false));
  };

  return (
    <CustomModal open={billingVisible} onCancel={closeModal}>
      {billingInfo?.cardToken ? <PricingSms /> : <PricingInfo />}
    </CustomModal>
  );
}

export default PricingModal;
