import { create } from "zustand";
import { axiosistance } from "../lib/axios";

export const AuthStore = create((set) => ({
  check: true,
  user:null,

  fucheck: async () => {
    try {
      const res = await axiosistance.get("/auth/check");
      set({ user:res.data, check: false });
    
    } catch (e) {
      console.error("Auth check failed:", e);
      set({ authed: false, check: false });
    }
  },
}));
