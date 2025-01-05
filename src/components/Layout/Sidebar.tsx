import React from 'react';
import { Home, Search, Library, Heart, Plus } from 'lucide-react';
import Logo from './Logo';
import SidebarLink from './SidebarLink';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#121212] h-screen flex flex-col p-6">
      <div className="mb-8">
        <Logo />
      </div>
      
      <nav className="space-y-4">
        <SidebarLink icon={<Home />} label="Home" href="#" />
        <SidebarLink icon={<Search />} label="Search" href="#" />
        <SidebarLink icon={<Library />} label="Your Library" href="#" />
      </nav>

      <div className="mt-8 space-y-4">
        <SidebarButton icon={<Plus />} label="Create Playlist" />
        <SidebarButton icon={<Heart />} label="Liked Songs" />
      </div>

      <div className="mt-4 border-t border-gray-800 pt-4">
        <div className="text-xs text-gray-400">Your Playlists</div>
        <div className="mt-2 space-y-2">
          <SidebarLink label="My Playlist #1" href="#" />
          <SidebarLink label="Favorite Tracks" href="#" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;