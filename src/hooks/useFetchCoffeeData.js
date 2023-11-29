import axios from 'axios';
import {useState, useEffect} from 'react';

export const useFetchCoffeeData = ({activeCategory}) => {
  const [coffeeData, setCoffeeData] = useState([]);
  const categories = [
    {title: '', value: 0},
    {title: 'Cappucchino', value: 1},
    {title: 'Espresso', value: 2},
    {title: 'Americano', value: 3},
    {title: 'Macchiato', value: 4},
    {title: 'Latte', value: 5},
  ];

  async function fetchCoffeeData() {
    const resData = await axios
      .get(
        `https://65645638ceac41c0761dee9e.mockapi.io/name?&name=${categories[activeCategory].title}&type=Coffee`,
      )
      .then(res => setCoffeeData(res.data))
      .catch(err => console.log(err));
    return resData;
  }

  useEffect(() => {
    fetchCoffeeData();
  }, [activeCategory]);

  return {coffeeData};
};
