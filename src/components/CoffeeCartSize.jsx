import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {textFont, textSize} from './constants/colorTheme';
import Icon from 'react-native-vector-icons/Feather';

export default function CoffeeCartSize({colors}) {
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
          S
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 5}}>
        <Text style={[styles.priceText, {color: colors.basicColor}]}>$</Text>
        <Text style={[styles.priceText, {color: colors.textColor}]}>4.20</Text>
      </View>
      <View style={styles.addCoffeeContainer}>
        <TouchableOpacity
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
          <Text style={{color: '#FFFFFF'}}>1</Text>
        </View>
        <TouchableOpacity
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
    borderRadius: 10,
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
    borderRadius: 10,
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
    borderRadius: 10,
    borderWidth: 2,
  },
});
