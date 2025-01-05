import React from 'react';
import Sidebar from './Sidebar';
import MainContent from '../Main/MainContent';
import MusicPlayer from '../Player/MusicPlayer';

const Layout = () => {
  return (
    <div className="h-screen bg-[#121212] text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;