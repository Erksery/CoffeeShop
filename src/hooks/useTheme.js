import {useEffect, useState, useContext} from 'react';
import {ThemeContext} from '../components/ThemeProvider';

export const useTheme = () => {
  const {theme} = useContext(ThemeContext);

  const lightModeColors = {
    background: '#FCFCFC',
    basicColor: '#0C0F14',
    textColor: '#0C0F14',
    additionalTextColor: '#52555A',
    elementBackground: '#F8F8F8',
    statusBarContent: 'dark-content',
    borderButtonColor: '#AEAEAE',
    iconColor: '#e5e5e5',
    cardGradient1: '#252A32',
    cardGradient2: '#0C0F14',
  };

  const darkModeColors = {
    background: '#0C0F14',
    basicColor: '#D17842',
    textColor: '#FFFFFF',
    additionalTextColor: '#52555A',
    elementBackground: '#252A32',
    statusBarContent: 'light-content',
    borderButtonColor: '#52555A',
    iconColor: '#52555A',
    cardGradient1: '#252A32',
    cardGradient2: '#0C0F14',
  };
  return theme === 'light' ? lightModeColors : darkModeColors;
};
