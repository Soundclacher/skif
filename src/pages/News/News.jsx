import React, { useEffect, useState } from 'react';
import NewsList from '../../components/News/NewsList/NewsList';
import NewsDetail from '../../components/News/NewsDetail/NewsDetail';
import axios from 'axios';

import styles from './News.module.css';


const News = () => {

  const [news, setNews] = useState([]);
  const [detail, setDetail] = useState(news[0]);

  function handleChange(event, key) {
    setDetail(news[key]);
  }

  async function getNews() {
    const res = await axios.get('http://localhost:5001/post');

    if (res.status === 200)  {
      setNews(res.data.posts);
    }

  }

  useEffect(() => {
    getNews()
  }, []);

  useEffect(()  =>  {
    setDetail(news[0]);
  }, [news]);

  return (
    <div className={styles.news}>

      <NewsList items={news} handleChange={handleChange} />

      { detail &&  <NewsDetail detail={detail}  />}
    </div>
  );
}

export default News;
