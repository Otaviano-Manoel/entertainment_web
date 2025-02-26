import Image from "next/image";
import React from "react";
import styles from "./listMovies.module.scss";

const ListMovies = () => {
  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Recommended for you</h2>

      <div className={styles.container_movie}>
        <div className={styles.video}>
          <Image
            className={styles.cover}
            src={"/large.jpg"}
            alt=""
            height={175}
            width={280}
          />

          <div className={styles.play}>
            <button type="button" className={styles.button}>
              <Image
                className={styles.icon}
                src={"/icon-play.svg"}
                alt=""
                height={30}
                width={30}
              />
              <p className={styles.p}>Play</p>
            </button>
          </div>

          <div
            className={`${styles.bookmark}  ${false ? styles.selected : ""}`}
          >
            <div className={`${styles.icon} ${false ? styles.selected : ""}`} />
          </div>

          <div className={styles.description}>
            <p className={styles.p}>
              2019
              <span className={styles.point} />
              <Image
                src={"/icon-category-movie.svg"}
                alt=""
                height={14}
                width={12}
              />
              Movies
              <span className={styles.point} />
              PG
            </p>
            <h2 className={styles.title_movie}>The Great Lands</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
