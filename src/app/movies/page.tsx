"use client";
import ListVideos from "@/components/listMovies.tsx/listMovies";
import Nav from "@/components/nav/nav";
import Search from "@/components/search/search";
import { useClient } from "@/context/useClient";
import UseDataVideo from "@/hooks/useDataVideo";
import React from "react";
import styles from "./movies.module.scss";

const Movies = () => {
  const { client } = useClient();
  const { filter, markBook, search } = UseDataVideo();

  return (
    <div className={styles.main}>
      <Nav client={client} page="movies" />

      <main>
        <Search
          data={filter.getMovies()}
          search={search.search}
          setSearch={search.setSearch}
          markBook={markBook}
        />
        {search.search === "" ? (
          <ListVideos
            title="Movies"
            markBook={markBook}
            data={filter.getMovies()}
          />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Movies;
