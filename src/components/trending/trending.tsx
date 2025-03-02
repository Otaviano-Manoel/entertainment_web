import Image from "next/image";
import React from "react";
import styles from "./trending.module.scss";
import { VideoData } from "@/Interface/video";
import { useWindowSize } from "react-use";

interface TrendingProps {
  data: VideoData[] | undefined;
  markBook: (title: string) => void;
}

const Trending = (props: TrendingProps) => {
  const { width } = useWindowSize();

  const getThumbnail = (video: VideoData) => {
    if (width && width < 475) return video.thumbnail.trending.small;

    return video.thumbnail.trending.large;
  };

  const getWidthScroll = () => {
    if (width <= 768) return { width: width - 30 };
    return { width: width - 185 };
  };
  return (
    <div className={styles.trending}>
      <h1 className={styles.h1}>Trending</h1>
      <div className={styles.scroll_container} style={getWidthScroll()}>
        {props.data?.map((video) => (
          <div key={video.title} className={styles.video}>
            <Image
              className={styles.cover}
              src={getThumbnail(video)}
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
              className={`${styles.bookmark}  ${
                video.isBookmarked ? styles.selected : ""
              }`}
              onClick={() => props.markBook(video.title)}
            >
              <div className={`${styles.icon}`} />
            </div>
            <div className={styles.description}>
              <p className={styles.p}>
                {video.year}
                <span className={styles.point} />
                <Image
                  src={
                    video.category === "Movie"
                      ? "/icon-category-movie.svg"
                      : "/icon-category-tv.svg"
                  }
                  alt=""
                  height={12}
                  width={12}
                />
                {video.category}
                <span className={styles.point} />
                {video.rating}
              </p>
              <h2 className={styles.title}>{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
