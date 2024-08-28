import React, { useState, useEffect } from 'react';
import './App.css';
import { getSongs, getSongUrl } from './services/api';
import ProfileClient from './components/ProfileClient';
import HFProduction from './components/HFProduction';
import LogoPricipal from './components/LogoPrincipal';
import SongList from './components/SongList';
import Player from './components/Player';
import BannerBox from './components/BannerBox';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [songUrl, setSongUrl] = useState('');
  const banners1 = [
    '/img/banner1.png',
    '/img/banner2.png',
    '/img/banner3.png',
  ];

  const banners2 = [
    '/img/banner11.png',
    '/img/banner22.png',
    '/img/banner33.png',
  ];

  const banners3 = [
    '/img/banner111.png',
    '/img/banner222.png',
    '/img/banner333.png',
  ];

  useEffect(() => {
    const loadSongs = async () => {
      const songsData = await getSongs();
      setSongs(songsData);
    };
    loadSongs();
  }, []);

  const handlePlay = (song) => {
    setCurrentSong(song);
    setSongUrl(getSongUrl(song));
  };

  const handleStop = () => {
    setCurrentSong(null);
    setSongUrl('');
  };

  return (
    <div className="App">
      <HFProduction />
      <LogoPricipal />
      <ProfileClient />
      <div className="AppBanner">
        <BannerBox banners={banners1} />
        <BannerBox banners={banners2} />
        <BannerBox banners={banners3} />
      </div>
      <SongList songs={songs} onPlay={handlePlay} />
      <Player songUrl={songUrl} currentSong={currentSong} onStop={handleStop} />
    </div>
  );
}

export default App;
