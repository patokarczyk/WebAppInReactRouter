import React, { useEffect } from "react";
import { useContext, useState, createContext, type ReactNode } from "react";

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}