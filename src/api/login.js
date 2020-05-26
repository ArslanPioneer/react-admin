import HTTP from "./http";

export const LOGIN = (params) => {
  return HTTP.Post(`/v1/user/login`, params);
};
