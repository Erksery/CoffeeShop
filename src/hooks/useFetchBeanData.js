import axios from 'axios';
import {useState, useEffect} from 'react';

export const useFetchBeanData = () => {
  const [beanData, setBeanData] = useState([]);

  async function fetchBeanData() {
    const resData = await axios
      .get('https://65645638ceac41c0761dee9e.mockapi.io/name?type=Bean')
      .then(res => setBeanData(res.data))
      .catch(err => console.log(err));
    return resData;
  }

  useEffect(() => {
    fetchBeanData();
  }, []);

  return {beanData};
};
