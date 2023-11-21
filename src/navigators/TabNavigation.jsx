import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import HistoryScreen from '../screens/HistoryScreen';
import {useTheme} from '../hooks/useTheme';
import HomeIcon from 'react-native-vector-icons/Foundation';
import CartIcon from 'react-native-vector-icons/FontAwesome5';
import BellIcon from 'react-native-vector-icons/FontAwesome';
import HeartIcon from 'react-native-vector-icons/Ionicons';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const colors = useTheme();

  const focusColor = focused => {
    return focused ? colors.basicColor : colors.iconColor;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [styles.tabBarStyle, {backgroundColor: colors.background}],
        tabBarActiveTintColor: colors.basicColor,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon name="home" size={23} color={focusColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CartIcon
              name="shopping-cart"
              size={23}
              color={focusColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HeartIcon name="heart" size={25} color={focusColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BellIcon name="bell" size={25} color={focusColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
  },
});
