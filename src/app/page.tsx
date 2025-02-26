"use client";
import { useRouter } from "next/navigation";
import styles from "./home.module.scss";
import { useEffect } from "react";
import { LOCAL_NAME_CLIENT_LOGGED, useClient } from "@/context/useClient";
import moment from "moment";
import Nav from "@/components/nav/nav";
import Trending from "@/components/trending/trending";
import Search from "@/components/search/search";
import ListMovies from "@/components/listMovies.tsx/listMovies";
import Image from "next/image";

import icon from "../../public/icon-test.svg";

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

      <Image className={styles.svg} src={icon} height={30} width={30} alt="" />

      <main>
        <Search />

        <Trending />

        <ListMovies />
      </main>
    </div>
  );
}
