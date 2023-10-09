import axios from "axios";
import { API_URL } from "../util/apiUtil";

const instance = axios.create({
  baseURL: "",
});

export const postData = (data) => {
  return instance.post(API_URL.SHAPE_DATA, data);
};
