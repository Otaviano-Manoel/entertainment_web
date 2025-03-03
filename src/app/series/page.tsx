"use client";
import ListVideos from "@/components/listMovies.tsx/listMovies";
import Nav from "@/components/nav/nav";
import Search from "@/components/search/search";
import { useClient } from "@/context/useClient";
import UseDataVideo from "@/hooks/useDataVideo";
import React from "react";
import styles from "./series.module.scss";

const Series = () => {
  const { client } = useClient();
  const { filter, markBook, search } = UseDataVideo();

  return (
    <div className={styles.page}>
      <Nav client={client} page="series" />

      <main>
        <Search
          data={filter.getSeries()}
          search={search.search}
          setSearch={search.setSearch}
          markBook={markBook}
        />
        {search.search === "" ? (
          <ListVideos
            title="TV Series"
            markBook={markBook}
            data={filter.getSeries()}
          />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Series;
