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

export type EventType = "showChat" | "chatHistory";

const ChatBox = () => {
  const params = useParams();
  const [messages, setMessages] = useState<IWidgetMessage[]>([]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sendQuestion, { isLoading, data }] = useSendChatWidgetMutation();
  const [extraLoading, setExtraLoading] = useState(false);

  useEffect(() => {
    initApp();
    // window.addEventListener("message", (e) => {
    //   handleEvent(e)
    // });

    // return () =>
    //   window.removeEventListener("message", (e) => {
    //     console.log("removed", e);
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (params?.projectId && messages.length) {
      const payload = { chatHistory: messages }
      emitEvent("chatHistory", payload);
    }
  }, [messages, params?.projectId]);

  useEffect(() => {
    if (data) {
      setMessages([...messages, { text: data?.message, sender: "assistant" }]);
      setInputValue("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const initApp = () => {
    const messages = window.parent?.localStorage.getItem("chatHistory_" + params?.projectId);
    if (messages) {
      const parsedMessages = JSON.parse(messages);
      if (parsedMessages.length) {
        setMessages(parsedMessages);
      }
    }

  }

  const sendInitialMessage = () => {
    setExtraLoading(true)
    setTimeout(() => {
      setMessages([...messages, { text: "Hello, how can I help you?", sender: "assistant" }]);
      setExtraLoading(false)
    }, 400);
  }

  const switchChatWindow = () => {
    if (!open && !messages.length) {
      sendInitialMessage();
    }

    emitEvent("showChat", { isOpen: !open });
    setOpen((val) => !val);
  };

  const emitEvent = (type: EventType, payload: any) => {
    const message = JSON.stringify({ type, payload });
    window.parent?.postMessage(message, "*"); // '*' can be replaced with a specific target origin for security
  };

  const sendApiQuestion = async () => {
    if (params?.projectId && inputValue.trim() !== "") {
      sendQuestion({ projectId: params?.projectId, question: inputValue });
      setMessages([...messages, { text: inputValue, sender: "user" }]);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "transparent",
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
          isLoading={isLoading || extraLoading}
        />
      )}
    </div>
  );
};

export default ChatBox;
