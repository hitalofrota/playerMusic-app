import axios from 'axios';

//const API_URL = `https://1ad525f80dae235ce2c7a865ee12a211.serveo.net/api`;
const API_URL = process.env.REACT_APP_API_URL;
console.log('API_URL:', API_URL);

export const getSongs = async () => {
    try {
      const response = await axios.get(`${API_URL}/songs`);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Erro ao carregar músicas:', error);
      return [];
    }
  };

export const getSongUrl = (song) => {
  return `${API_URL}/play/${song}`;
};
