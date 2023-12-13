import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import {textSize} from './constants/colorTheme';
import {useNavigation} from '@react-navigation/native';

export default function SearchCoffeeCard(props) {
  const colors = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Coffee', {...props})}>
      <View
        style={[
          styles.coffeeCard,
          {backgroundColor: colors.elementBackground},
        ]}>
        <Image
          source={{uri: props.imagelink_square}}
          style={styles.coffeeCardImage}
        />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              color: colors.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: textSize.text3,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              color: colors.textColor,
              fontFamily: 'Poppins-Regular',
              fontSize: textSize.text6,
            }}>
            {props.roasted}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coffeeCard: {
    flexDirection: 'row',
    gap: 10,
    padding: 15,
    borderRadius: 20,
  },
  coffeeCardImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    objectFit: 'cover',
  },
});
