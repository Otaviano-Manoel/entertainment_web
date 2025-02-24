"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  return (
    <div className={styles.main}>
      <button onClick={login} className={styles.button} type="button">
        Login
      </button>
    </div>
  );
}
