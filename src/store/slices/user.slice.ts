import { IUserState } from "@/schema/auth/auth.schema";
import { StateCreator } from "zustand";

export type Role = "admin" | "student" | "mentor" | null;

export interface UserSlice {
  user: IUserState | null;
  role: Role;
  loggedIn: boolean;
  setUser: (user: any | null) => void;
  setRole: (role: Role) => void;
}

export const createUserSlice: StateCreator<
  UserSlice,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  UserSlice
> = (set) => ({
  user: null,
  role: null,
  loggedIn: false,
  setUser: (user) => set({ user: user, loggedIn: user ? true : false }),
  setRole: (role: Role) => set({ role: role }),
});
