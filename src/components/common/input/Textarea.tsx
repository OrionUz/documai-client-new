import { ConfigProvider, Input } from "antd";
import { CustomTextAreaProps } from "./type";

function CustomTextArea({ rows, placeholder }: CustomTextAreaProps) {
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
      <TextArea rows={rows} placeholder={placeholder} />
    </ConfigProvider>
  );
}

export default CustomTextArea;
