"use client";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>
        {" "}
        App para girar una matriz 90° en sentido antihorario.
      </h1>
    </main>
  );
}
