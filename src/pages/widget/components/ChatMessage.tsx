interface Props {
  text?: string;
  isUser?: boolean;
  loading?: boolean;
}

function ChatMessage({ text, isUser, loading }: Props) {
  return (
    <div className="widget-message-row">
      <div
        className={`widget-message-box ${!!isUser ? "widget-message-user" : loading ? "widget-message-loading" : ""}`}
      >
        {loading ? (
          <div className="dot-flashing"></div>
        ) : text ? (
          <div dangerouslySetInnerHTML={{ __html: text.trim() }} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
