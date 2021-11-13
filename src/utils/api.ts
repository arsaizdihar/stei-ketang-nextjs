import axios from "axios";
import { apiUrl } from "../constants/apiUrl";
import { fetchWithToken } from "./fetchWithToken";
import { setToken } from "./setToken";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const login = async (email: string, password: string) => {
  return await axios
    .post(apiUrl + "login/", { email, password }, { headers })
    .then((res) => {
      setToken(res.data.access, res.data.refresh);
      return res.data;
    });
};

export const checkCode = async (code: string) => {
  return await axios
    .post(apiUrl + "password/check/", { code }, { headers })
    .then((res) => {
      return res.data;
    });
};

export const setPassword = async (data: {
  password: string;
  password2: string;
  code: string;
}) => {
  return await axios
    .post(apiUrl + "password/set/", data, { headers })
    .then((res) => res.data);
};

export const vote = async (number: number | string) =>
  await fetchWithToken("vote/", { number }, "POST");
