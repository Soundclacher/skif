import React, {
  useEffect,
  useState
} from 'react';
import axios from 'axios';
import styles from './Events.module.css';
import NewsList  from   '../../components/News/NewsList/NewsList';
import NewsDetail  from  '../../components/News/NewsDetail/NewsDetail';

const Events = () => {
  const [news, setNews] = useState([]);
  const [detail, setDetail] = useState(news[0]);

  function handleChange(event, key) {
    setDetail(news[key]);
  }

  async function getNews() {
    const res = await axios.get('http://localhost:5001/event');

    if (res.status === 200)  {
      setNews(res.data.events);
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

export default Events;
