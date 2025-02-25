import { Client } from "@/Interface/client";
import { clientData } from "@/Interface/clientData";

const NAME_LOCAL_DATA_CLIENT = "dataclient";

const useLocalDataClient = () => {
  const addDataClient = (dataClient: clientData) => {
    const json = localStorage.getItem(NAME_LOCAL_DATA_CLIENT);
    let isAdd = true;

    let data: clientData[] = [];
    if (json) {
      data = JSON.parse(json) as clientData[];
      const index = getEmailIfExists(dataClient.email, data);
      if (index !== -1) {
        data[index] = dataClient;
        isAdd = false;
        alert("The email already existed and was replaced.");
      }
    }

    if (isAdd) data.push(dataClient);

    localStorage.setItem(NAME_LOCAL_DATA_CLIENT, JSON.stringify(data));
  };

  const getEmailIfExists = (email: string, data: clientData[]) => {
    return data.findIndex((e) => e.email === email);
  };

  const login = (email: string, password: string): Client | null => {
    const json = localStorage.getItem(NAME_LOCAL_DATA_CLIENT);

    let data: clientData[] = [];
    if (json) {
      data = JSON.parse(json) as clientData[];
      const index = getEmailIfExists(email, data);
      if (index !== -1) {
        const c = data[index];
        if (password === c.password)
          return {
            email: c.email,
            image: c.image,
            expire: c.expire,
            name: c.name,
          };
      }
    }
    return null;
  };

  return { addDataClient, login };
};

export default useLocalDataClient;
