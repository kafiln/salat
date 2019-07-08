import React from 'react';
import styles from './spinner.module.css';

function spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
        <h1>Loading ...</h1>
      </div>
    </div>
  );
}

export default spinner;
