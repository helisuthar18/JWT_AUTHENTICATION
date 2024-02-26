import axios from 'axios';
    

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request= (method, url, data) => {
    return axios({
        method:method,
        url:url,
        data:data
    });
}

export const getToken = () => {
    // Retrieves the user token from the session storage
    return sessionStorage.getItem('token');
  }

export const setToken = (accessToken) => {
    // Set the JWT token in the default headers for all subsequent requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }


