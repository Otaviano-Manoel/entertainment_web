"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { LOCAL_NAME_CLIENT_LOGGED, useClient } from "@/context/useClient";
import moment from "moment";

export default function Home() {
  const navigate = useRouter();
  const { client } = useClient();

  useEffect(() => {
    if (client) {
      if (moment().isAfter(client.expire)) {
        localStorage.removeItem(LOCAL_NAME_CLIENT_LOGGED);
        navigate.push("/login");
      } else {
        console.log(client);
      }
    }
  }, [client, navigate]);

  const login = () => {
    navigate.push("/login");
  };

  return (
    <div className={styles.main}>
      <button onClick={login} className={styles.button} type="button">
        Login
      </button>
    </div>
  );
}
