import React, { useEffect, useState } from 'react';
import { useLocation } from'react-router-dom';
import DataList from '../../components/Data/DataList/DataList';
import DataDetail from '../../components/Data/DataDetail/DataDetail';
import axios from 'axios';

import styles from './Data.module.css';


const Data = ({fieldName, url}) => {

  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(data[0]);

  const location = useLocation();

  function handleChange(event, key) {
    setDetail(data[key]);
  }

  async function getData() {
    const res = await axios.get(url);

    if (res.status === 200)  {
      setData(res.data?.[fieldName]);
    }

  }

  useEffect(() => {
    getData()
  }, [location.pathname]);

  useEffect(()  =>  {
    setDetail(data[0]);
  }, [data]);

  return (
    <div className={styles.data}>

      <DataList items={data} handleChange={handleChange} />

      { detail &&  <DataDetail detail={detail}  />}
    </div>
  );
}

export default Data;
