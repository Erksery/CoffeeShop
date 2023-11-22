import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';

export default function CoffeeSize({prices, activeSize, setActiveSize}) {
  const colors = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 8,
        width: '100%',
      }}>
      {prices.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveSize(index)}
          style={[
            styles.sizeButton,
            {
              borderColor:
                activeSize === index
                  ? colors.basicColor
                  : colors.elementBackground,

              backgroundColor: colors.elementBackground,
            },
          ]}>
          <Text
            style={{
              color:
                activeSize === index
                  ? colors.basicColor
                  : colors.additionalTextColor,
            }}>
            {item.size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sizeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
  },
});
