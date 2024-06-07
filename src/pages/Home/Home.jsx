import React from 'react';
import bg from './bg.png';

const Home = () => {
  return <>
      <div style={
        {
          backgroundImage: `url(${bg})`, 
          width: "100%",
          height: '200vh',
        }}> </div>
  </>;
};

export default Home;
