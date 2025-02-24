"use client";
import { Client } from "@/Interface/client";
import { createContext, useContext, useEffect, useState } from "react";

interface ClientContextType {
  client: Client | null;
  setClient: (client: Client) => void;
}

const clientContext = createContext<ClientContextType | null>(null);
const LOCAL_NAME = "client";

export const ClientProvider = ({ children }) => {
  const [client, setClientState] = useState<Client | null>(null);

  useEffect(() => {
    const storedClient = localStorage.getItem(LOCAL_NAME);
    if (storedClient) {
      setClientState(JSON.parse(storedClient));
    }
  }, []);

  const setClient = (client: Client | null) => {
    if (client) {
      localStorage.setItem(LOCAL_NAME, JSON.stringify(client));
    } else {
      localStorage.removeItem(LOCAL_NAME);
    }
    setClientState(client);
  };
  return (
    <clientContext.Provider value={{ client, setClient: setClient }}>
      {children}
    </clientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(clientContext);

  if (!context) {
    throw new Error("useClient must be used within an ClientProvider");
  }

  return context;
};
