import Image from "next/image";
import React from "react";
import styles from "./trending.module.scss";

const Trending = () => {
  return (
    <div className={styles.trending}>
      <h1 className={styles.h1}>Trending</h1>
      <div className={styles.scroll_container}>
        <div className={styles.video}>
          <Image
            className={styles.cover}
            src={"/large.jpg"}
            height={230}
            width={470}
            alt=""
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
            <div
              className={`${styles.icon}  ${false ? styles.selected : ""}`}
            />
          </div>
          <div className={styles.description}>
            <p className={styles.p}>
              2019
              <span className={styles.point} />
              <Image
                src={"/icon-category-movie.svg"}
                alt=""
                height={12}
                width={12}
              />
              Movie
              <span className={styles.point} />
              PG
            </p>
            <h2 className={styles.title}>Beyond Earth</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
