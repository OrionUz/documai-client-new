import { Input } from "antd";
import { useEffect } from "react";
import { CloseIcon, MessageSendSvg } from "src/assets/svg";
import CustomButton from "src/components/common/button";
import { IWidgetMessage } from "../[id]";
import ChatMessage from "./ChatMessage";
import { defaultTheme, useProvider } from "./useProvider";
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
  const {
    endingRef, inputRef, darkMode, onMessageChange, changeWidgetTheme,
  } = useProvider()
  
  useEffect(() => {
    changeWidgetTheme(defaultTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onMessageChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      sendMessage();
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
          </div>
        </div>
        <div className="widget-header-right">
          <DarkModeSwitch darkMode={darkMode} changeWidgetTheme={changeWidgetTheme}/>
          <CloseIcon onClick={switchChatWindow} />
        </div>
      </div>
      <div className="widget-content">
        {messages?.map((item, index) => {
          return (
            <div key={index + "message"} className="widget-message">
              <ChatMessage text={item.text} isUser={item.sender === "user"} darkMode={darkMode}/>
            </div>
          );
        })}
        {isLoading && (
          <div className="widget-message">
            <ChatMessage loading />
          </div>
        )}
        <div style={{ float:"left", clear: "both", background:'red' }} ref={endingRef}>
        </div>
      </div>

      <div className="widget-input">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          onKeyUpCapture={handleKeypress}
          placeholder="Type your message here..."
          size="large"
          disabled={isLoading}
        />
        <CustomButton
          onClick={sendMessage}
          icon={<MessageSendSvg color={darkMode ? 'white': 'black'} />}
          loading={isLoading}
          className={`widget-input-button ${inputValue.trim() === "" ? "widget-input-button-disabled" : ""}`}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
