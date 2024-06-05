import React from 'react';

const MenuItem = (props) => {
  return (
    <a href={props.link}>
      <img src={props.logo} alt="" />
      <p>{props.text}</p>
    </a>
  )
}

export default MenuItem;
