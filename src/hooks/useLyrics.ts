import { useState, useCallback } from 'react';
import { searchGenius } from '../lib/api/genius';
import { searchSpotify } from '../lib/api/spotifyapi';

export function useLyrics() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLyrics = useCallback(async (songTitle: string, artist: string) => {
    setLoading(true);
    setError(null);

    try {
      // Try Genius first
      const geniusResult = await searchGenius(songTitle, artist);
      if (geniusResult?.response?.hits?.length > 0) {
        return geniusResult.response.hits[0].result;
      }

      // Fallback to Spotify metadata
      const spotifyData = await searchSpotify(`${songTitle} ${artist}`);
      if (spotifyData?.tracks?.items?.length > 0) {
        // Use Spotify data to enhance search
        return spotifyData.tracks.items[0];
      }

      throw new Error('No lyrics found');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch lyrics');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchLyrics, loading, error };
}