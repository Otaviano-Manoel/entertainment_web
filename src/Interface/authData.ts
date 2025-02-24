import { Auth, defaultAuth } from "./auth";

export interface AuthData extends Auth {
  password: string;
}

export const defaultAuthData: AuthData = {
  ...defaultAuth,
  password: "",
};
