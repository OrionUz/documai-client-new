import { ConfigProvider, Input } from "antd";
import { CustomTextAreaProps } from "./type";

function CustomTextArea({ ...rest }: CustomTextAreaProps) {
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
      <TextArea {...rest} />
    </ConfigProvider>
  );
}

export default CustomTextArea;
