"use client"
import { useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';

const Home = () => {
  useEffect(() => {
    if (typeof window.Telegram !== 'undefined') {
      const tg = window.Telegram.WebApp;
      tg.ready();
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App with MetaMask</h1>
      <ConnectWallet />
    </div>
  );
};

export default Home;
