import axios from "axios";

const axiosInstance =  axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000
});
axiosInstance.interceptors.request.use((config)=>{
    // config.headers.setAuthorization(`Bearer $`) 
    config.headers.set("user", "Serhii Ruban");
    return config;
},
(error)=>{return Promise.reject(error);})

axiosInstance.interceptors.response.use((response)=>{
    console.log("Status text:", response.statusText);
    console.log("Data", response.data);
    return response;
},
(error)=>{return Promise.reject(error)});
export default axiosInstance;