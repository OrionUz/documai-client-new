import { ConfigProvider, Modal } from "antd";
import { CustomModalProps } from "./type";

function CustomModal({
  open,
  title,
  onOk,
  onCancel,
  width,
  children,
}: CustomModalProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            borderRadius: 24,
            colorTextBase: "#fff",
            padding: 0,
          },
        },
      }}
    >
      <Modal
        title={title}
        open={open}
        width={width}
        onOk={onOk}
        onCancel={onCancel}
        footer={null}
      >
        {children}
      </Modal>
    </ConfigProvider>
  );
}

export default CustomModal;
