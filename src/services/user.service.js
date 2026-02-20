import api from "./api";
const API_URL = import.meta.env.VITE_USER_API;

const signUp = async () => {
  return await api.post(API_URL + "/signup");
};

const login = async () => {
  return await api.post(API_URL + "/login");
};

const logout = async () => {
  return await api.post(API_URL + "/logout");
};

const profile = async () => {
  return await api.post(API_URL + "/profile");
};

const checkAuth = async () => {
  return await api.post(API_URL + "/check-auth");
};

const UserService = {
  signUp,
  login,
  logout,
  profile,
  checkAuth,
};
export default UserService;
