export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  isPublicProfile: boolean;
  preferences: {
    genres: string[];
    artists: string[];
    languages: string[];
  };
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  albumArt: string;
  url: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  coverImage: string;
  tracks: Track[];
  owner: string;
  isPublic: boolean;
}