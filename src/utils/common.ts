import { type Magic } from '@/providers/MagicProvider';
import { type Dispatch, type SetStateAction } from 'react';

export type LoginMethod = "EMAIL" | "SMS" | "SOCIAL" | "FORM";

export const saveUserInfo = (
  token: string,
  loginMethod: LoginMethod,
  userAddress: string,
) => {
  localStorage.setItem("mtoken", token);
  localStorage.setItem("isAuthLoading", "false");
  localStorage.setItem("loginMethod", loginMethod);
  localStorage.setItem("user", userAddress);
};

export const logout = async (
  setToken: Dispatch<SetStateAction<string>>,
  magic: Magic | null,
) => {
  if (await magic?.user.isLoggedIn()) {
    await magic?.user.logout();
  }
  localStorage.setItem("mtoken", "");
  localStorage.setItem("user", "");
  setToken("");
};
