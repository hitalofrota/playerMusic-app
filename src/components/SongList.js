import React from 'react';
import './style/songsList.css';

function SongList({ songs, onPlay }) {
  return (
    <div className='musicBody'>
      <div className='musicTitle'>
        <h1>Todas as músicas</h1>
      </div>
      {songs.map((song, index) => (
        <div key={index} className='letterStyles'>
          <span>{song.name}</span>
          <button onClick={() => onPlay(song)}>Play</button> {/* Passando o objeto song */}
        </div>
      ))}
    </div>
  );
}

export default SongList;
