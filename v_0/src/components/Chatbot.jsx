import React, { useState } from "react";
import UserMsg from "./UserMsg";
import BotMsg from "./BotMsg";
import Header from "./CBHeader";

function ChatBot(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Create a new message object and add it to the messages array
      const newMessageObj = { text: newMessage, isUser: true };
      setMessages([...messages, newMessageObj]);

      // You can send the user message to your chatbot backend for processing here

      // Clear the input field
      setNewMessage("");
    }
  };

  return (
    <div className="chatBot">
      <Header />
      <div className="chat_interface" id="chatInterface">
        <BotMsg msg="Hello! I am bharathi, i'm here to assist you" />
        {messages.map((message, index) => {
          if (message.isUser) {
            return <UserMsg key={index} msg={message.text} />;
          } else {
            return <BotMsg key={index} msg={message.text} />;
          }
        })}
      </div>
      <div className="cFooter">
        <input
          type="text"
          id="ip"
          placeholder="Enter query here ....."
          onChange={handleInputChange}
          value={newMessage} // Make sure to set the input value to newMessage
        />
        <button onClick={handleSendMessage}>
          <span>Send</span>
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
