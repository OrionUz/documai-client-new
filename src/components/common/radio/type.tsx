import { SizeType } from "antd/es/config-provider/SizeContext";

type RadioButtonType = {
  title: string;
  value: string;
  disabled?: boolean;
};
export interface RadioButtonProps {
  onChange?: (val: string) => void;
  defaultValue?: string;
  size?: SizeType;
  buttons: RadioButtonType[];
}
