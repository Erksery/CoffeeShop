import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {coffeeCardStyle} from './constants/colorTheme';
import {useTheme} from '../hooks/useTheme';

export default function SkeletonCoffeeCard() {
  const colors = useTheme();
  return (
    <View
      style={[
        styles.coffeeCardStyle,
        {backgroundColor: colors.elementBackground},
      ]}>
      <View style={{flexDirection: 'column', gap: 10}}>
        <View
          style={[
            styles.imageCard,
            {backgroundColor: colors.background},
          ]}></View>
        <View
          style={[
            styles.coffeeName,
            {backgroundColor: colors.background},
          ]}></View>
        <View
          style={[
            styles.coffeeRoasted,
            {backgroundColor: colors.background},
          ]}></View>
      </View>

      <View
        style={[styles.priceText, {backgroundColor: colors.background}]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  coffeeCardStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 13,
    width: 150,
    height: 250,
    borderRadius: coffeeCardStyle.borderRadiusCard,
    gap: 10,
  },
  imageCard: {
    width: '100%',
    height: 120,
    borderRadius: 20,
  },
  coffeeName: {
    width: '100%',
    height: 25,
    borderRadius: 20,
  },
  coffeeRoasted: {
    width: '80%',
    height: 15,
    borderRadius: 20,
  },
  priceText: {
    width: '100%',
    height: 25,
    borderRadius: 20,
  },
});
