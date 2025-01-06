/* eslint-disable @typescript-eslint/no-explicit-any */
import { Play, Plus, Mic } from 'lucide-react';

interface SearchResultsProps {
  results: any[];
  onPlay: (track: any) => void;
  onAddToLibrary: (track: any) => void;
  onViewLyrics: (track: any) => void;
}

const SearchResults = ({ results, onPlay, onAddToLibrary, onViewLyrics }: SearchResultsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {results.map((track) => (
        <div key={track.id} className="bg-[#282828] p-4 rounded-lg hover:bg-[#3E3E3E] transition-colors">
          <img
            src={track.album?.images[0]?.url}
            alt={track.name}
            className="w-full aspect-square object-cover rounded-md mb-4"
          />
          <h3 className="text-white font-semibold mb-1">{track.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{track.artists[0].name}</p>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onPlay(track)}
              className="p-2 bg-spotify-green rounded-full hover:scale-105 transition-transform"
            >
              <Play className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={() => onAddToLibrary(track)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewLyrics(track)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;