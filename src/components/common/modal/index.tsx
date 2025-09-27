import { ConfigProvider, Modal } from "antd";
import { CustomModalProps } from "./type";

function CustomModal({ children, ...rest }: CustomModalProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            borderRadius: 24,
            colorTextBase: "#fff",
            padding: 64,
          },
        },
      }}
    >
      <Modal footer={null} {...rest}>
        {children}
      </Modal>
    </ConfigProvider>
  );
}

export default CustomModal;
