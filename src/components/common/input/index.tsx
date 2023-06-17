import { ConfigProvider, Input } from "antd";
import { CustomInputProps } from "./type";

function CustomInput({ size, ...rest }: CustomInputProps) {
  const { TextArea } = Input;
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
      <Input {...rest} size={size} />
    </ConfigProvider>
  );
}

export default CustomInput;
