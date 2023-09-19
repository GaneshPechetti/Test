import React, { useState } from 'react';
import ChatBot from './components/Chatbot';

function MainComponent() {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <div>
      <img src="bot_icon.png" alt="ChatBot Icon" onClick={toggleChatBot} />
      {showChatBot && <ChatBot />}
    </div>
  );
}

export default MainComponent;