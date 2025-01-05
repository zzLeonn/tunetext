import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { SPOTIFY_CONFIG } from '../config/spotify';

const Callback = () => {
  const navigate = useNavigate();
  const setTokens = useAuthStore((state) => state.setTokens);

  useEffect(() => {
    const getAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const verifier = localStorage.getItem('code_verifier');

      console.log('Auth Code:', code);
      console.log('Verifier:', verifier);

      if (!code || !verifier) {
        console.error('Missing code or verifier');
        navigate('/login');
        return;
      }

      const tokenRequestBody = {
        client_id: SPOTIFY_CONFIG.clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: SPOTIFY_CONFIG.redirectUri,
        code_verifier: verifier,
      };

      console.log('Token Request Body:', tokenRequestBody);

      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(tokenRequestBody),
        });

        const data = await response.json();
        console.log('Token Response:', data);
        
        if (response.ok) {
          setTokens({
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expiresIn: data.expires_in,
          });
          navigate('/');
        } else {
          throw new Error(data.error_description || data.error);
        }
      } catch (error) {
        console.error('Authentication error:', error);
        navigate('/login');
      }
    };

    getAccessToken();
  }, [navigate, setTokens]);

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-white">Connecting to Spotify...</div>
    </div>
  );
};

export default Callback;