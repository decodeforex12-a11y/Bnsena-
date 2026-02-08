import React, { useState, useEffect } from 'react';
import { TelegramIcon, CheckIcon } from './components/icons';

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
        <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-auto mb-10 shadow-lg border border-slate-700">
          <div className="flex items-center space-x-4">
            <img
              src="https://picsum.photos/seed/trader/100"
              alt="Professional Forex Trader"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />
            <div className="text-left">
              <h2 className="text-xl font-bold text-white">
                Professional Forex Trader
              </h2>
              <p className="text-sm text-slate-300">
                7+ Years Experience | Forex & Crypto Markets
              </p>
            </div>
          </div>
        </div>

        {/* 3) MAIN HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Join the <span className="text-blue-400">[Brand Name]</span> Forex Trade™ Telegram Group
        </h2>

        {/* 4) BENEFITS LIST */}
        <ul className="space-y-4 text-left mb-8 w-full max-w-lg mx-auto">
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
