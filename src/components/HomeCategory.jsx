import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import {textFont, textSize, textWeight} from './constants/colorTheme';

export default function HomeCategory({
  colors,
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
    'All',
    'Cappucchino',
    'Espresso',
    'Americano',
    'Macchiato',
    'Latte',
  ];

  return (
    <ScrollView
      horizontal={true}
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row', gap: 15}}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveCategory(category)}
            style={{paddingHorizontal: 3}}>
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    activeCategory === category
                      ? colors.basicColor
                      : colors.additionalTextColor,
                },
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryText: {
    fontSize: textSize.text3,
    fontFamily: textFont.textBold,
  },
});
