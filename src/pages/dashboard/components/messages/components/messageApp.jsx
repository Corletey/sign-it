// src/pages/dashboard/components/messages/components/MessageApp.jsx
import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import UserList from './userList';
import ChatWindow from './chatWindow';
import MobileMessageApp from './mobileMessageApp';

// const socket = io('http://my-backend-url');

const MessageApp = () => {
  const [users, setUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    socket.on('users', (updatedUsers) => {
      setUsers(updatedUsers);
    });

    socket.on('new_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('users');
      socket.off('new_message');
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('send_message', { recipient: currentChat, content: message });
  };

  if (isMobile) {
    return (
      <MobileMessageApp
        users={users}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        messages={messages}
        sendMessage={sendMessage}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <UserList
        users={users}
        setCurrentChat={setCurrentChat}
        currentChat={currentChat}
      />
      <ChatWindow
        messages={messages}
        currentChat={currentChat}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default MessageApp;