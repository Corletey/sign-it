//src/pages/dashboard/components/messages/components/chatWindow.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const ChatWindow = ({ messages, currentChat, sendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === currentChat ? 'text-left' : 'text-right'
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === currentChat
                  ? 'bg-gray-300'
                  : 'bg-[#065535] text-white'
              }`}
            >
              {message.content}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(message.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-l-md"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-[#065535] text-white p-2 rounded-r-md"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;