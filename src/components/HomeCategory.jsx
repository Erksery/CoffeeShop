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
    {title: 'All', value: 0},
    {title: 'Cappucchino', value: 1},
    {title: 'Espresso', value: 2},
    {title: 'Americano', value: 3},
    {title: 'Macchiato', value: 4},
    {title: 'Latte', value: 5},
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
            onPress={() => setActiveCategory(category.value)}
            style={{paddingHorizontal: 3}}>
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    activeCategory === category.value
                      ? colors.basicColor
                      : colors.additionalTextColor,
                },
              ]}>
              {category.title}
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
