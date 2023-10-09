import axios from "axios";
import { API_URL } from "../util/apiUtil";

const instance = axios.create({
  baseURL: "http://localhost:9394",
});

export const postData = (data) => {
  return instance.post(API_URL.SHAPE_DATA, data);
};
