import axios, { AxiosError } from "axios";

let token = localStorage.getItem('usersPermission.token');
let isRefreshing = false;
let failedRequestQueue = [];

export const api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {
        Authorization: `Bearer ${token}`
    }
});

api.interceptors.response.use(response => {
    return response;
}, async (error) => {
    if (error.response.status === 401) {
        if (error.response.error='Invalid token!') {
            const refreshToken = localStorage.getItem('usersPermission.refreshToken');
            const originalConfig = error.config;

            if (!isRefreshing) {
                isRefreshing = true;
                api.post("refresh_token", {
                    refreshToken
                })
                .then(response => {
                    console.log(response);
                    localStorage.setItem('usersPermission.token', response.data.token);
                    localStorage.setItem('usersPermission.refreshToken', response.data.refreshToken);
                    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
                    failedRequestQueue.forEach(request => request.resolve(response.data.token));
                })
                .catch(error => {
                    failedRequestQueue.forEach(request => request.reject(error));
                    failedRequestQueue = [];
                })
                .finally(() => {
                    isRefreshing = false;
                })
            }

            return new Promise((resolve, reject) => {
                failedRequestQueue.push({
                    resolve: (token: string) => {
                        originalConfig.headers['Authorization'] = `Bearer ${token}`
                        resolve(api(originalConfig));
                    },
                    reject: (error: AxiosError) => {
                        reject(error);
                    }
                })
            })
        } else {
            return Promise.reject(error);
        }
    }
})