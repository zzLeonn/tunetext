import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

const PlayerControls = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center space-x-6">
      <button className="text-gray-400 hover:text-white transition duration-300">
        <Shuffle className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-white transition duration-300">
        <SkipBack className="w-5 h-5" />
      </button>
      <button className="bg-white rounded-full p-2 hover:scale-105 transition duration-300">
        <Play className="w-6 h-6 text-black" fill="black" />
      </button>
      <button className="text-gray-400 hover:text-white transition duration-300">
        <SkipForward className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-white transition duration-300">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default PlayerControls;