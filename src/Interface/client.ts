export interface Client {
  email: string;
  image: string;
  name: string;
  expire: string;
}

export const defaultClient: Client = {
  email: "",
  image: "",
  name: "",
  expire: "",
};
