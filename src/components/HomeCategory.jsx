import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import {textSize, textWeight} from './constants/colorTheme';

export default function HomeCategory({colors}) {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    'All',
    'Cappuccino',
    'Espreesso',
    'Americano',
    'Macchiato',
  ];

  return (
    <ScrollView horizontal={true}>
      <View style={{flexDirection: 'row', gap: 15}}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveCategory(index)}>
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    activeCategory === index
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
    fontFamily: 'Poppins-SemiBold',
  },
});
