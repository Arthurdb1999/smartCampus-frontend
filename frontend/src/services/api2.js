import axios from 'axios';

const api2 = axios.create({
    baseURL: "https://smartcampusifsc.herokuapp.com/api",
});


export default api2;