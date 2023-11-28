import { Input } from "antd";
import { useRef } from "react";
import { CloseIcon, MessageSendSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import { IWidgetMessage } from "../[id]";
import ChatMessage from "./ChatMessage";
import DarkModeSwitch from "./DarkModeSwitch";

interface IProps {
  messages: IWidgetMessage[];
  inputValue: string;
  isLoading: boolean;
  onChange: (text: string) => void;
  sendMessage: () => void;
  switchChatWindow: () => void;
}

const ChatWindow = ({ messages, inputValue, onChange, sendMessage, switchChatWindow, isLoading }: IProps) => {
  //Declaring ref and force focus to end of chat
  const endingRef = useRef<HTMLInputElement>(null);
  const forceFocusEnding = () => {
    endingRef && endingRef?.current?.focus();
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      sendMessage();
      forceFocusEnding();
    }
  };

  return (
    <div className={`widget`}>
      <div className="widget-header">
        <div className="widget-header-user">
          <img
            className="widget-header-user-avatar"
            src={require("src/assets/img/logo_icon.png")}
            alt="error logo icon"
          />
          <div className="widget-header-user-info">
            <div className="widget-header-user-name">Docum AI</div>
            <div className="widget-header-user-status">Online</div>
          </div>
        </div>
        <div className="widget-header-right">
          <DarkModeSwitch />
          <CloseIcon onClick={switchChatWindow} />
        </div>
      </div>
      <div className="widget-content">
        {messages?.map((item, index) => {
          return (
            <div key={index + "message"} className="widget-message">
              <ChatMessage text={item.text} isUser={item.sender === "user"} />
            </div>
          );
        })}
        {isLoading && (
          <div className="widget-message">
            <ChatMessage loading />
          </div>
        )}
        <input ref={endingRef} className="widget-message-ref" />
      </div>

      <div className="widget-input">
        <Input
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          onKeyUpCapture={handleKeypress}
          placeholder="O'zingizni qiziqtirgan savolni yozing"
          size="large"
          disabled={isLoading}
        />
        <CustomButton
          onClick={() => {
            sendMessage();
            forceFocusEnding();
          }}
          icon={<MessageSendSvg />}
          loading={isLoading}
          className={`widget-input-button ${inputValue.trim() === "" ? "widget-input-button-disabled" : ""}`}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
