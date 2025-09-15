import { create } from "zustand";

export type Role = "public" | "user";

interface UserState {
  role: Role;
  username?: string;
  token?: string | null;
  login: (username: string, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  role: "public",
  username: undefined,
  token: null,
  login: (username: string, token: string) => {
    localStorage.setItem("token", token);
    set({ role: "user", username, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ role: "public", username: undefined, token: null });
  },
}));
