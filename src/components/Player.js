import React, { useEffect, useRef } from 'react';

function Player({ song }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.src = song.url;
      audioRef.current.play().catch(error => {
        console.error("Failed to play the audio: ", error);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ''; // Limpa o src quando a música parar
      }
    };
  }, [song]);

  return (
    song && (
      <div className="playerContainer">
        <p>Playing: {song.name}</p>
        <audio ref={audioRef} controls autoPlay />
      </div>
    )
  );
}

export default Player;
