"use client";
import ListVideos from "@/components/listMovies.tsx/listMovies";
import Nav from "@/components/nav/nav";
import Search from "@/components/search/search";
import { useClient } from "@/context/useClient";
import UseDataVideo from "@/hooks/useDataVideo";
import React from "react";
import styles from "./bookmark.module.scss";

const BookMark = () => {
  const { client } = useClient();
  const { filter, markBook, search } = UseDataVideo();

  return (
    <div className={styles.page}>
      <Nav client={client} page="bookmark" />

      <main>
        <Search
          data={search.concatArray(
            filter.getBookMarkMovies(),
            filter.getBookMarkSeries()
          )}
          search={search.search}
          setSearch={search.setSearch}
          markBook={markBook}
        />

        {search.search === "" ? (
          <ListVideos
            title="Bookmarked Movies"
            markBook={markBook}
            data={filter.getBookMarkMovies()}
          />
        ) : (
          <></>
        )}
        <div className={styles.breakLine} />
        {search.search === "" ? (
          <ListVideos
            markBook={markBook}
            title="Bookmarked TV Series"
            data={filter.getBookMarkSeries()}
          />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default BookMark;
