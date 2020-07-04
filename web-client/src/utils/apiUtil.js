const axios = require('axios');

const commonAxios = axios.create({
    baseURL: "http://localhost:8080/"
});

function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value)
    });
}
commonAxios.interceptors.response.use(function (response) {
    const {data} = response;
    console.log("UtilData", data);
    if (data.code !== 0) {
        const error = new Error(data.message || 'Unknown error');
        error.data = data.data;
        throw error;
    }
    return sleep(1000, data.data);
}, function (error) {
    return Promise.reject(error);
});

export {commonAxios};
