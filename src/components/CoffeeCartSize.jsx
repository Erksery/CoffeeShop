import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useReducer} from 'react';
import {textFont, textSize} from './constants/colorTheme';
import Icon from 'react-native-vector-icons/Feather';
import {buttonStyles} from './constants/buttonConstant';

export default function CoffeeCartSize({
  colors,
  size,
  price,
  currency,
  handleSum,
}) {
  const [countPrice, setCountPrice] = useState(0);

  const handlePlusPrice = () => {
    setCountPrice(prev => prev + 1);
    handleSum(price);
  };

  const handleMinusPrice = () => {
    countPrice != 0 && setCountPrice(prev => prev - 1);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={[styles.coffeeCartSize, {backgroundColor: colors.background}]}>
        <Text style={[styles.coffeeSizeText, {color: colors.textColor}]}>
          {size}
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 5}}>
        <Text style={[styles.priceText, {color: colors.basicColor}]}>
          {currency}
        </Text>
        <Text style={[styles.priceText, {color: colors.textColor}]}>
          {price}
        </Text>
      </View>
      <View style={styles.addCoffeeContainer}>
        <TouchableOpacity
          onPress={handleMinusPrice}
          activeOpacity={buttonStyles.touchOpacity}
          style={[styles.addButton, {backgroundColor: colors.basicColor}]}>
          <Icon name="minus" size={22} color={'#FFFFFF'} />
        </TouchableOpacity>
        <View
          style={[
            styles.countContainer,
            {
              backgroundColor: colors.background,
              borderColor: colors.basicColor,
            },
          ]}>
          <Text style={{color: colors.textColor}}>{countPrice}</Text>
        </View>
        <TouchableOpacity
          onPress={handlePlusPrice}
          activeOpacity={buttonStyles.touchOpacity}
          style={[styles.addButton, {backgroundColor: colors.basicColor}]}>
          <Icon name="plus" size={22} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coffeeCartSize: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 80,
    borderRadius: buttonStyles.buttonBorderRadius,
  },
  coffeeSizeText: {
    fontSize: textSize.text3,
  },
  priceText: {
    fontFamily: textFont.textBold,
    fontSize: textSize.text2i5,
  },
  addButton: {
    padding: 7,
    borderRadius: buttonStyles.buttonBorderRadius,
  },
  addCoffeeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    width: 50,
    borderRadius: buttonStyles.buttonBorderRadius,
    borderWidth: 2,
  },
});
