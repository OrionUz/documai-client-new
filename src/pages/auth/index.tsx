import { Button, Form, Input } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import CustomInput from "src/components/common/input";
import CustomModal from "src/components/common/modal";
import Header from "src/layout/main/header";
import "../../styles/auth/index.scss";
import useNewClient, { IAddProps } from "./useAdd";

function AuthPage(props: IAddProps) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { t } = useTranslation();

  // const [visible, setVisible] = useState(false);
  // const showModal = () => setVisible(true);
  // const closeModal = () => setVisible(false);

  const { form, visible, isLoading, onFinish, showModal, closeModal } =
    useNewClient(props);

  return (
    <div className="auth">
      <Header />
      <div className="blur_purple" />
      <div className="blur_red" />
      <div className="blur_blue" />
      <div className="auth-content">
        <div className="auth-content-modal">
          <CustomModal
            title="Add new client"
            open={visible}
            onCancel={closeModal}
            footer={null}
            width={650}
          >
            <div className="modal">
              <Form
                form={form}
                className="customform"
                onFinish={onFinish}
                layout={"vertical"}
                requiredMark={false}
              >
                <Form.Item
                  name="companyName"
                  label="Company name"
                  rules={[
                    { required: true, message: "Enter your company name" },
                  ]}
                  className="half"
                >
                  <CustomInput placeholder="Enter your company name" />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: "Enter your name" }]}
                  className="half"
                >
                  <CustomInput placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                  label="Telefon raqam"
                  name="phoneNumber"
                  rules={[
                    { required: true, message: "Telefon raqamni kiriting!" },
                    {
                      message: `Telefon raqamni to'liq kiriting!`,
                    },
                  ]}
                  className="half"
                >
                  <MaskedInput
                    addonBefore="+998"
                    className="auth-form-input half"
                    mask="(00)-000-00-00"
                    variant="borderless"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Enter your email"
                  className="half"
                >
                  <CustomInput placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  name="tgUsername"
                  label="Enter your telegram user name"
                  className="half"
                >
                  <CustomInput placeholder="Telegram username" />
                </Form.Item>

                <Form.Item
                  name="companyInfo"
                  label="Information about your company"
                  className="full"
                >
                  <Input.TextArea
                    rows={2}
                    placeholder="Company info"
                    variant={"filled"}
                  />
                </Form.Item>

                <Button htmlType="submit" loading={isLoading}>
                  Submit
                </Button>

                {/* <ModalFooter onCancel={closeModal} okLoading={isLoading} /> */}
              </Form>
            </div>
          </CustomModal>
        </div>
        <div className="auth-left">
          <div className="auth-left-content">
            <Outlet />
          </div>

          <div>
            <Button onClick={showModal}>Fill the form</Button>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-right-header">
            <h3>{path === "signin" ? t("sign.sign") : t("sign.signUp")}</h3>
            <h2>{t("sign.text")}</h2>
          </div>
          <div className="auth-right-img">
            <img
              src={require("src/assets/img/home/home.png")}
              alt="error home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
