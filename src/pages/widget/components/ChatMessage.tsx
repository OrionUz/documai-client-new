import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  text?: string;
  isUser?: boolean;
  loading?: boolean;
  darkMode?: boolean;
}

function ChatMessage({ text, isUser, loading, darkMode }: Props) {
  const renderers = {
    a: (props: any) => {
      return <a {...props} target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? "#fff": isUser ? "#fff":"blue", textDecoration: 'underline', fontWeight: 'bold'}} />;
    },
    p: (props: any) => {
      return <p {...props} style={{ fontSize: 15, letterSpacing: 1.1 }} />;
    },
  };


  return (
    <div className="widget-message-row">
      <div
        className={`widget-message-box ${!!isUser ? "widget-message-user" : loading ? "widget-message-loading" : ""}`}
      >
        {loading ? (
          <div className="dot-flashing"></div>
        ) : text ? (
          <Markdown remarkPlugins={[remarkGfm]} components={renderers}>{text}</Markdown>
          // <div dangerouslySetInnerHTML={{ __html: markdown.trim() }} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
