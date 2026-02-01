// src/contexts/AuthContext.tsx
import React, { createContext, useEffect, useState } from "react";

type User = { email: string; password: string };

type AuthContextType = {
  user: User | null;
  signed: boolean;
  signin: (email: string, password: string) => string | null;
  signup: (email: string, password: string) => string | null;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = { children: React.ReactNode };

const STORAGE_USERS = "users_db";
const STORAGE_TOKEN = "user_token";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userTokenRaw = localStorage.getItem(STORAGE_TOKEN);
    const usersRaw = localStorage.getItem(STORAGE_USERS);
    if (!userTokenRaw || !usersRaw) return;

    try {
      const { email } = JSON.parse(userTokenRaw) as { email: string; token: string };
      const users = (JSON.parse(usersRaw) as User[]) ?? [];
      const found = users.find((u) => u.email === email);
      if (found) setUser(found);
    } catch {
      // parse inválido? ignora
    }
  }, []);

  const signin = (email: string, password: string): string | null => {
    const users = (JSON.parse(localStorage.getItem(STORAGE_USERS) ?? "[]") as User[]) ?? [];
    const found = users.find((u) => u.email === email);

    if (!found) return "Usuário não cadastrado";
    if (found.password !== password) return "E-mail ou senha incorretos";

    const token = Math.random().toString(36).substring(2);
    localStorage.setItem(STORAGE_TOKEN, JSON.stringify({ email, token }));
    setUser({ email, password });
    return null;
  };

  const signup = (email: string, password: string): string | null => {
    const users = (JSON.parse(localStorage.getItem(STORAGE_USERS) ?? "[]") as User[]) ?? [];
    const exists = users.some((u) => u.email === email);
    if (exists) return "Já tem uma conta com esse E-mail";

    const newUsers = [...users, { email, password }];
    localStorage.setItem(STORAGE_USERS, JSON.stringify(newUsers));
    return null;
  };

  const signout = (): void => {
    setUser(null);
    localStorage.removeItem(STORAGE_TOKEN);
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
