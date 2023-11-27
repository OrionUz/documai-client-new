import { DiscordIcon } from "src/assets/svg";

interface Props {
  text?: string;
  response?: string;
  isUser?: boolean;
  loading?: boolean;
}

function ChatMessage({ text, response, isUser, loading }: Props) {
  return (
    <div className="chat-message-row">
      {!isUser && (
        <div className="chat-message-icon">
          <DiscordIcon />
        </div>
      )}

      <div className={`chat-message-box ${!!isUser ? "chat-message-user" : loading ? "chat-message-loading" : ""}`}>
        {loading ? (
          <div className="dot-flashing"></div>
        ) : text ? (
          <div dangerouslySetInnerHTML={{ __html: text.trim() }} />
        ) : (
          <div>{response}</div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
