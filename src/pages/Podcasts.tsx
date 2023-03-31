import React from 'react';
import styles from '../styles.module.css';

function Podcasts() {
  return (
    <>
      <body className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Podcasts</h1>
          <a className={styles.a} href="https://baconsale.com">
            <img
              src="https://baconsale.files.wordpress.com/2018/11/baconsale3.png?w=884"
              alt="baconsale"
            />
          </a>
        </div>
      </body>
    </>
  );
}

export default Podcasts;
