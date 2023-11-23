import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {coffeeCardStyle, textSize} from './constants/colorTheme';

import CoffeeData from '../data/CoffeData';
import CoffeeCartSize from './CoffeeCartSize';

export default function CoffeeCartCard({colors}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.coffeeCartCard}
      colors={[colors.cardGradient1, colors.cardGradient2]}>
      <View style={styles.coffeeInfo}>
        <Image
          style={styles.imageCoffeeCartCard}
          source={CoffeeData[5].imagelink_square}
        />
        <View style={{justifyContent: 'space-between'}}>
          <View>
            <Text style={[styles.coffeeName, {color: colors.textColor}]}>
              {CoffeeData[5].name}
            </Text>
            <Text style={styles.textIngredient}>
              {CoffeeData[5].special_ingredient}
            </Text>
          </View>

          <View
            style={[
              styles.coffeeRoasted,
              {backgroundColor: colors.elementBackground},
            ]}>
            <Text
              style={[
                styles.coffeeRoastedText,
                {color: colors.additionalTextColor},
              ]}>
              {CoffeeData[5].roasted}
            </Text>
          </View>
        </View>
      </View>
      <View style={{gap: 10}}>
        <CoffeeCartSize colors={colors} />
        <CoffeeCartSize colors={colors} />
        <CoffeeCartSize colors={colors} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  coffeeCartCard: {
    flex: 1,
    gap: 10,
    padding: 13,
    borderRadius: coffeeCardStyle.borderRadiusCard,
  },
  coffeeName: {
    fontSize: textSize.text2,
    fontFamily: 'Poppins-Regular',
  },
  imageCoffeeCartCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    objectFit: 'fill',
  },
  coffeeInfo: {
    flexDirection: 'row',
    gap: 20,
  },

  textIngredient: {
    color: '#AEAEAE',
    fontFamily: 'Poppins-Light',
    fontSize: textSize.text5,
  },

  coffeeRoasted: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },

  coffeeRoastedText: {
    fontFamily: 'Poppins-Regular',
    fontSize: textSize.text5,
  },
});
