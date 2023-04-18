import axios from 'axios'
export const httpClient = axios.create({
    baseURL: `${process.env.VUE_APP_MY_ENV_VARIABLE}/api`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
export const httpClientPrivate = axios.create({
    baseURL: `${process.env.VUE_APP_MY_ENV_VARIABLE}/api`,

});
httpClientPrivate.interceptors.response.use(
    function (response) {
        return response;
    }, 
    function (error) {
        if (error.response.data.message === "Unauthorized!" || error.response.data.message === "No token provided!") {
            localStorage.clear();
            window.location.href = '/signin'
        }
        return Promise.reject(error);
  });