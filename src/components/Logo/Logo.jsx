import React from 'react';
import LogoSvg from './logo.svg';
import {Link} from 'react-router-dom';

import styles from './Logo.module.css'


const Logo = (props) => {
  return <>
  <Link className={styles.link} to="/">
    <img className={styles.logo} src={LogoSvg} alt="" />
    <h1 className={`${styles.h1} ${props.scroll ? styles.scroll : ''}`}>Ставропольский альпинисткий клуб СКИФ</h1>
  </Link>
  </>
}

export default Logo;
