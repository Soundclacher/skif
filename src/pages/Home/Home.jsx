import React from 'react';
import logo from './logo_main.png';
import styles from  './Home.module.css';

const Home = () => {
  return (
    <div
      className={styles.mainblock}>
      <img src={logo} alt=""  className={styles.logo} />
      <p>
        "Что мы ищем в горах? И отвечаю: "Человек ищет в горах человека.
        Дружба, совместная борьба, радость победы разумной воли человека над слепыми силами природы.
        Без дружбы, без друзей нет альпинизма. Даже созерцание великой красоты гор только тогда может быть полным, когда рядом с тобой друг."
      </p>
      <p className={styles.author}>Я.Г.Аркин</p>
    </div>
  );
};

export default Home;
