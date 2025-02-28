import Image from "next/image";
import React, { SetStateAction } from "react";
import styles from "./search.module.scss";
import ListVideos from "../listMovies.tsx/listMovies";
import { VideoData } from "@/Interface/video";

interface SearchProps {
  data: VideoData[] | undefined;
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  markBook: (title: string) => void;
}

const Search = (props: SearchProps) => {
  const count = props.data?.length;
  return (
    <div>
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
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </label>

      {props.search !== "" ? (
        <ListVideos
          title={`Found ${count ? count : 0} ${
            count === 1 ? "result" : "results"
          } for ‘${props.search}’`}
          data={props.data}
          markBook={props.markBook}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
