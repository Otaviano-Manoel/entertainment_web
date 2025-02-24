"use client";

import Image from "next/image";
import React from "react";
import styles from "@/app/login/login.module.scss";
import { defaultAuthData } from "@/Interface/authData";

const Login = () => {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
  };

  return (
    <main className={styles.main}>
      <Image
        className={styles.img}
        src={"./logo.svg"}
        alt={"Logo"}
        width={32}
        height={26}
      />

      <form onSubmit={submit} method="post" className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <label className={`${styles.containerInput}`} htmlFor="email">
          <input
            className={`${styles.input} ${/*styles.error*/ ""}   ${
              /*styles.containsValue*/ ""
            }`}
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />{" "}
          <p className={`${styles.messageError} ${styles.hidden}`}>
            Can’t be empty
          </p>
        </label>

        <label className={`${styles.containerInput}`} htmlFor="password">
          <input
            className={`${styles.input} ${/*styles.error*/ ""} ${
              /*styles.containsValue*/ ""
            }`}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p className={`${styles.messageError} ${styles.hidden}`}>
            Can’t be empty
          </p>
        </label>
        <button className={styles.submit} type="submit">
          Login to your account
        </button>
        <p className={styles.p}>
          Don’t have an account?{" "}
          <a className={styles.link} href="/signup">
            {" "}
            Sign Up
          </a>
        </p>
      </form>
    </main>
  );
};

export default Login;
