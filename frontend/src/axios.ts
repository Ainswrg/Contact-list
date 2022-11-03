/* eslint-disable no-param-reassign */
import axios from "axios";
import { getTokenLocalStorage } from "./utils";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use(
  (config) => {
    const token = getTokenLocalStorage();
    config.headers = {
      Authorization: token ?? "",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
