import React from 'react';
import styles from '../styles.module.css';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.img}
          src="JoelHiltonHeadshot.jpg"
          width="400"
          alt="Joel  Hilton"
        />

        <h1 className={styles.h1}>Joel Hilton's Movie Journal</h1>

        <p className={styles.p}>
          Welcome to my movie webpage! Here you'll find my personal database of
          movies as well as a link to my podcast!
        </p>
      </div>
    </>
  );
}

export default Home;
