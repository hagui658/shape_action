import axios from "axios";
import { API_URL } from "./apiUrls";

const instance = axios.create({
  baseURL: "", // 基本URL不需要在此设置
});

export const fetchData = () => {
  return instance.get(API_URL.FETCH_DATA);
};

export const postData = (data) => {
  return instance.post(API_URL.POST_DATA, data);
};
