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
        alt={"Logo"}
        width={32}
        height={26}
      />{" "}
      <div className={styles.categories}>
        <Link className={styles.home} href="/" aria-label="Go to home">
          <div className={`${styles.img} ${handleActive("home")}`} />
        </Link>
        <Link
          className={styles.movies}
          href="/movies"
          aria-label="Go to movies"
        >
          <div className={`${styles.img}  ${handleActive("movies")}`} />
        </Link>
        <Link
          className={styles.series}
          href="/series"
          aria-label="Go to series"
        >
          <div className={`${styles.img}  ${handleActive("series")}`} />
        </Link>
        <Link
          className={styles.bookmark}
          href="/bookmark"
          aria-label="Go to bookmark"
        >
          <div className={`${styles.img}  ${handleActive("bookmark")}`} />
        </Link>
      </div>
      {props.client ? (
        <Link className={styles.user} href="/login" aria-label="Go to login">
          <div className={styles.background}>
            <Image
              className={styles.img}
              src={props.client.image}
              alt={"User image"}
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
