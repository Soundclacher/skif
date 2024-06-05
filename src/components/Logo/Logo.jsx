import React from 'react';
import LogoSvg from './logo.svg';
import styles from './style.module.css'


const Logo = () => {
  return <>
    <img className={styles.logo} src={LogoSvg} alt="" />
  </>
}

export default Logo;
