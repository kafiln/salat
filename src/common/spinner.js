import React from "react";
import styles from "./spinner.module.css";

function spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.spinner} />
      </div>
      <div className={styles.row}>
        <h1> Loading </h1>
      </div>
    </div>
  );
}

export default spinner;
