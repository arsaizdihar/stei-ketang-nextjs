import axios, { Method } from "axios";
import { apiUrl } from "../constants/apiUrl";
import { isExpired } from "./isExpired";
import { setToken } from "./setToken";

export const fetchWithToken = async (
  url: string,
  data?: any,
  method: Method = "GET",
  form: boolean = false
) => {
  let token = localStorage.getItem("token");
  if (!token) {
    const error: any = new Error("No token");
    error.response = { status: 401 };
    error.info = "Unauthorized";
    throw error;
  }
  const startFetch = async () => {
    token = localStorage.getItem("token");
    const headers = {
      "Content-Type": form ? "multipart/form-data" : "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return await axios({
      method: method,
      url: apiUrl + url,
      data: data,
      headers: headers,
    }).then((res) => res.data);
  };
  if (isExpired(token)) {
    return await refreshToken().then(async () => await startFetch());
  } else {
    return await startFetch();
  }
};

const refreshToken = async () => {
  const refresh = localStorage.getItem("refresh");
  return await axios
    .post(
      apiUrl + "refresh/",
      { refresh },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      const data = res.data;
      setToken(data.access, data.refresh);
    });
};
