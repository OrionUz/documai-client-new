import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSendChatWidgetMutation } from "src/app/services/chat";
import ChatIcon from "../components/ChatIcon";
import ChatWindow from "../components/ChatWindow";
import "../widget.scss";

export interface IWidgetMessage {
  text: string;
  sender: "user" | "assistant";
}

export const WIDGET_MESSAGES = "DOCUM_AI_WIDGET_MESSAGES";
export const defaultMessages = localStorage.getItem(WIDGET_MESSAGES);

export type EventType = "showChat" | "chatHistory";

const ChatBox = () => {
  const params = useParams();
  const [messages, setMessages] = useState<IWidgetMessage[]>(defaultMessages ? JSON.parse(defaultMessages) : []);
  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.addEventListener("message", (e) => {
      // const { type, payload } = JSON.parse(e.data);
      // if (type === "chatbotLoaded") {
      //   console.log("chatbotLoaded", payload);
      //   setMessages(payload.chatHistory);
      // }
    });

    return () =>
      window.removeEventListener("message", (e) => {
        console.log("removed", e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (params?.projectId) {
      emitEvent("chatHistory", { chatHistory: messages });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

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
      setMessages([...messages, { text: inputValue, sender: "user" }]);
    }
  };

  useEffect(() => {
    if (data) {
      setMessages([...messages, { text: data?.message, sender: "assistant" }]);
      localStorage.setItem(
        WIDGET_MESSAGES,
        JSON.stringify([...messages, { text: data?.message, sender: "assistant" }])
      );
      setInputValue("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ChatIcon onClick={switchChatWindow} />
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
