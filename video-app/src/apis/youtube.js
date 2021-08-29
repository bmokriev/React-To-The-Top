import axios from 'axios';

const KEY = 'AIzaSyBk0DwBC_gVcGKRnE6OiCWlAgG67FRf0Zs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
