import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://films-83ba5-default-rtdb.firebaseio.com/'
});

export default apiFirebase