import CustomMarkdown from "src/components/common/markdown";
import { ChatMessageProps } from "../type";

function ChatMessage({ text, isUser, typist, loading }: ChatMessageProps) {
  return (
    <>
      {/* {typist ? (
        <Typist
          stdTypingDelay={0}
          avgTypingDelay={18}
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: true,
            hideWhenDoneDelay: 250,
          }}
        >
          <div className={`chat-message-box ${isUser && "chat-message-user"}`}>{text.trim()}</div>
        </Typist>
      ) : ( */}
        <div className={`chat-message-box ${isUser && "chat-message-user"}`}>
          {loading ? <div className="dot-flashing"></div> : <CustomMarkdown text={text.trim()} aStyle={{ color: 'white', textDecoration: 'underline'}}/>}
        </div>
      {/* )} */}
    </>
  );
}

export default ChatMessage;
