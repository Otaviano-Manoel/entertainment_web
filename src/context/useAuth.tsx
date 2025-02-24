"use client";
import { Auth } from "@/Interface/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  auth: Auth | null;
  setAuth: (auth: Auth) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const LOCAL_NAME = "client";

export const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState<Auth | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem(LOCAL_NAME);
    if (storedAuth) {
      setAuthState(JSON.parse(storedAuth));
    }
  }, []);

  const setAuth = (auth: Auth | null) => {
    if (auth) {
      localStorage.setItem(LOCAL_NAME, JSON.stringify(auth));
    } else {
      localStorage.removeItem(LOCAL_NAME);
    }
    setAuthState(auth);
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
