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
          <span>{song}</span>
          <button onClick={() => onPlay(song)}>Play</button>
        </div>
      ))}
    </div>
  );
}

export default SongList;
