import CustomMarkdown from 'src/components/common/markdown';
import * as codeStyles from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  text?: string;
  isUser?: boolean;
  loading?: boolean;
  darkMode?: boolean;
}

function ChatMessage({ text, isUser, loading, darkMode }: Props) {
  return (
    <div className="widget-message-row">
      <div
        className={`widget-message-box ${!!isUser ? "widget-message-user" : loading ? "widget-message-loading" : ""}`}
      >
        {loading ? (
          <div className="dot-flashing"></div>
        ) : text ? (
          <CustomMarkdown text={text} 
            aStyle={{ color: darkMode ? "#fff": isUser ? "#fff":"blue", textDecoration: 'underline', fontWeight: 'bold'}}
            codeStyle={darkMode ? codeStyles.coldarkDark : codeStyles?.prism}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
