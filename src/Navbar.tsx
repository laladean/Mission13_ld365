import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/">Home</Link>
          </li>
          <br></br>
          <li className={styles.li}>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <br></br>
          <li className={styles.li}>
            <Link to="/movies">Movie Database</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
