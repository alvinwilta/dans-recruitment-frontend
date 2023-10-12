import axios from "axios";

import { BACKEND_URL } from "./config";

const instance = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const hasJWT = (): boolean => {
  let flag = false;

  //check user has JWT token
  localStorage.getItem("token") ? (flag = true) : (flag = false);

  return flag;
};

export default instance;
