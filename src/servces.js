const axios = require('axios')

const api = axios.create({

    baseURL: "http://localhost:3333"
});// fim api

export default api;