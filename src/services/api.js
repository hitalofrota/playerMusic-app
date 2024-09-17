import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getSongs = async () => {
    try {
      const response = await axios.get(`${API_URL}/songs`);
      return Array.isArray(response.data.songs) ? response.data.songs : [];
    } catch (error) {
      console.error('Erro ao carregar músicas:', error);
      return [];
    }
  };

export const getSongUrl = (song) => {
  return `${API_URL}/play/${song}`;
}
