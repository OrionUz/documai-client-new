import { ConfigProvider, Popconfirm } from "antd";
import { CustomPopconfirmProps } from "./type";

function CustomPopconfirm({ children, ...rest }: CustomPopconfirmProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#212a37",
          colorText: "#000",
          colorBgBase: "#fff",
          colorBorder: "#717493",
        },
      }}
    >
      <Popconfirm {...rest}>{children}</Popconfirm>
    </ConfigProvider>
  );
}

export default CustomPopconfirm;
