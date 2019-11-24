import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL_FIREBASE
});

export default instance; 