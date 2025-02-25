import { Client, defaultClient } from "./client";

export interface clientData extends Client {
  password: string | null;
}

export const defaultClientData: clientData = {
  ...defaultClient,
  password: "",
};
