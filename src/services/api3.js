import axios from 'axios';

const api3 = axios.create({
    //baseURL: process.env.REACT_APP_API3_URL
    baseURL: "https://chaves-ifsc.herokuapp.com/",
});


export default api3;