// src/pages/dashboard/components/messages/components/MobileMessageApp.jsx
import React, { useState, useEffect } from 'react';
import UserList from './userList';
import ChatWindow from './chatWindow';

const MobileMessageApp = ({ users, currentChat, setCurrentChat, messages, sendMessage }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {!showChat ? (
        <UserList
          users={users}
          setCurrentChat={(userId) => {
            setCurrentChat(userId);
            setShowChat(true);
          }}
          currentChat={currentChat}
        />
      ) : (
        <ChatWindow
          messages={messages}
          currentChat={currentChat}
          sendMessage={sendMessage}
          onBack={() => setShowChat(false)}
        />
      )}
    </div>
  );
};

export default MobileMessageApp;