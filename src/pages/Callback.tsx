import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { SPOTIFY_CONFIG } from '../config/spotify';

const Callback: React.FC = () => {
  const navigate = useNavigate();
  const setTokens = useAuthStore((state) => state.setTokens);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const verifier = localStorage.getItem('code_verifier');

      if (!code) {
        setError('No code found in URL parameters');
        return;
      }

      if (!verifier) {
        setError('No code verifier found in local storage');
        return;
      }

      const tokenRequestBody = {
        client_id: SPOTIFY_CONFIG.clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: SPOTIFY_CONFIG.redirectUri,
        code_verifier: verifier,
      };

      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(tokenRequestBody),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error_description || errorData.error || 'Failed to fetch access token');
        }

        const data = await response.json();
        
        setTokens({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresIn: data.expires_in,
        });

        localStorage.removeItem('code_verifier');
        navigate('/dashboard');
      } catch (error) {
        console.error('Authentication error:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    };

    getAccessToken();
  }, [navigate, setTokens]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white bg-red-600 p-4 rounded">
          Error: {error}. Please try logging in again.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-white">Connecting to Spotify...</div>
    </div>
  );
};

export default Callback;

