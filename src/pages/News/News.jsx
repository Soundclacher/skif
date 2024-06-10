import React, { useState } from 'react';
import NewsList from '../../components/News/NewsList/NewsList';
import NewsDetail from '../../components/News/NewsDetail/NewsDetail';


const newsList = [
  {
    files: [],
    title: '',
    content: '',
  },
  {
    files: [],
    title: '',
    content: '',
  },
  {
    files: [],
    title: '',
    content: '',
  },
  {
    files: [],
    title: '',
    content: '',
  }
];


const News = () => {

  const [news, setNews] = useState(newsList);
  const [detail, setDetail] = useState({});

  function handleChange(event, key) {
    setDetail(newsList[key])
  }

  return <>
    
    <NewsList items={news} handleChange={handleChange} />

    <NewsDetail detail={detail} />
  </>;
}

export default News;
