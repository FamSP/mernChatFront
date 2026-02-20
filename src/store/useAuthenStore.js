import { create } from "zustand";
import api from "../services/api";
import toast from "react-hot-toast";
const useAuthenStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isLogingin: false,
  isSignUp: false,
  isUpdatingProfile: false,
  onlineUsers: [],

  signUp: async (data) => {
    set({ isSignUp: true });
    try {
      const response = await api.post("/user/signup", data);
      set({ authUser: response.data });
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Sign Up Failed");
    } finally {
      set({ isSignUp: false });
    }
  },

  login: async (data) => {
    set({ isLogingin: true });
    try {
      const response = await api.post("/user/login", data);
      set({ authUser: response.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Log in Failed");
    } finally {
      set({ isLogingin: false });
    }
  },

  logOut: async () => {
    try {
      const response = await api.post("user/logout");
      set({ authUser: null });
      toast.success(response.data.message || "Logout successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Logout Failed");
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await api.put("user/profile", data);
      set({ authUser: response.data });
      toast.success(response.data.message || "Update Profile successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Update Profile Failed");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  checkAuth: async () => {
    try {
      const response = await api.get("/user/check");
      set({ authUser: response.data }, {});
    } catch (error) {
      console.log("Error in Check AUTH", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthenStore;
