import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatWindow from "../components/ChatWindow";
import ChatIcon from "../components/ChatIcon";
import { useSendChatWidgetMutation } from "src/app/services/chat";
import "./chat.scss";

export interface IWidgetMessage {
  text: string;
  sender: "user" | "assistant";
}

export type EventType = "showChat";

const ChatBox = () => {
  const params = useParams();
  const [messages, setMessages] = useState<IWidgetMessage[]>([]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.addEventListener("message", (e) => {});

    return () =>
      window.removeEventListener("message", (e) => {
        console.log("removed", e);
      });
  }, []);

  const switchChatWindow = () => {
    if (!open && !messages.length) {
      setMessages([...messages, { text: "Hello, how can I help you?", sender: "assistant" }]);
    }
    emitEvent("showChat", { isOpen: !open });
    setOpen((val) => !val);
  };

  const emitEvent = (type: EventType, payload: any) => {
    const message = JSON.stringify({ type, payload });
    window.parent?.postMessage(message, "*"); // '*' can be replaced with a specific target origin for security
  };

  const [sendQuestion, { isLoading, data }] = useSendChatWidgetMutation();
  const sendApiQuestion = async () => {
    if (params?.projectId && inputValue.trim() !== "") {
      sendQuestion({ projectId: params?.projectId, question: inputValue });
    }
  };

  useEffect(() => {
    if (data) {
      setMessages([...messages, { text: data?.message, sender: "assistant" }]);
      setInputValue("");
    }
  }, [data]);

  // console.log('params?.projectId', params?.projectId)
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {!open && <ChatIcon onClick={switchChatWindow} />}
      {open && (
        <ChatWindow
          inputValue={inputValue}
          messages={messages}
          onChange={setInputValue}
          sendMessage={sendApiQuestion}
          switchChatWindow={switchChatWindow}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default ChatBox;
