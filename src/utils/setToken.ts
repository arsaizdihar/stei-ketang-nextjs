export const setToken = (token: string, refresh: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("refresh", refresh);
};
