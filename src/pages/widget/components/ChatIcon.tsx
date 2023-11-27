import { WechatOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const ChatIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <FloatButton
      icon={<WechatOutlined onClick={onClick} style={{ fontSize: 24, color: "blueviolet" }} />}
      shape="square"
      type="primary"
      style={{ right: 24 }}
      className="chat-float"
    />
  );
};

export default ChatIcon;
