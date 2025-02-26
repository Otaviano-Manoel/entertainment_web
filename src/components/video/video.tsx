import Image from "next/image";
import React, { useState } from "react";
import styles from "./video.module.scss";

const Video = () => {
  const [pointer, setPointer] = useState(false);
  return (
    <div
      className={`${styles.video} ${true ? styles.not_trending : ""}`}
      onPointerEnter={() => setPointer(true)}
      onPointerLeave={() => setPointer(false)}
    >
      <Image
        className={styles.background_img}
        src={"/large.jpg"}
        alt=""
        height={230}
        width={480}
      />

      <div
        className={`${styles.container_play} ${pointer ? styles.hover : ""}`}
      >
        <button type="button" className={`${styles.play}`}>
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

      <div className={styles.bookmark}>
        <Image
          className={styles.img}
          src={false ? "/icon-bookmark-full.svg" : "/icon-bookmark-empty.svg"}
          alt=""
          height={14}
          width={12}
        />
      </div>

      <p className={styles.description}>
        2000
        <span className={styles.point} />
        <Image
          className={styles.category}
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
  );
};

export default Video;
