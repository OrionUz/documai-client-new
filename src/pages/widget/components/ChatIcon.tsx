import { FloatButton } from "antd";

const ChatIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <FloatButton
      icon={
        <div className="widget-icon">
          <img src={require("src/assets/img/logo_icon.png")} alt="error logo icon" />
        </div>
      }
      onClick={onClick}
      type="primary"
      style={{ right: 0, bottom: 0, width: 60, height: 60 }}
      className="widget-float"
    />
  );
};

export default ChatIcon;
