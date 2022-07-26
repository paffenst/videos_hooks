import axios from 'axios';

const KEY = 'AIzaSyDCHiJzNow0Z-KWrg7ailE64EGGA-Kt3Ig';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});