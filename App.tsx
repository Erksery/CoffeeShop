import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './src/components/ThemeProvider';
import {HomeStackNavigation} from './src/navigators/HomeStackNavigation';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <HomeStackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
