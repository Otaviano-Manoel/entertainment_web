"use client";
import Image from "next/image";
import React, { useRef } from "react";
import useEmail from "@/hooks/useEmail";
import usePassword from "@/hooks/usePassword";
import { validState } from "@/enum/validState";
import useRepeatPassword from "@/hooks/useRepeatPassword";
import useLocalDataClient from "@/hooks/useLocalDataClient";
import { clientData } from "@/Interface/clientData";
import moment from "moment";
import Link from "next/link";
import styles from "./signup.module.scss";

const SignUp = () => {
  const { email } = useEmail();
  const { password } = usePassword();
  const { repeatPassword } = useRepeatPassword();
  const { addDataClient } = useLocalDataClient();
  const login = useRef<HTMLAnchorElement | null>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validAll()) return;

    const date = moment();
    const newDate = date.add(1, "days");
    const formattedDate = newDate.format("MMMM Do YYYY, h:mm:ss a");

    const client: clientData = {
      name: "Fox",
      email: email.email,
      image: "/image-avatar.png",
      password: password.password,
      expire: formattedDate,
    };

    addDataClient(client);

    alert("All emails and passwords are saved in the browser cache.");

    login.current?.click();
  };

  const validAll = () => {
    const validEmail = email.thisEmailAccept();
    const validPassword = password.thisPasswordAccept();
    const validRepeatPassword = repeatPassword.thisRepeatPasswordAccept(
      password.password
    );

    return validEmail && validPassword && validRepeatPassword;
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
        <h1 className={styles.title}>Sign Up</h1>
        <label className={`${styles.containerInput}`} htmlFor="email">
          <input
            className={`${styles.input} ${
              email.isValid === validState.ERROR ? styles.error : ""
            }   ${
              email.isNullOrEmpty === validState.ACCEPT &&
              email.isValid === validState.ACCEPT
                ? styles.containsValue
                : ""
            }`}
            onInvalid={email.thisEmailAccept}
            onChange={email.handleSetEmail}
            onBlur={email.thisEmailAccept}
            value={email.email}
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />{" "}
          <p
            className={`${styles.messageError} ${
              email.isValid === validState.ERROR ||
              email.isNullOrEmpty === validState.ERROR
                ? ""
                : styles.hidden
            }`}
          >
            The email is wrong.
          </p>
        </label>

        <label className={`${styles.containerInput}`} htmlFor="password">
          <input
            className={`${styles.input} ${
              password.isValid === validState.ERROR ? styles.error : ""
            } ${
              password.isNullOrEmpty === validState.ACCEPT &&
              password.isValid === validState.ACCEPT
                ? styles.containsValue
                : ""
            }`}
            onChange={password.handleSetPassword}
            onInvalid={password.thisPasswordAccept}
            onBlur={password.thisPasswordAccept}
            value={password.password}
            minLength={4}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p
            className={`${styles.messageError} ${
              password.isValid === validState.ERROR ||
              password.isNullOrEmpty === validState.ERROR
                ? ""
                : styles.hidden
            }`}
          >
            Minimum of 4 characters
          </p>
        </label>

        <label className={`${styles.containerInput}`} htmlFor="repeatPassword">
          <input
            className={`${styles.input} ${
              repeatPassword.isValid === validState.ERROR ? styles.error : ""
            } ${
              repeatPassword.isNullOrEmpty === validState.ACCEPT &&
              repeatPassword.isValid === validState.ACCEPT
                ? styles.containsValue
                : ""
            }`}
            onChange={repeatPassword.handleSetRepeatPassword}
            onBlur={() =>
              repeatPassword.thisRepeatPasswordAccept(password.password)
            }
            value={repeatPassword.repeatPassword}
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat password"
          />
          <p
            className={`${styles.messageError} ${
              repeatPassword.isValid === validState.ERROR ||
              repeatPassword.isNullOrEmpty === validState.ERROR
                ? ""
                : styles.hidden
            }`}
          >
            The password is wrong.
          </p>
        </label>
        <button className={styles.submit} type="submit">
          Create an account
        </button>
        <p className={styles.p}>
          Already have an account?{" "}
          <Link ref={login} className={styles.link} href="/login" aria-label="Login">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
