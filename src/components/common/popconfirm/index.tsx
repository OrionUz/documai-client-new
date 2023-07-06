import { ConfigProvider, Popconfirm } from "antd";
import { CustomPopconfirmProps } from "./type";

function CustomPopconfirm({ children, ...rest }: CustomPopconfirmProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            // fontSize: 16,
            // colorBgBase: "transparent",
            // colorIcon: "#ffffff",
            // colorBgContainer: "#353e4b",
            colorBgTextActive: "black",
            borderRadius: 8,
          },
        },
      }}
    >
      <Popconfirm {...rest}>{children}</Popconfirm>
    </ConfigProvider>
  );
}

export default CustomPopconfirm;
