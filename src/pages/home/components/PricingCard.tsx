"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CorrectActiveSvg, CorrectInActiveSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import { PricingCardProps } from "../type";
// import CustomModal from "src/components/common/modal";
// import { MaskedInput } from "antd-mask-input";
// import { LockIcon } from "src/assets/svg/freepik/modal";
// import { Form } from "antd";

function PricingCard({ item }: PricingCardProps) {
  const { t } = useTranslation();

  // //GETTING CARD NUMBER
  // const [closingCard, setInvisiable] = useState(false);
  // const closeList = () => setInvisiable(true);
  
  //SMS CODE
  // const [openSms, setSms] = useState(true);
  // const openingSms = () => setSms(false);
  
  // const [visible, setVisible] = useState(false);
  // const openModal = () => setVisible(true);
  // const closeModal = () => {
  //   setVisible(false);
  // };
  
  return (
    <div className={`pricingcard ${item.main && "pricingcard-main"}`}>
      <div className="pricingcard-content">
        <div className="pricingcard-type">{t(item.type)}</div>
        <div className="pricingcard-price">
          {t(item.price ?? "")}
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
        <div>
          <CustomButton
            style={{ width: "100%" }}
            color="light"
            // onClick={openModal}
          >
            Upgrade
          </CustomButton>{" "}
          {/* <CustomModal open={visible} onCancel={closeModal}>
            <div className="modal">
              <div className="modal-title">
                <h3>Payment info</h3>
                <LockIcon />
              </div>
              <div className="modal-main">
                <div
                  className={`modal-main-left ${
                    closingCard ? "modal-main-leftClose" : " "
                  }`}
                >
                  <div className="modal-main-left-btn">
                    <CustomButton
                      color="light"
                      style={{ height: "50px", width: "140px" }}
                    >
                      Premium
                    </CustomButton>
                    <div className="pricingcard-price">
                      {t(item.price ?? "")}
                      {item.price_duration ? (
                        <span>{t(item.price_duration)}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="modal-main-left-input">
                    <Form.Item rules={[{ required: true, message: "Card*" }]}>
                      <div className="modal-main-left-input-card">
                        <h3>Card*</h3>
                        <MaskedInput
                          style={{ backgroundColor: "#313A47", color: "white" }}
                          mask={"0000 0000 0000 0000"}
                          size="large"
                          color="white"
                          //placeholder={rules.hemis_login.message}
                        />
                      </div>

                      <div className="modal-main-left-input-date">
                        <h3>Expiration date*</h3>
                        <MaskedInput
                          style={{ backgroundColor: "#313A47", color: "white" }}
                          mask={"00 / 00"}
                          size="large"
                          color="white"
                          //placeholder={rules.hemis_login.message}
                          placeholder={"Date"}
                        />
                      </div>
                    </Form.Item>
                  </div>
                  <CustomButton
                    className="modal-main-btn"
                    color="light"
                    onClick={(openingSms)}
                    //onClick={openModal}
                  >
                    Next
                  </CustomButton>{" "}
                </div>

                <div className={`smsBox ${openSms ? "smsBox-close" : ""}`}>
                  <p className="modal-main-text">
                    Telefoningizga kelgan sms kodni kiriting
                  </p>
                  <MaskedInput
                    style={{
                      backgroundColor: "#313A47",
                      color: "white",
                      width: "100px",
                      marginTop: "5px",
                    }}
                    mask={"0 0 0 0"}
                    size="large"
                    color="white"
                    placeholder={"Sms code"}
                  />

                  <CustomButton
                    className="modal-main-btns"
                    color="light"
                    onClick={closeModal}
                  >
                    Submit
                  </CustomButton>
                </div>
              </div>
            </div>
          </CustomModal> */}
        </div>
      ) : (
        <CustomButton color="dark">Upgrade</CustomButton>
      )}
    </div>
  );
}

export default PricingCard;
