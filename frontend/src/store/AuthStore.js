import { create } from "zustand";
import { axiosistance } from "../lib/axios";

export const AuthStore = create((set) => ({
  check: true,
  authed: false,

  fucheck: async () => {
    try {
      const res = await axiosistance.get("/auth/check");
      set({ authed: true, check: false });
      return res.data; 
    } catch (e) {
      console.error("Auth check failed:", e);
      set({ authed: false, check: false });
    }
  },
}));
