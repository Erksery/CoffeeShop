import {ColorSchemeName, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, createContext, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext(null);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState<ColorSchemeName>();

  useEffect(() => {
    async function getData() {
      try {
        const value = (await AsyncStorage.getItem('key')) as ColorSchemeName;
        if (value !== null) {
          setTheme(value);

          console.log('Полученные данные:', value);
        } else {
          setTheme('light');
          console.log('Данных нет');
        }
      } catch (error) {
        console.log('Ошибка при получении данных:', error);
      }
    }

    getData();
  }, []);

  const saveData = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem('key', newTheme);
    } catch (err) {
      console.log('NO OK');
    }
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme, saveData}}>
      {children}
    </ThemeContext.Provider>
  );
};
