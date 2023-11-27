import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';
import DrawerContent from '../components/Drawer/DrawerContent';
import {useTheme} from '../hooks/useTheme';
import {TabNavigation} from './TabNavigation';

export default function DrawerNavigation() {
  const colors = useTheme();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.elementBackground,
        },
      }}>
      <Drawer.Screen
        name="Drawer"
        component={TabNavigation}
        options={{header: () => <Header />, headerShadowVisible: false}}
      />
    </Drawer.Navigator>
  );
}
