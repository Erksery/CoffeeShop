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
import DrawerNavigation from './DrawerNavigation';
import HeaderGoBack from '../components/HeaderGoBack';
import GoBackButton from '../components/GoBackButton';
import {useTheme} from '../hooks/useTheme';
import SearchScreen from '../screens/SearchScreen';

export const HomeStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const colors = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Coffee"
        component={CoffeeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerLeft: () => <GoBackButton />,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.textColor,
            fontFamily: 'Poppins-Medium',
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          header: () => <HeaderGoBack />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: () => <HeaderGoBack />,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
