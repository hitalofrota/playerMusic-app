import React, { useState } from 'react';
import SongList from './SongList';
import Player from './Player';

const MusicApp = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  const handleStop = () => {
    setCurrentSong(null);
  };

  return (
    <div>
      <SongList songs={songs} onPlay={handlePlay} />
      {currentSong && <Player song={currentSong} onStop={handleStop} />}
    </div>
  );
};

export default MusicApp;
