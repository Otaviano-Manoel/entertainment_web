"use client";

import Image from "next/image";
import React from "react";
import styles from "@/app/login/login.module.scss";
import useEmail from "@/hooks/useEmail";
import usePassword from "@/hooks/usePassword";
import { validState } from "@/enum/validState";
import useLocalDataClient from "@/hooks/useLocalDataClient";
import { useClient } from "@/context/useClient";
import { useRouter } from "next/navigation";

const Login = () => {
  const { email } = useEmail();
  const { password } = usePassword();
  const { login } = useLocalDataClient();
  const { setClient } = useClient();
  const navigate = useRouter();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validAll()) return;

    const client = login(email.email, password.password);
    if (client) {
      setClient(client);
      navigate.push("/");
    } else alert("This user does not exist.");
  };

  const validAll = () => {
    const validEmail = email.thisEmailAccept();
    const validPassword = password.thisPasswordAccept();

    console.log(validEmail, validPassword);

    return validEmail && validPassword;
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
            className={`${styles.input} ${
              email.isValid === validState.ERROR ? styles.error : ""
            }   ${
              email.isNullOrEmpty === validState.ACCEPT && validState.ACCEPT
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
              email.isNullOrEmpty === validState.ERROR ||
              email.isValid === validState.ERROR
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

        <a className={styles.gmail} onClick={() => {}}>
          <Image src={"./gmail.svg"} alt={""} width={48} height={48} />
        </a>
      </form>
    </main>
  );
};

export default Login;
