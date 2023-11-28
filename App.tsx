import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './src/components/ThemeProvider';
import {HomeStackNavigation} from './src/navigators/HomeStackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <HomeStackNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
