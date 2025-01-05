import React from 'react';
import Logo from '../components/Layout/Logo';
import LoginButton from '../components/Auth/LoginButton';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="max-w-md w-full bg-[#282828] p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-6">
          Welcome to TuneText
        </h1>
        <p className="text-gray-400 mb-8">
          Connect with Spotify to start listening to your favorite music
        </p>
        <LoginButton />
      </div>
    </div>
  );
};

export default Login;