import { Input } from "antd";
import { useRef } from "react";
import { CloseIcon, MessageSendSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import { IWidgetMessage } from "../[id]";
import ChatMessage from "./ChatMessage";

interface IProps {
  messages: IWidgetMessage[];
  inputValue: string;
  onChange: (text: string) => void;
  sendMessage: () => void;
  switchChatWindow: () => void;
  isLoading: boolean;
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
    <div className={`chat`}>
      <div className="chat-header">
        <CloseIcon onClick={switchChatWindow} />
      </div>
      <div className="chat-content">
        {messages?.map((item, index) => {
          return (
            <div key={index + "message"} className="chat-message">
              {item.sender === "user" && <ChatMessage text={item.text} isUser />}
              {item.sender === "assistant" && <ChatMessage response={item.text} />}
            </div>
          );
        })}
        {isLoading && (
          <div className="chat-message">
            <ChatMessage loading />
          </div>
        )}
        <input ref={endingRef} className="chat-message-ref" />
      </div>

      <div className="chat-input">
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
          disabled={!inputValue}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
