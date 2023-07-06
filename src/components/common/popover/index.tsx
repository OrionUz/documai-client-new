import { ConfigProvider, Popover, Select } from "antd";
import { CustomPopoverProps } from "./type";

function CustomPopover({ children, ...rest }: CustomPopoverProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBgTextActive: "white",
            borderRadius: 8,
          },
        },
      }}
    >
      <Popover {...rest}>{children}</Popover>
    </ConfigProvider>
  );
}

export default CustomPopover;
