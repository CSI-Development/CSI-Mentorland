import { jwtDecode } from "jwt-decode";
import axios from "./axiosInstance";
import { useMyStore } from "@/store/store";
import { setCookie } from "cookies-next";

export interface DecodedToken {
  _id: string;
  email?: string;
  name?: string;
  role: string;
  exp: number;
}

export const setSession = (token: string | null): void => {
  if (token) {
    console.log(token, { expires: new Date(jwtDecode<DecodedToken>(token).exp*1000) });
    setCookie("token", token, { expires: new Date(jwtDecode<DecodedToken>(token).exp*1000) });
    setCookie("role", jwtDecode<DecodedToken>(token).role, { expires: new Date(jwtDecode<DecodedToken>(token).exp*1000) });
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    // localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const decodeToken = (token: string | null): DecodedToken | null => {
  if (token) {
    try {
      return jwtDecode<DecodedToken>(token);
    } catch (error) {
      console.error("Failed to decode JWT", error);
      return null;
    }
  }
  return null;
};

interface userDetails {
  role?: string;
  _id?: string;
}

export const storeUserData = (userDetails: userDetails) => {
  console.log(userDetails, "userDetails");

  if (
    userDetails?.role === "student" ||
    userDetails?.role === "mentor" ||
    userDetails?.role === "admin"
  ) {
    useMyStore.getState().setRole(userDetails?.role);
  }

  useMyStore.getState().setUser({ ...useMyStore.getState().user, userDetails });
  console.log(useMyStore.getState(), "store");
};
