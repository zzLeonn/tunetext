import React from 'react';
import { Volume2 } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (value: number) => void;
}

const VolumeControl = ({ volume, onVolumeChange }: VolumeControlProps) => (
  <div className="flex items-center justify-end space-x-4">
    <Volume2 className="w-5 h-5 text-gray-400" />
    <div className="w-24 h-1 bg-gray-600 rounded-full">
      <div 
        className="h-full bg-gray-400 rounded-full hover:bg-[#1DB954] cursor-pointer"
        style={{ width: `${volume}%` }}
      />
    </div>
  </div>
);

export default VolumeControl;