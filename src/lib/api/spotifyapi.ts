
export async function searchSpotify(query: string) {
  const accessToken = localStorage.getItem('auth-storage');
  if (!accessToken) throw new Error('No access token');

  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track,artist`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch from Spotify');
  return response.json();
}