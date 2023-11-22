import {useEffect, useState, useContext} from 'react';
import {ThemeContext} from '../components/ThemeProvider';

export const useTheme = () => {
  const {theme} = useContext(ThemeContext);

  const lightModeColors = {
    background: '#FCFCFC',
    basicColor: '#D17842',
    textColor: '#0C0F14',
    additionalTextColor: '#52555A',
    elementBackground: '#F8F8F8',
    statusBarContent: 'dark-content',
    borderButtonColor: '#AEAEAE',
    iconColor: '#e5e5e5',
    cardGradient1: '#E8E8E8',
    cardGradient2: '#FFFFFF',
    tabActiveColor: '#000000',
    lightGrayColor: '#AEAEAE',
  };

  const darkModeColors = {
    background: '#0C0F14',
    basicColor: '#D17842',
    textColor: '#FFFFFF',
    additionalTextColor: '#52555A',
    elementBackground: '#141921',
    statusBarContent: 'light-content',
    borderButtonColor: '#52555A',
    iconColor: '#52555A',
    cardGradient1: '#252A32',
    cardGradient2: '#0C0F14',
    tabActiveColor: '#D17842',
    lightGrayColor: '#AEAEAE',
  };
  return theme === 'light' ? lightModeColors : darkModeColors;
};
