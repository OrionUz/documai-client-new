import type { InputRef } from "antd";
import { ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRef } from "react";
// import { useVerifyClickTokenMutation } from "src/app/services/payment";
import CustomButton from "src/components/common/button";

interface ProviderProps {
  children: React.ReactNode;
}

const CustomConfigProvider = ({ children }: ProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "#313A47",
            colorBorder: "#77727D",
            colorTextPlaceholder: "#fff",
            colorText: "#fff",
            controlHeight: 72,
            fontSize: 36,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

function PricingSms() {
  const [form] = useForm();
  const number1 = useRef<InputRef>(null);
  const number2 = useRef<InputRef>(null);
  const number3 = useRef<InputRef>(null);
  const number4 = useRef<InputRef>(null);
  const number5 = useRef<InputRef>(null);
  // const [verifyClickToken, { data, isSuccess, isLoading }] = useVerifyClickTokenMutation();

  const onFinish = (values: any) => {
    // sendSMS({
    //   smsCode: Object.values(values).join(""),
    // }).then((res: any) => {
    //   message.success(res?.data?.message);
    //   setSecureCode(res?.data?.secure_code);
    //   setStep("createpassword");
    // });
  };

  return (
    <div className="custom-modal pricing-sms">
      <div className="custom-modal-header">
        <p>
          Please wait We send the code to the <span>+998 90 *** ** 35!</span>
        </p>
      </div>
      <div className="custom-modal-content">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className="pricing-sms-box">
            <Form.Item name="number1" rules={[{ required: true, message: "" }]}>
              <CustomConfigProvider>
                <Input
                  maxLength={1}
                  ref={number1}
                  onChange={({ target }) => {
                    if (target.value) {
                      number2.current?.focus();
                      form.setFieldValue("number1", target.value);
                    } else {
                      number1.current?.focus();
                      form.setFieldValue("number1", "");
                    }
                  }}
                />
              </CustomConfigProvider>
            </Form.Item>
            <Form.Item name="number2" rules={[{ required: true, message: "" }]}>
              <CustomConfigProvider>
                <Input
                  maxLength={1}
                  ref={number2}
                  onChange={({ target }) => {
                    if (target.value) {
                      number3.current?.focus();
                      form.setFieldValue("number2", target.value);
                    } else {
                      number1.current?.focus();
                      form.setFieldValue("number2", "");
                    }
                  }}
                />
              </CustomConfigProvider>
            </Form.Item>
            <Form.Item name="number3" rules={[{ required: true, message: "" }]}>
              <CustomConfigProvider>
                <Input
                  maxLength={1}
                  ref={number3}
                  onChange={({ target }) => {
                    if (target.value) {
                      number4.current?.focus();
                      form.setFieldValue("number3", target.value);
                    } else {
                      number2.current?.focus();
                      form.setFieldValue("number3", "");
                    }
                  }}
                />
              </CustomConfigProvider>
            </Form.Item>
            <Form.Item name="number4" rules={[{ required: true, message: "" }]}>
              <CustomConfigProvider>
                <Input
                  maxLength={1}
                  ref={number4}
                  onChange={({ target }) => {
                    if (target.value) {
                      number5.current?.focus();
                      form.setFieldValue("number4", target.value);
                    } else {
                      number3.current?.focus();
                      form.setFieldValue("number4", "");
                    }
                  }}
                />
              </CustomConfigProvider>
            </Form.Item>
            <Form.Item name="number5" rules={[{ required: true, message: "" }]}>
              <CustomConfigProvider>
                <Input
                  maxLength={1}
                  ref={number5}
                  onChange={({ target }) => {
                    if (target.value) {
                      number5.current?.focus();
                      form.setFieldValue("number5", target.value);
                    } else {
                      number4.current?.focus();
                      form.setFieldValue("number5", "");
                    }
                  }}
                />
              </CustomConfigProvider>
            </Form.Item>
          </div>

          <div className="custom-modal-buttons">
            <CustomButton color="light" type="submit">
              Confirm
            </CustomButton>
          </div>
        </Form>

        {/* <p className="login__bottomInfo">
            Если у вас есть аккаунт пожалуйста нажмите на? <span onClick={() => setStep("signin")}>Log in</span>
          </p> */}
      </div>
    </div>
  );
}

export default PricingSms;
