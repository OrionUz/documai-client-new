import React, { useState } from "react";

const ChatWidget = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div className={`chat-widget ${isChatOpen ? "open" : ""}`}>
      <div className="chat-header">
        <h3>Chat Support</h3>
        <button className="close-chat" onClick={toggleChat}>
          X
        </button>
      </div>
      <div className="chat-messages"></div>
      <input type="text" placeholder="Type your message..." />
      <button>Send</button>
    </div>
  );
};

export default ChatWidget;
