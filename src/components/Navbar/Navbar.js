import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.navbar__logo}>
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Menu Section */}
      <div className={styles.navbar__menu}>
        <a className={styles.navbar__menuItem} href="#home">Cars</a>
        <a className={styles.navbar__menuItem} href="#about">Finance</a>
        <a className={styles.navbar__menuItem} href="#contact">Login</a>
      </div>
    </div>
  );
};

export default Navbar;