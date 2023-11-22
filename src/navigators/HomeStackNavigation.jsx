import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';
import {TabNavigation} from './TabNavigation';
import Header from '../components/Header';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CoffeeScreen from '../screens/CoffeeScreen';
import HeaderCoffeeScreen from '../components/HeaderCoffeeScreen';

export const HomeStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="Coffee"
        component={CoffeeScreen}
        options={{header: () => <HeaderCoffeeScreen />}}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
