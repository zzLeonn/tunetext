import React, { useState } from 'react';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

const MusicPlayer = () => {
  const [volume, setVolume] = useState(66);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#282828] h-24 px-4 flex items-center justify-between border-t border-gray-900">
      {/* Track Info */}
      <div className="flex items-center w-1/4">
        <img 
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=150&h=150&fit=crop" 
          alt="Album Art"
          className="w-14 h-14 rounded"
        />
        <div className="ml-4">
          <div className="text-white text-sm">Track Name</div>
          <div className="text-gray-400 text-xs">Artist Name</div>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-2/4 space-y-2">
        <PlayerControls />
        <ProgressBar current="0:00" total="3:45" progress={33} />
      </div>

      {/* Volume Control */}
      <div className="w-1/4">
        <VolumeControl volume={volume} onVolumeChange={setVolume} />
      </div>
    </div>
  );
};

export default MusicPlayer;