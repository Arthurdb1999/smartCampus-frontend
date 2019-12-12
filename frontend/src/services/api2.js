import axios from 'axios';

const api2 = axios.create({
    baseURL: "https://smartcampusifsc.herokuapp.com/api/getCourses",
});


export default api2;