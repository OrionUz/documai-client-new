import { ConfigProvider, Drawer } from "antd";
import { CustomDrawerProps } from "./type";

function CustomDrawer({ children, ...rest }: CustomDrawerProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            // fontSize: 16,
            // colorTextPlaceholder: "#ffffff50",
            // colorBgContainer: "#353e4b",
            borderRadius: 30,
          },
        },
      }}
    >
      <Drawer {...rest}>{children}</Drawer>
    </ConfigProvider>
  );
}

export default CustomDrawer;
