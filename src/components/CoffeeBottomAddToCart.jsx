import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {textFont, textSize} from './constants/colorTheme';
import {useNavigation} from '@react-navigation/native';

export default function CoffeeBottomAddToCart({
  activeSize,
  buttonValue,
  price,
  link,
  onPressButtonAdd,
}) {
  const colors = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.priceContainer, {backgroundColor: colors.background}]}>
      <View style={styles.priceTextContainer}>
        <Text style={{color: colors.additionalTextColor}}>Price</Text>
        <View style={{flexDirection: 'row', gap: 4}}>
          <Text
            style={{
              color: colors.basicColor,
              fontSize: textSize.text2i5,
              fontWeight: 'bold',
            }}>
            $
          </Text>
          <Text style={[styles.priceText, {color: colors.textColor}]}>
            {(+price).toFixed(2)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          onPressButtonAdd();
          navigation.navigate(link);
        }}
        style={[styles.addButtom, {backgroundColor: colors.basicColor}]}>
        <Text style={styles.addButtomText}>{buttonValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  priceContainer: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 2,
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  priceTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceText: {
    fontSize: textSize.text2i5,
    fontWeight: 'bold',
  },

  addButtom: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  addButtomText: {
    color: '#FFFFFF',
    fontSize: textSize.text2i5,
    fontFamily: textFont.textBold,
  },
});
