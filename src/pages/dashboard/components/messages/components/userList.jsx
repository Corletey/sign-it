// src/pages/dashboard/components/messages/components/UserList.jsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const UserList = ({ users, setCurrentChat, currentChat }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 bg-[#065535] text-white">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 pl-8 border rounded-md text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-2 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${
              currentChat === user.id ? 'bg-gray-200' : ''
            }`}
            onClick={() => setCurrentChat(user.id)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">
                {user.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;