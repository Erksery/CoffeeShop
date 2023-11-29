import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {coffeeCardStyle, textSize} from './constants/colorTheme';
import {useSelector, useDispatch} from 'react-redux';
import {removeCoffee} from '../store/testSlice';

import CoffeeCartSize from './CoffeeCartSize';

export default function CoffeeCartCard({colors, setTotalPrice, props, index}) {
  const dispatch = useDispatch();

  const handleSum = price => {
    setTotalPrice(prev => prev + +price);
  };

  console.log(props);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.coffeeCartCard}
      colors={[colors.cardGradient1, colors.cardGradient2]}>
      <View style={styles.coffeeInfo}>
        <Image
          style={styles.imageCoffeeCartCard}
          source={{uri: props.imagelink_square}}
        />
        <View style={{justifyContent: 'space-between'}}>
          <View>
            <Text style={[styles.coffeeName, {color: colors.textColor}]}>
              {props.name}
            </Text>
            <Text style={styles.textIngredient}>
              {props.special_ingredient}
            </Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(removeCoffee(index))}>
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
                {props.roasted}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{gap: 10}}>
        {props.prices.map((item, index) => {
          return (
            <CoffeeCartSize
              key={index}
              colors={colors}
              {...item}
              handleSum={handleSum}
            />
          );
        })}
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
