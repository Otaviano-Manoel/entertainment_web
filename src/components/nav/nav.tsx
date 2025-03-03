import Image from "next/image";
import React from "react";
import styles from "./nav.module.scss";
import { Client } from "@/Interface/client";
import Link from "next/link";

interface NavProps {
  page: "home" | "series" | "movies" | "bookmark";
  client: Client | null;
}

const Nav = (props: NavProps) => {
  const handleActive = (page: "home" | "series" | "movies" | "bookmark") => {
    return props.page === page ? styles.active : "";
  };

  return (
    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src={"/logo.svg"}
        alt={""}
        width={32}
        height={26}
      />{" "}
      <div className={styles.categories}>
        <Link className={styles.home} href="/">
          <div className={`${styles.img} ${handleActive("home")}`} />
        </Link>
        <Link className={styles.movies} href="/movies">
          <div className={`${styles.img}  ${handleActive("movies")}`} />
        </Link>
        <Link className={styles.series} href="/series">
          <div className={`${styles.img}  ${handleActive("series")}`} />
        </Link>
        <Link className={styles.bookmark} href="/bookmark">
          <div className={`${styles.img}  ${handleActive("bookmark")}`} />
        </Link>
      </div>
      {props.client ? (
        <Link className={styles.user} href="/login">
          <div className={styles.background}>
            <Image
              className={styles.img}
              src={props.client.image}
              alt={""}
              width={32}
              height={26}
            />
          </div>

          <p className={styles.name}>{props.client.name}</p>
        </Link>
      ) : (
        <></>
      )}{" "}
    </nav>
  );
};

export default Nav;
