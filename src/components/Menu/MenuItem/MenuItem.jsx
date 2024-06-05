import React from 'react';
import {Link} from 'react-router-dom'

import styles from './menuItem.module.css';

const MenuItem = (props) => {
  return (
    <Link to={props.link} className={styles.item}>
      <img src={props.logo} alt="" />
      <p className={styles.p} >{props.text}</p>
    </Link>
  )
}

export default MenuItem;
