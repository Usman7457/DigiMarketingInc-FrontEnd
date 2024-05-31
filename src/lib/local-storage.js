import { jwtDecode } from "jwt-decode";

export const saveToken = (value) => {
  localStorage.setItem("dmi.cruf.token", value);
};

export const getToken = () => {
  let token = localStorage.getItem("dmi.cruf.token");
  if (!token) {
    return null;
  } else {
    return jwtDecode(token);
  }
};

export const deleteToken = () => {
  localStorage.removeItem("dmi.cruf.token");
};
