import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WPoPw50NdzI0sYqnz1WXTjhpDILXl3-T-2XJxSmSalA',
  },
});
