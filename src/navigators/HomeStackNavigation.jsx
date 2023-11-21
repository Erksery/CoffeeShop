import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';
import {TabNavigation} from './TabNavigation';
import Header from '../components/Header';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';

export const HomeStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
