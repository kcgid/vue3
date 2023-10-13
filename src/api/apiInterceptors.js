import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.hnpwa.com/v0",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

instance.interceptors.request.use(
    (config) => {
        console.log(config)
        console.log(`axiosInstance.interceptors.request > URL: ${config.url}`);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {

        return Promise.reject(err);
    }
);


export default instance;