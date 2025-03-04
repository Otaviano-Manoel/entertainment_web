"use client";
import { Client } from "@/Interface/client";
import moment from "moment";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ClientContextType {
  client: Client | null;
  setClient: (client: Client) => void;
}

interface ClientProviderType {
  children: React.ReactNode;
}

const clientContext = createContext<ClientContextType | null>(null);
export const LOCAL_NAME_CLIENT_LOGGED = "client";

export const ClientProvider: React.FC<ClientProviderType> = ({ children }) => {
  const [client, setClientState] = useState<Client | null>(null);

  useEffect(() => {
    const storedClient = localStorage.getItem(LOCAL_NAME_CLIENT_LOGGED);
    if (storedClient) {
      setClientState(JSON.parse(storedClient));
    } else {
      const date = moment();
      const newDate = date.add(1, "days");
      const formattedDate = newDate.format("MMMM Do YYYY, h:mm:ss a");
      setClient({
        email: "example@gmail.com",
        image: "/image-avatar.png",
        name: "example",
        expire: formattedDate,
      });
    }
  }, []);

  const setClient = (client: Client | null) => {
    if (client) {
      localStorage.setItem(LOCAL_NAME_CLIENT_LOGGED, JSON.stringify(client));
    } else {
      localStorage.removeItem(LOCAL_NAME_CLIENT_LOGGED);
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
