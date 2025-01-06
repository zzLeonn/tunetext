import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, BookMarked, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const clearTokens = useAuthStore((state) => state.clearTokens);

  const handleLogout = () => {
    clearTokens();
    navigate('/login');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-800 transition-colors"
      >
        <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-black" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center space-x-2"
              role="menuitem"
            >
              <User className="w-4 h-4" />
              <span>View Profile</span>
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center space-x-2"
              role="menuitem"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center space-x-2"
              role="menuitem"
            >
              <BookMarked className="w-4 h-4" />
              <span>Saved Lyrics</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center space-x-2"
              role="menuitem"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;