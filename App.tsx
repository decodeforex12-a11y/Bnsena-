import React, { useState, useEffect } from 'react';
import { 
  TelegramIcon, 
  CheckIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  UsersIcon
} from './components/icons';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white antialiased">
      {/* 1) HEADER SECTION */}
      <header className="bg-blue-700 text-center p-6 shadow-lg">
        <img
          src="https://picsum.photos/80"
          alt="Logo"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
        />
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            84,000+ Subscribers on Telegram
          </h1>
          <TelegramIcon className="w-8 h-8 text-blue-300" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl flex flex-col items-center text-center">
        {/* 2) SOCIAL PROOF SECTION */}
        <div className="bg-slate-800 rounded-xl p-5 w-full max-w-md mx-auto mb-10 shadow-lg border border-slate-700 text-left">
          {/* Top part: Avatar + Stats */}
          <div className="flex items-center gap-4 mb-4">
            {/* Avatar with gradient border */}
            <div className="flex-shrink-0 p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full">
               <img
                 src="https://i.imgur.com/r6p6e5W.png"
                 alt="Balkrushna Nale"
                 className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-slate-800"
               />
            </div>
            {/* Stats */}
            <div className="flex-grow flex justify-around text-center">
                <div>
                    <p className="font-bold text-lg">300</p>
                    <p className="text-sm text-slate-400">posts</p>
                </div>
                <div>
                    <p className="font-bold text-lg">10.8K</p>
                    <p className="text-sm text-slate-400">followers</p>
                </div>
                <div>
                    <p className="font-bold text-lg">2,015</p>
                    <p className="text-sm text-slate-400">following</p>
                </div>
            </div>
          </div>
    
          {/* Bio part */}
          <div>
            <h3 className="font-bold text-md">Balkrushna Nale | Investor</h3>
            <p className="text-slate-300 text-sm">Entrepreneur</p>
            <div className="mt-2 space-y-1 text-slate-300 text-sm leading-snug">
                <p>🇮🇳🇹🇭🇦🇪</p>
                <p>Fx Trader | Mentor 📈</p>
                <p>📊 Real Charts • Real Lessons</p>
                <p>💼 Discipline | Risk ... more</p>
                <a href="#" className="text-cyan-400 block truncate">🔗 wa.me/message/IDLRZMNFMIR7A1 and 1 more</a>
            </div>
          </div>
        </div>

        {/* 3) MAIN HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Join the <span className="text-blue-400">[Brand Name]</span> Forex Trade™ Telegram Group
        </h2>

        {/* 4) BENEFITS LIST */}
        <ul className="space-y-4 text-left mb-12 w-full max-w-lg mx-auto">
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
            <span className="text-slate-200 text-lg">Best Forex & Crypto Signals for Educational Purposes</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
            <span className="text-slate-200 text-lg">Market Analysis Based on Technical & Price Action</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
            <span className="text-slate-200 text-lg">Purely Educational – No Guaranteed Profits</span>
          </li>
        </ul>

        {/* WHAT YOU GET SECTION */}
        <section className="w-full max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Here's What You Get Inside:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {/* Item 1 */}
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-start space-x-4 h-full">
                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 rounded-full p-3 mt-1">
                        <ChartBarIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Daily Signals</h4>
                        <p className="text-slate-400 text-sm">Educational trade ideas for Forex & Crypto markets.</p>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-start space-x-4 h-full">
                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 rounded-full p-3 mt-1">
                        <MagnifyingGlassIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">In-Depth Analysis</h4>
                        <p className="text-slate-400 text-sm">Technical and price action analysis to help you learn.</p>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-start space-x-4 h-full">
                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 rounded-full p-3 mt-1">
                        <BookOpenIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Educational Content</h4>
                        <p className="text-slate-400 text-sm">Learn trading concepts, strategies, and risk management.</p>
                    </div>
                </div>
                {/* Item 4 */}
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-start space-x-4 h-full">
                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 rounded-full p-3 mt-1">
                        <UsersIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Community Support</h4>
                        <p className="text-slate-400 text-sm">Connect with fellow traders in our active community.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 5) PRIMARY CTA BUTTON */}
        <a
          href="#"
          className="bg-yellow-400 text-slate-900 font-bold text-xl md:text-2xl py-5 px-10 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 w-full max-w-md block"
        >
          Join FREE Telegram Channel
        </a>

        {/* 6) TRUST LINE BELOW CTA */}
        <p className="mt-4 text-slate-400 font-semibold">
          India’s Trusted Forex & Crypto Trading Community
        </p>

        {/* 7) URGENCY ELEMENT */}
        <div className="mt-6 bg-red-600/20 border border-red-500 text-red-400 font-bold py-2 px-6 rounded-lg">
          <p>Offer Ends in {formatTime(timeLeft)} Minutes</p>
        </div>

      </main>

      {/* 8) DISCLAIMER SECTION */}
      <section className="bg-slate-800 py-8 px-4 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-slate-400 leading-relaxed">
            This website is for educational purposes only. We do not provide financial, investment, or legal advice. Trading involves risk. Please do your own research.
          </p>
        </div>
      </section>

      {/* 9) FOOTER */}
      <footer className="bg-slate-900 py-4 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear() + 2} [Brand Name]. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;