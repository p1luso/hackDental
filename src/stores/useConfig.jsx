import { create } from "zustand";

export const useConfigStore = create((set) => ({
  navMobileMenuIsShow: false,
  setNavMobileMenuIsShow(value) {
    set({ navMobileMenuIsShow: value });
  },
}));
