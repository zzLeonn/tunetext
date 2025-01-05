import React from 'react';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => (
  <div className="bg-[#282828] group hover:bg-[#3E3E3E] transition-all duration-300 rounded-lg p-4 cursor-pointer">
    <img 
      src={image} 
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default PlaylistCard;