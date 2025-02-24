"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/login/login.module.scss";
import { defaultAuthData } from "@/Interface/authData";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const auth = defaultAuthData;

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const repeatPassword = formData.get("repeatPassword")?.toString();

    if (!validAll()) return;

    console.log(email, password, repeatPassword);
  };

  const handleSetEmail = (input: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(input.currentTarget.value);
  };
  const handleInvalidEmail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setErrorEmail(!regex.test(email));
  };
  const hasValueInEmail = (): boolean => {
    return email !== "";
  };

  const handleSetPassword = (input: React.ChangeEvent<HTMLInputElement>) => {
    setErrorPassword(false);
    setPassword(input.currentTarget.value);
  };
  const handleInvalidPassword = () => {
    const b = !hasValueInPassword();
    setErrorPassword(b);
    return !b;
  };
  const hasValueInPassword = (): boolean => {
    return password !== "";
  };

  const handleSetRepeatPassword = (
    input: React.ChangeEvent<HTMLInputElement>
  ) => {
    setErrorRepeatPassword(false);
    setRepeatPassword(input.currentTarget.value);
  };
  const handleInvalidRepeatPassword = (): boolean => {
    const b = repeatPassword !== password;
    setErrorRepeatPassword(b);
    return !b;
  };
  const hasValueInRepeatPassword = (): boolean => {
    return repeatPassword !== "";
  };

  const validAll = () => {
    const validEmail = hasValueInEmail();
    const validPassword = handleInvalidPassword();
    const validRepeatPassword = handleInvalidRepeatPassword();

    if (!validEmail) setErrorEmail(true);
    if (!validPassword) setErrorPassword(true);
    if (!validRepeatPassword) setErrorRepeatPassword(true);

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
            className={`${styles.input} ${errorEmail ? styles.error : ""}   ${
              hasValueInEmail() && !errorEmail ? styles.containsValue : ""
            }`}
            onInvalid={handleInvalidEmail}
            onChange={handleSetEmail}
            onBlur={handleInvalidEmail}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />{" "}
          <p
            className={`${styles.messageError} ${
              errorEmail ? "" : styles.hidden
            }`}
          >
            The email is wrong.
          </p>
        </label>

        <label className={`${styles.containerInput}`} htmlFor="password">
          <input
            className={`${styles.input} ${errorPassword ? styles.error : ""} ${
              hasValueInPassword() && !errorPassword ? styles.containsValue : ""
            }`}
            onChange={handleSetPassword}
            onBlur={handleInvalidPassword}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p
            className={`${styles.messageError} ${
              errorPassword ? "" : styles.hidden
            }`}
          >
            Can’t be empty
          </p>
        </label>

        <label className={`${styles.containerInput}`} htmlFor="repeatPassword">
          <input
            className={`${styles.input} ${
              errorRepeatPassword ? styles.error : ""
            } ${
              hasValueInRepeatPassword() && !errorRepeatPassword
                ? styles.containsValue
                : ""
            }`}
            onChange={handleSetRepeatPassword}
            onBlur={handleInvalidRepeatPassword}
            value={repeatPassword}
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat password"
          />
          <p
            className={`${styles.messageError} ${
              errorRepeatPassword ? "" : styles.hidden
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
          <a className={styles.link} href="/login">
            {" "}
            Login
          </a>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
