type RadioButtonType = {
  title: string;
  value: string;
};
export interface RadioButtonProps {
  onChange?: (val: string) => void;
  defaultValue?: string;
  buttons: RadioButtonType[];
}
