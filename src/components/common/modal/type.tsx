import { ModalProps } from "antd";

export interface CustomModalProps extends ModalProps {
  children?: string | JSX.Element;
}
