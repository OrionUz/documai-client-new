import { message } from "antd";
import axios from "axios";
import { token } from "./const";
import { handleLogoutFunc } from "./help";

export let host = "https://shokhrukhmirzo.uz/api/";
// export let host = "http://192.168.1.107:7002/api/";

export let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: token ? `Bearer ${token}` : "",
};

export let headersMultipart = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "multipart/form-data",
  Authorization: token ? `Bearer ${token}` : "",
};

export let axiosInstance = axios.create({
  baseURL: `${host}`,
  headers,
  timeout: 100000,
});

export let axiosInstanceMultipart = axios.create({
  baseURL: `${host}`,
  headers: headersMultipart,
  timeout: 100000,
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response) {
      let obj = error.response.data;
      let { status } = error.response;
      if (status === 403 || status === 401) {
        handleLogoutFunc();
      } else if (status === 404) {
        message.error("Not found", 5);
      } else if (status === 500) {
        message.error("Internal server error", 5);
      } else {
        if (obj?.message) {
          message.error(obj.message, 10);
        } else if (obj.length > 0) {
          obj.forEach((item: any) => {
            message.error(item);
          });
        } else {
          for (let key in obj) {
            obj[key].forEach((item: any) => {
              message.error(item);
            });
          }
        }
      }
    }
    throw error;
  }
);
