"use client";
import { useRouter } from "next/navigation";
import styles from "./home.module.scss";
import { useEffect, useRef, WheelEvent } from "react";
import { LOCAL_NAME_CLIENT_LOGGED, useClient } from "@/context/useClient";
import moment from "moment";
import Image from "next/image";
import Nav from "@/components/nav/nav";
import Trending from "@/components/trending/trending";

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

  return (
    <div className={styles.main}>
      <Nav client={client} page="home" />

      <main>
        <label className={styles.search} htmlFor="search">
          <Image
            className={styles.icon}
            src={"/icon-search.svg"}
            alt=""
            height={32}
            width={32}
          />
          <input
            className={styles.input}
            type="search"
            name="search"
            id="search"
            placeholder="Search for movies or TV series"
          />
        </label>

        <Trending />

        <div>
          <h2>Recommended for you</h2>
        </div>
      </main>
    </div>
  );
}
