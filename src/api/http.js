import axios from "axios";
import qs from "qs";
import { Spin, message } from "antd";
let Base = "http://www.arslan.com";

const instanceRequest = axios.create({
  baseURL: Base,
  timeout: 5000
});

//HTTP请求拦截器
instanceRequest.interceptors.request.use(
  config => {
    <Spin spinning={true} />;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//HTTP响应拦截器
instanceRequest.interceptors.response.use(
  response => {
    if (response.status === 200) {
      <Spin spinning={false} />;
      if (response.data.code === 200) {
        return Promise.resolve(response.data);
      } else {
        message.success("成功");
        return Promise.resolve(response.data);
      }
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    message.error("失败");
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
            Accept: "application/json"
          }
        })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default HTTP;
