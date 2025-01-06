export const SPOTIFY_CONFIG = {
  clientId: 'de2a3af0763641bc99ae37bf824efb7c',
  redirectUri: 'http://localhost:5173/callback',
  scopes: [
    'user-read-private',
    'user-read-email',
    'user-library-read',
    'user-library-modify',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'streaming'
  ].join(' ')
} as const;