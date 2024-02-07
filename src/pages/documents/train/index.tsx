import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useLazyGetChatQuery,
  useSendChatQueryMutation,
} from "src/app/services/chat";
import { IMessage } from "src/app/services/chat/type";
import { MessageSendSvg } from "src/assets/svg";
import CustomInput from "src/components/common/input";
import ChatMessage from "src/pages/chat/components/ChatMessage";

function DocumentsTrainPage() {
  //Use search params
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  //Declaring ref and force focus to end of chat
  const endingRef = useRef<HTMLInputElement>(null);
  const forceFocusEnding = () => {
    endingRef && endingRef?.current?.focus();
  };

  //Get chat messages
  const [trigger, result] = useLazyGetChatQuery();
  const [messages, setMessages] = useState<Partial<IMessage>[]>([]);

  useEffect(() => {
    projectId && trigger(projectId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  useEffect(() => {
    result.data ? setMessages(result.data.messages) : setMessages([]);
    setTimeout(() => {
      forceFocusEnding();
    }, 100);
  }, [result.data]);

  //Send chat queries
  const [value, setValue] = useState<string | undefined>();
  const [activeTypist, setActiveTypist] = useState(false);
  const [sendChatQuery, { isLoading, isSuccess, isError, data: queryRes }] =
    useSendChatQueryMutation();

  useEffect(() => {
    let arr = messages;
    if (isSuccess && queryRes) {
      messages[messages.length - 1].response = queryRes.message;
      setMessages([...arr]);
      setActiveTypist(true);
    } else if (isError) {
      arr.unshift();
      setMessages([...arr]);
      setActiveTypist(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, queryRes]);

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = () => {
    if (projectId && value) {
      setValue(undefined);
      setMessages([...messages, { question: value }]);
      setTimeout(() => {
        forceFocusEnding();
      }, 500);

      //Send query
      sendChatQuery({ question: value, projectId });
    }
  };

  return (
    <div className="chat">
      <div className="chat-content">
        {messages?.map((item, index) => {
          return (
            <div key={index + "message"} className="chat-message">
              {item.question && <ChatMessage text={item.question} isUser />}
              {item.response && (
                <ChatMessage
                  text={item.response}
                  typist={messages.length === index + 1 && activeTypist}
                />
              )}
              {messages.length === index + 1 && !item.response && isLoading && (
                <ChatMessage text="" loading />
              )}
            </div>
          );
        })}
        <input ref={endingRef} className="chat-message-ref" />
      </div>

      <div className="chat-input">
        <CustomInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUpCapture={handleKeypress}
          placeholder="Write the something"
          size="large"
          suffix={<MessageSendSvg onClick={handleSend} color={value ? "#fff" : "#000"}/>}
        />
      </div>
    </div>
  );
}

export default DocumentsTrainPage;
