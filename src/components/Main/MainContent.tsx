import React from 'react';
import { Search } from 'lucide-react';
import UserMenu from '../Layout/UserMenu';
import LyricsDisplay from './LyricsDisplay';

const MainContent = () => {
  // Mock data - replace with actual data from Spotify API
  const mockLyrics = [
    "When I was younger I saw",
    "My daddy cry and curse at the wind",
    "He broke his own heart and I watched",
    "As he tried to reassemble it",
    "And my momma swore",
    "That she would never let herself forget",
    "And that was the day that I promised",
    "I'd never sing of love if it does not exist"
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-[#121212] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[#121212]">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for songs, artists, or lyrics..."
            className="w-full pl-10 pr-4 py-2 bg-[#282828] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>
        <UserMenu />
      </div>

      {/* Lyrics Display */}
      <div className="flex-1 overflow-hidden">
        <LyricsDisplay
          lyrics={mockLyrics}
          currentLine={2}
          isPlaying={true}
          currentTime={45}
          duration={180}
          songInfo={{
            title: "The Only Exception",
            artist: "Paramore",
            albumArt: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=300&h=300&fit=crop"
          }}
        />
      </div>
    </div>
  );
};

export default MainContent;