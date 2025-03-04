import Image from "next/image";
import React from "react";
import styles from "./gridMovies.module.scss";
import { VideoData } from "@/Interface/video";
import { useWindowSize } from "react-use";

interface ListVideosProps {
  data: VideoData[] | undefined;
  title: string;
  markBook: (title: string) => void;
}

const ListVideos = (props: ListVideosProps) => {
  const { width } = useWindowSize();

  const getThumbnail = (video: VideoData) => {
    if (width && width < 475) {
      return video.thumbnail.regular.small;
    } else if (width < 768) {
      return video.thumbnail.regular.medium;
    }
    return video.thumbnail.regular.large;
  };

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>{props.title}</h2>

      <div className={styles.container_movie}>
        {props.data?.map((video) => (
          <div key={video.title} className={styles.video}>
            <Image
              className={styles.cover}
              src={getThumbnail(video)}
              alt="Video thumbnail"
              height={175}
              width={280}
            />

            <div className={styles.play}>
              <button type="button" className={styles.button}>
                <Image
                  className={styles.icon}
                  src={"/icon-play.svg"}
                  alt="Play icon"
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
                  className={styles.icon}
                  src={
                    video.category === "Movie"
                      ? "/icon-category-movie.svg"
                      : "/icon-category-tv.svg"
                  }
                  alt="Movie category icon"
                  height={14}
                  width={12}
                />
                {video.category}
                <span className={styles.point} />
                {video.rating}
              </p>
              <h2 className={styles.title_movie}>{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVideos;
