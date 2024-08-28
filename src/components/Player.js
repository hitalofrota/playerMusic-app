import React, { useEffect, useRef } from 'react';
import './style/player.css'; // Lembre-se de criar e importar o arquivo CSS

function Player({ songUrl, currentSong, onStop, onNext }) {
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = songUrl;
      audioRef.current.play();
      audioRef.current.addEventListener('ended', handleSongEnd);
    }

    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener('ended', handleSongEnd);
    };
  }, [songUrl, currentSong]);

  const handleSongEnd = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    currentSong && (
      <div className="playerContainer">
        <p>Playing: {currentSong}</p>
        <button onClick={onStop}>Stop</button>
      </div>
    )
  );
}

export default Player;
