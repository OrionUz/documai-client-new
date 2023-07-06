import { ConfigProvider, Select } from "antd";
import { CustomSelectProps } from "./type";

function CustomSelect({ ...rest }: CustomSelectProps) {
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
      <Select {...rest} />
    </ConfigProvider>
  );
}

export default CustomSelect;
