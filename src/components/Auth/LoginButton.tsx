import React from 'react';
import { SPOTIFY_CONFIG } from '../../config/spotifycfg';
import { generateCodeVerifier, generateCodeChallenge } from '../../lib/spotify';

const LoginButton: React.FC = () => {
  const handleLogin = async () => {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem('code_verifier', verifier);
    
    const params = new URLSearchParams({
      client_id: SPOTIFY_CONFIG.clientId,
      response_type: 'code',
      redirect_uri: SPOTIFY_CONFIG.redirectUri,
      code_challenge_method: 'S256',
      code_challenge: challenge,
      scope: SPOTIFY_CONFIG.scopes,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-[#1DB954] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1ed760] transition duration-300"
    >
      Connect with Spotify
    </button>
  );
};

export default LoginButton;