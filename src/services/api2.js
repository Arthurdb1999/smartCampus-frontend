import axios from 'axios';

const api2 = axios.create({
    //baseURL: process.env.REACT_APP_API2_URL
    baseURL: "https://cardapio-ifsc.herokuapp.com/api",
});


export default api2;