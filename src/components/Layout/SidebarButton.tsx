import React from 'react';

interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SidebarButton = ({ icon, label, onClick }: SidebarButtonProps) => (
  <button 
    onClick={onClick}
    className="flex items-center text-gray-400 hover:text-white transition duration-300 w-full"
  >
    <div className="w-6 h-6 mr-4">{icon}</div>
    <span>{label}</span>
  </button>
);

export default SidebarButton;