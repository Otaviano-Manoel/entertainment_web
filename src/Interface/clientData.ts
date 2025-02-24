import { Client, defaultClient } from "./client";

export interface clientData extends Client {
  password: string;
}

export const defaultClientData: clientData = {
  ...defaultClient,
  password: "",
};
