import {useEffect, useState, useContext} from 'react';
import {ThemeContext} from '../components/ThemeProvider';
import {
  darkModeColors,
  lightModeColors,
} from '../components/constants/colorTheme';

export const useTheme = () => {
  const {theme} = useContext(ThemeContext);

  return theme === 'light' ? lightModeColors : darkModeColors;
};
