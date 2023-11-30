import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import CoffeeScreenImageInfo from './CoffeeScreenImageInfo';

export default function FavoriteCoffee(props) {
  const truncateDescription = str => {
    if (str.length >= 200) return str.substring(0, 200) + '...';
    else str;
  };

  const colors = useTheme();
  return (
    <View
      style={[
        styles.favoriteCoffee,
        {backgroundColor: colors.elementBackground},
      ]}>
      <View style={{height: 370}}>
        <ImageBackground
          imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
          style={styles.favoriteImage}
          source={{uri: props.imagelink_portrait}}>
          <CoffeeScreenImageInfo props={props} height="40%" />
        </ImageBackground>
      </View>

      <View style={{padding: 10}}>
        <Text style={[styles.descriptionText, {color: colors.textColor}]}>
          {truncateDescription(props.description)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteCoffee: {
    borderRadius: 20,
  },
  favoriteImage: {
    flex: 1,
    justifyContent: 'flex-end',
    objectFit: 'fill',
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
  },
});
