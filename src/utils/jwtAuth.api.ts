import { Role } from "@/store/slices/user.slice";
import { useMyStore } from "@/store/store";
import axiosInstance from "@/utils/axiosInstance";
import { decodeToken, setSession } from "@/utils/jwt";
import { QueryFunctionContext } from "@tanstack/react-query";

export const verifyToken = async (): Promise<boolean> => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  setSession(token);  // Update axios headers
  let url = '/auth/verify-email';  // Assume a dedicated token verification endpoint
  
  try {
      const res = await axiosInstance.post(url, { token });
      if (res.status === 200) {
          const decoded = decodeToken(token);
          if (decoded) {
              useMyStore.setState({ user: decoded, loggedIn: true, role: decoded.role as Role });
              return true;
          }
      }
  } catch (error) {
      console.error("Token verification failed", error);
  }
  
  setSession(null);
  useMyStore.setState({ user: null, loggedIn: false, role: null });
  return false;
};
