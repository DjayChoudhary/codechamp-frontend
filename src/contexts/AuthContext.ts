import { createContext } from "react";

export const AuthContext = createContext(null);

interface AuthState {
  isLoggedIn: boolean;
  isAuthenticated: boolean;
  userName: string;
  userId: string;
}
