import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useLazyGetProjetUserMessagesQuery } from "src/app/services/projects";
import ChatMessage from "./components/ChatMessage";
import { useTypedSelector } from "src/app/store";

function ChatPage() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const projectId = searchParams.get("projectId");

  const endingRef = useRef<HTMLInputElement>(null);

  const [trigger, result] = useLazyGetProjetUserMessagesQuery();

  const { data } = result;

  const projects = useTypedSelector((state) => state.project.projects);
  const botId = projects.find((el) => String(el.id) === projectId)?.chatbotId;

  useEffect(() => {
    userId && botId && trigger({ userId, botId }, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <div
      className={`chat ${!userId ? "display_center" : ""}`}
      style={!userId ? { justifyContent: "center" } : {}}
    >
      {userId ? (
        <>
          <div className="chat-content">
            {data?.chats.map((item, index) => {
              return (
                <div key={index + "message"} className="chat-message">
                  {item.question && <ChatMessage text={item.question} isUser />}
                  {item.response && (
                    <ChatMessage text={item.response} isUser={false} />
                  )}
                </div>
              );
            })}
            <input ref={endingRef} className="chat-message-ref" />
          </div>
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
