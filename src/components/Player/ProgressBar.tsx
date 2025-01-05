import React from 'react';

interface ProgressBarProps {
  current: string;
  total: string;
  progress: number;
}

const ProgressBar = ({ current, total, progress }: ProgressBarProps) => (
  <div className="w-full flex items-center space-x-2">
    <span className="text-xs text-gray-400">{current}</span>
    <div className="flex-1 h-1 bg-gray-600 rounded-full">
      <div 
        className="h-full bg-[#1DB954] rounded-full hover:bg-[#1ed760] cursor-pointer"
        style={{ width: `${progress}%` }}
      />
    </div>
    <span className="text-xs text-gray-400">{total}</span>
  </div>
);

export default ProgressBar;