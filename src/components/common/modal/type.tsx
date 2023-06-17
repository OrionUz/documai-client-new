export interface CustomModalProps {
  open: boolean;
  title?: string | JSX.Element;
  width?: number;
  onOk?: () => void;
  onCancel?: () => void;
  children?: string | JSX.Element;
}
