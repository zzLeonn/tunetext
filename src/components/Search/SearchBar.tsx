import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 max-w-xl">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs, artists, or lyrics..."
        className="w-full pl-10 pr-4 py-2 bg-[#282828] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-spotify-green"
      />
    </form>
  );
};

export default SearchBar;