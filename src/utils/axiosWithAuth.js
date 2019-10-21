import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    // return an instance of axios
    return axios.create({
        baseURL: 'https://block-club-calendar.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};