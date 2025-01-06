import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Info } from 'lucide-react';

interface LyricsDisplayProps {
  lyrics?: string[];
  currentLine?: number;
  isPlaying?: boolean;
  currentTime?: number;
  duration?: number;
  songInfo?: {
    title: string;
    artist: string;
    albumArt: string;
  };
}

const LyricsDisplay = ({
  lyrics = [],
  currentLine = 0,
  isPlaying = false,
  currentTime = 0,
  duration = 0,
  songInfo = {
    title: "No song playing",
    artist: "Unknown Artist",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  }
}: LyricsDisplayProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const lyricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lyricsRef.current && currentLine > 0) {
      const lineElements = lyricsRef.current.children;
      if (lineElements[currentLine]) {
        lineElements[currentLine].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [currentLine]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <img
            src={songInfo.albumArt}
            alt={songInfo.title}
            className="w-16 h-16 rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">{songInfo.title}</h1>
            <p className="text-gray-400">{songInfo.artist}</p>
          </div>
        </div>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <Info className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        {showInfo ? (
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Song Information</h2>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-gray-500">Album:</span> Unknown Album</p>
                <p><span className="text-gray-500">Released:</span> Unknown Date</p>
                <p><span className="text-gray-500">Genre:</span> Unknown Genre</p>
              </div>
            </div>
          </div>
        ) : (
          <div
            ref={lyricsRef}
            className="space-y-6 text-center"
          >
            {lyrics.length > 0 ? (
              lyrics.map((line, index) => (
                <p
                  key={index}
                  className={`text-xl transition-all duration-300 ${
                    index === currentLine
                      ? 'text-white font-semibold scale-110'
                      : 'text-gray-400'
                  }`}
                >
                  {line}
                </p>
              ))
            ) : (
              <p className="text-gray-400 italic">No lyrics available</p>
            )}
          </div>
        )}
      </div>

      {/* Player Controls */}
      <div className="border-t border-gray-800 p-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="p-3 bg-spotify-green rounded-full hover:scale-105 transition-transform">
              {isPlaying ? (
                <Pause className="w-6 h-6 text-black" />
              ) : (
                <Play className="w-6 h-6 text-black" />
              )}
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          
          <div className="w-full max-w-2xl flex items-center space-x-3">
            <span className="text-xs text-gray-400">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 h-1 bg-gray-800 rounded-full">
              <div
                className="h-full bg-spotify-green rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default LyricsDisplay;