import axios from 'axios';
import {useState, useEffect} from 'react';

export const useFetchCoffeeData = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  async function fetchCoffeeData() {
    const resData = await axios
      .get('https://65645638ceac41c0761dee9e.mockapi.io/name?type=Coffee')
      .then(res => setCoffeeData(res.data))
      .catch(err => console.log(err));
    return resData;
  }

  useEffect(() => {
    fetchCoffeeData();
    console.log(coffeeData);
  }, []);

  return {coffeeData};
};
