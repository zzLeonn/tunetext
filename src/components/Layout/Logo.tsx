import React from 'react';
import { Music2 } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <Music2 className="w-8 h-8 text-[#1DB954]" />
    <span className="text-[#1DB954] text-2xl font-bold">TuneText</span>
  </div>
);

export default Logo;