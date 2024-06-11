import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import styles from './MenuItem.module.css';

const MenuItem = (props) => {

  const [scrolled, setScrolled]  =  useState(props.scroll);

  useEffect(() => {
    setScrolled(props.scroll);
  }, [props.scroll]);

  return (
    <Link to={props.link} className={styles.item}>
      <img src={props.logo} alt="" />
      <p className={`${styles.p} ${scrolled ? styles.scroll : ''}`} >{props.text}</p>
    </Link>
  )
}

export default MenuItem;
