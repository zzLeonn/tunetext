const GENIUS_API_BASE = 'https://api.genius.com';

export async function searchGenius(songTitle: string, artist: string) {
  try {
    const query = `${songTitle} ${artist}`;
    const response = await fetch(`${GENIUS_API_BASE}/search?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) throw new Error('Failed to fetch from Genius');
    return response.json();
  } catch (error) {
    console.error('Genius API error:', error);
    return null;
  }
}