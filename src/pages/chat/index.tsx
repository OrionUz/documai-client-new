import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { chatMessages } from "./const";
import ChatMessage from "./components/ChatMessage";

function ChatPage() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const endingRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`chat ${!userId ? "display_center" : ""}`}>
      {userId ? (
        <>
          {chatMessages.map((item, index) => {
            return (
              <div key={index + "message"} className="chat-message">
                <ChatMessage text={item.text} isUser={item.isUser} />
              </div>
            );
          })}
          <input ref={endingRef} className="chat-message-ref" />
        </>
      ) : (
        <div className="chat-nodata">
          <p>Select a user to see messaging</p>
        </div>
      )}
    </div>
  );
}

export default ChatPage;
