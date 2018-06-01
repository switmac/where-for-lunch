import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div className={styles.root}>
    <a href="/">HOME</a>
    <a href="/contact">CONTACT</a>
  </div>
);

export default Header;
