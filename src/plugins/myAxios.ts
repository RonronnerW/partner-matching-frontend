import axios from "axios";

// const isDev = process.env.NODE_ENV === 'development';

// Set config defaults when creating the instance
const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api',
});

myAxios.defaults.withCredentials = true; // 允许携带 cookie

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response?.data?.code === 40100) {
        // const redirectUrl = window.location.href;
        window.location.href = `/person/login`;
    }
    return response?.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;