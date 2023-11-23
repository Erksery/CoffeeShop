import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import CoffeeCartCard from '../components/CoffeeCartCard';
import {screenPadding} from '../components/constants/paddingConstant';

export default function CartScreen() {
  const colors = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.cartScreen, {backgroundColor: colors.background}]}>
      <CoffeeCartCard colors={colors} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    paddingHorizontal: screenPadding.homeScreenPading,
  },
});
