import HTTP from "./http";

export const LOGIN = (params) => {
  return HTTP.Post(`/v1/user/login`, params);
};

export const REGISTER = (params) => {
  return HTTP.Post(`/v1/user/register`, params);
};
