// src/pages/dashboard/components/messages/components/ChatWindow.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft } from 'lucide-react';

const ChatWindow = ({ messages, currentChat, sendMessage, onBack }) => {
  // ... (keep existing code)

  return (
    <div className="flex-1 flex flex-col">
      {onBack && (
        <div className="bg-[#065535] text-white p-4 flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold">{currentChat}</h2>
        </div>
      )}
      {/* ... (keep existing message display code) */}
    </div>
  );
};

export default ChatWindow;