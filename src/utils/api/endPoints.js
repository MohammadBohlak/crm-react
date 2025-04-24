import { api } from "./api";

const createCrudEndpoints = (resource) => ({
  CREATE: `/${resource}`,
  GET: `/${resource}`,
  GET_BY_ID: (id) => `/${resource}/${id}`,
  DEL_SOFT: (id) => `/${resource}/${id}`,
  EDIT: (id) => `/${resource}/${id}`,
  DEL: (id) => `/${resource}/deleted/${id}`,
  DELETED: `/${resource}/deleted`,
  RESTORE: (id) => `/${resource}/restore/${id}`,
});
 
export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/users/login",
    REGISTER: "/users/register",
    MY_DATA: (id) => `/users/me?userId=${id}`,
  },
  USERS: {...createCrudEndpoints("users"), GET_CUSTOMERS: "/users/customers", GET_ADMINS:"/users/admins"},
  CUSTOMERS: createCrudEndpoints("customers"),
  INTERACTIONS: createCrudEndpoints("interactions"),
  PRODUCTS: createCrudEndpoints("products"),
  SALES: createCrudEndpoints("sales"),
};