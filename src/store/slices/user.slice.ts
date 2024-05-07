/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type IUserState } from "@/schema/auth/auth.schema";
import { type StateCreator } from "zustand";

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
