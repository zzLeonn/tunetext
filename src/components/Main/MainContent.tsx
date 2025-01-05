import React from 'react';
import { Clock } from 'lucide-react';
import PlaylistCard from './PlaylistCard';

const MainContent = () => {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Today's Top Hits",
      description: "The hottest tracks right now",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Discover Weekly",
      description: "Your weekly mix of fresh music",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-[#121212] overflow-y-auto p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">Good afternoon</h1>
        <div className="grid grid-cols-3 gap-4">
          {featuredPlaylists.map(playlist => (
            <PlaylistCard 
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              image={playlist.image}
            />
          ))}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">Recently Played</h2>
        <div className="bg-[#282828] rounded-lg">
          <div className="px-6 py-4 border-b border-gray-800">
            <div className="grid grid-cols-12 text-gray-400 text-sm">
              <div className="col-span-1">#</div>
              <div className="col-span-5">TITLE</div>
              <div className="col-span-4">ALBUM</div>
              <div className="col-span-2 flex justify-end">
                <Clock className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;