import { ConfigProvider, Radio } from "antd";
import { RadioButtonProps } from "./type";

function RadioButton({ defaultValue, onChange, buttons, size }: RadioButtonProps) {
  return (
    <div className="radio-button">
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              fontSize: 16,
              paddingContentHorizontal: 35,
              colorBorder: "none",
              colorTextDisabled: "#ffffff70",
              borderRadius: 4,
            },
          },
        }}
      >
        <Radio.Group defaultValue={defaultValue} size={size}>
          {buttons.map((item) => {
            return (
              <Radio.Button
                key={item.value}
                value={item.value}
                disabled={item.disabled}
                onClick={() => onChange?.(item.value)}
              >
                {item.title}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </ConfigProvider>
    </div>
  );
}

export default RadioButton;
