"use client";
import { useRouter } from "next/navigation";
import styles from "./home.module.scss";
import { SetStateAction, useEffect } from "react";
import { LOCAL_NAME_CLIENT_LOGGED, useClient } from "@/context/useClient";
import moment from "moment";
import Nav from "@/components/nav/nav";
import Trending from "@/components/trending/trending";
import Search from "@/components/search/search";
import ListVideos from "@/components/listMovies.tsx/listMovies";
import UseDataVideo from "@/hooks/useDataVideo";
import { VideoData } from "@/Interface/video";

export default function Home() {
  const navigate = useRouter();
  const { client } = useClient();
  const { filter, markBook, search } = UseDataVideo();

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
        <Search
          data={search.concatArray(
            filter.getTrending(),
            filter.getRecommended()
          )}
          search={search.search}
          setSearch={search.setSearch}
          markBook={markBook}
        />

        {search.search === "" ? (
          <Trending markBook={markBook} data={filter.getTrending()} />
        ) : (
          <></>
        )}
        {search.search === "" ? (
          <ListVideos
            title="Recommended for you"
            markBook={markBook}
            data={filter.getRecommended()}
          />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}
