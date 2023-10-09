import axios from "axios";
import { API_URL } from "../util/apiUtil";

const instance = axios.create({
  baseURL: "",
});

export const fetchData = () => {
  return instance.get(API_URL.FETCH_DATA);
};

export const postData = (data) => {
  return instance.post(API_URL.POST_DATA, data);
};
