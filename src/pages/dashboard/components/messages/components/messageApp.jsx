//src/pages/dashboard/components/messages/components/messageApp.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import UserList from './userList';
import ChatWindow from './chatWindow';

const socket = io('http://my-backend-url');

const MessageApp = () => {
  const [users, setUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for updated user list
    socket.on('users', (updatedUsers) => {
      setUsers(updatedUsers);
    });

    // Listen for new messages
    socket.on('new_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up on unmount
    return () => {
      socket.off('users');
      socket.off('new_message');
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('send_message', { recipient: currentChat, content: message });
  };

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