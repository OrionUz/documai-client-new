function PricingInfo() {
  return <div>salom</div>;
  /*<div className="custom-modal">
      <div className="custom-modal-header pricing-modal-header">
        <h2>Payment info</h2>
        <LockIcon />
      </div>
      <div className="custom-modal-content">
        <div className="pricing">
          <div className="pricing-info">
            <CustomButton
              color="light"
              style={{ height: "50px", width: "140px" }}
            >
              {t(cardInfo?.type)}
            </CustomButton>
            <div className="pricingcard-price">
              {t(cardInfo?.price)}
              {!!cardInfo?.price_duration && (
                <span>{t(cardInfo.price_duration)}</span>
              )}
            </div>
          </div>

          <Form
            layout="vertical"
            form={form}
            className="pricing-form"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="cardNumber"
              label="Card*"
              rules={[{ required: true, message: "Enter card number" }]}
            >
              <MaskedInput
                style={{ backgroundColor: "#313A47", color: "white" }}
                mask={"0000 0000 0000 0000"}
                color="white"
              />
            </Form.Item>

            <Form.Item
              name="expireDate"
              label="Expiration date*"
              rules={[{ required: true, message: "Enter expiration date" }]}
            >
              <MaskedInput
                style={{ backgroundColor: "#313A47", color: "white" }}
                mask={"00 / 00"}
                color="white"
              />
            </Form.Item>

            <div className="custom-modal-buttons">
              <CustomButton color="light" type="submit">
                Next
              </CustomButton>
            </div>
          </Form>
        </div>
      </div>
      <PricingModal />
              </div>*/
}

export default PricingInfo;
