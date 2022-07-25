import axios from 'axios';

const KEY = 'AIzaSyBITExp2OZR76-rBd__XCxRBUBXxvgJa2k';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        type: 'videos',
        maxResults: 5,
        key: KEY
    }
});