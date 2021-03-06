import axios from "axios";
import qs from "qs";
// import { Spin, message } from "antd";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:9000";
}
if (process.env.NODE_ENV === "production") {
  baseUrl = "http://119.45.0.151:9000";
}
const instanceRequest = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

//HTTP请求拦截器
instanceRequest.interceptors.request.use(
  (config) => {
    //<Spin spinning={true} />;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//HTTP响应拦截器
instanceRequest.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      //<Spin spinning={false} />;
      if (response.data.code === 200) {
        return Promise.resolve(response.data);
      } else {
        //message.success("成功");
        return Promise.resolve(response);
      }
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    //message.error("失败");
    return Promise.reject(error.response);
  }
);

const HTTP = {
  Get(url, data) {
    return instanceRequest.get(url, { params: data });
  },
  Post(url, data) {
    return new Promise((resolve, reject) => {
      instanceRequest
        .post(url, qs.stringify(data), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error.data);
        });
    });
  },
};

export default HTTP;
