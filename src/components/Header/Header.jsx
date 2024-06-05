import React from 'react';
import Logo from '../Logo/Logo';
import styles from './header.module.css'
import Menu  from  '../Menu/Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <h1 className={styles.h1}>Ставропольский альпинисткий клуб СКИФ</h1>
      <Menu/>
    </header>


  )
}

export default Header;
