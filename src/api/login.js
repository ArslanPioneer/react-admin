import HTTP from "./http";

export default LOGIN = params => {
  return HTTP.Post(`admin/login`, params);
};
