import Image from "next/image";
import React from "react";
import styles from "./search.module.scss";

const Search = () => {
  return (
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
  );
};

export default Search;
