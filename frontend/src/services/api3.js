import axios from 'axios';

const api3 = axios.create({
    baseURL: "https://chaves-ifsc.herokuapp.com/",
});


export default api3;