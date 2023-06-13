import { ChatMessageProps } from "../type";

function ChatMessage({ text, isUser }: ChatMessageProps) {
  return (
    <div className={`chat-message-box ${isUser && "chat-message-user"}`}>
      {text.trim()}
    </div>
  );
}

export default ChatMessage;
