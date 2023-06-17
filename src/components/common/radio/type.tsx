type RadioButtonType = {
  title: string;
  value: string;
  disabled?: boolean;
};
export interface RadioButtonProps {
  onChange?: (val: string) => void;
  defaultValue?: string;
  buttons: RadioButtonType[];
}
