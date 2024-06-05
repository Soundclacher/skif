import React from 'react';
import Header from '../../components/Header/Header';
import bg from './bg.png';

const Home = () => {
  return <>
      <Header/>
      <div style={
        {
          backgroundImage: `url(${bg})`, 
          width: "100%",
          height: '500px',
        }}> </div>
  </>;
};

export default Home;
