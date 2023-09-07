import { AUTH } from "./constants";

export const login = ({ username, password }) => ({
  type: AUTH.AUTH_LOGIN,
  username,
  password
});


export const loginSuccess = (data) => ({
  type: AUTH.AUTH_LOGIN_SUCCESS,
  data,
});


export const setAuthData = (data) => ({
  type: AUTH.AUTH_DATA,
  data,
});




