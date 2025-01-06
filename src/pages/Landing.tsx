import { useNavigate } from 'react-router-dom';
import { Music2, BarChart2, Users, TrendingUp, ArrowRight } from 'lucide-react';
import LoginButton from '../components/Auth/LoginButton';

const Landing = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Songs Analyzed', value: '1M+', icon: BarChart2 },
    { label: 'Daily Plays', value: '50K+', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Music2 className="w-8 h-8 text-spotify-green" />
          <span className="text-spotify-green text-2xl font-bold">TuneText</span>
        </div>
        <LoginButton />
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Music, Your Lyrics,<br />
            <span className="text-spotify-green">All in One Place</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
            Experience music like never before with real-time lyrics synchronization
            and powerful music analytics.
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-spotify-green text-black px-8 py-3 rounded-full font-bold hover:bg-[#1ed760] transition duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#282828] p-6 rounded-lg text-center hover:bg-[#3E3E3E] transition-colors"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-spotify-green" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#282828] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Real-Time Lyrics</h3>
            <p className="text-gray-400">
              Follow along with synchronized lyrics that highlight in real-time as your music plays.
            </p>
          </div>
          <div className="bg-[#282828] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Music Analytics</h3>
            <p className="text-gray-400">
              Get insights into your listening habits and discover new music based on your preferences.
            </p>
          </div>
          <div className="bg-[#282828] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Playlist Integration</h3>
            <p className="text-gray-400">
              Seamlessly integrate with your Spotify playlists and keep your music organized.
            </p>
          </div>
          <div className="bg-[#282828] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Social Features</h3>
            <p className="text-gray-400">
              Share your favorite lyrics and connect with other music lovers.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;