import { ConfigProvider, Input } from "antd";
import { CustomInputProps } from "./type";

function CustomInput({ ...rest }: CustomInputProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            fontSize: 16,
            colorTextPlaceholder: "#ffffff50",
            colorBgContainer: "#353e4b",
            borderRadius: 16,
          },
        },
      }}
    >
      <Input {...rest} />
    </ConfigProvider>
  );
}

export default CustomInput;
